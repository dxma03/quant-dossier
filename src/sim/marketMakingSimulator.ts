export interface SimulationConfig {
  steps: number;
  dt: number;
  initialFairValue: number;
  fairValueVolatility: number;
  clientArrivalRate: number;
  orderSizeMin: number;
  orderSizeMax: number;
  maxSpreadBps: number;
  inventorySkewBpsPerUnit: number;
  inventoryPenalty: number;
}

export interface StepState {
  step: number;
  fairValue: number;
  bid: number;
  ask: number;
  buyFlow: number;
  sellFlow: number;
  buyFill: number;
  sellFill: number;
  netFill: number;
  inventory: number;
  cash: number;
  midMarkToMarket: number;
  realizedPnl: number;
  totalPnl: number;
}

export interface SimulationResult {
  history: StepState[];
  endingInventory: number;
  endingCash: number;
  endingPnl: number;
  riskAdjustedScore: number;
}

export interface RandomSource {
  uniform(): number;
  normal(): number;
}

export class SeededRng implements RandomSource {
  private state: number;

  constructor(seed: number) {
    this.state = seed >>> 0;
  }

  uniform(): number {
    this.state = (1664525 * this.state + 1013904223) >>> 0;
    return this.state / 0x100000000;
  }

  normal(): number {
    const u1 = Math.max(this.uniform(), Number.EPSILON);
    const u2 = this.uniform();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  }
}

export function buildQuote(
  fairValue: number,
  inventory: number,
  maxSpreadBps: number,
  inventorySkewBpsPerUnit: number,
): { bid: number; ask: number } {
  const halfSpread = (fairValue * maxSpreadBps) / 20000;
  const skew = (fairValue * inventorySkewBpsPerUnit * inventory) / 10000;

  const rawBid = fairValue - halfSpread - skew;
  const rawAsk = fairValue + halfSpread - skew;

  return {
    bid: Math.min(rawBid, rawAsk),
    ask: Math.max(rawBid, rawAsk),
  };
}

function boundedPoissonMean(rate: number, dt: number): number {
  return Math.max(0, rate * dt);
}

function samplePoisson(lambda: number, rng: RandomSource): number {
  if (lambda === 0) {
    return 0;
  }

  const L = Math.exp(-lambda);
  let k = 0;
  let p = 1;
  do {
    k += 1;
    p *= rng.uniform();
  } while (p > L);
  return k - 1;
}

function sampleOrderSize(config: SimulationConfig, rng: RandomSource): number {
  const low = Math.min(config.orderSizeMin, config.orderSizeMax);
  const high = Math.max(config.orderSizeMin, config.orderSizeMax);
  return low + (high - low) * rng.uniform();
}

export function simulateMarketMaking(
  config: SimulationConfig,
  rng: RandomSource = new SeededRng(42),
): SimulationResult {
  const history: StepState[] = [];
  let fairValue = config.initialFairValue;
  let inventory = 0;
  let cash = 0;
  let realizedPnl = 0;

  const pnlPath: number[] = [];

  for (let step = 1; step <= config.steps; step += 1) {
    fairValue += config.fairValueVolatility * Math.sqrt(config.dt) * rng.normal();

    const { bid, ask } = buildQuote(
      fairValue,
      inventory,
      config.maxSpreadBps,
      config.inventorySkewBpsPerUnit,
    );

    const buyFlow = samplePoisson(boundedPoissonMean(config.clientArrivalRate / 2, config.dt), rng);
    const sellFlow = samplePoisson(boundedPoissonMean(config.clientArrivalRate / 2, config.dt), rng);

    let buyFill = 0;
    let sellFill = 0;

    for (let i = 0; i < buyFlow; i += 1) {
      buyFill += sampleOrderSize(config, rng);
    }
    for (let i = 0; i < sellFlow; i += 1) {
      sellFill += sampleOrderSize(config, rng);
    }

    inventory += buyFill;
    cash -= buyFill * bid;

    inventory -= sellFill;
    cash += sellFill * ask;

    const netFill = buyFill - sellFill;
    const midMarkToMarket = inventory * fairValue;
    const totalPnl = cash + midMarkToMarket;
    realizedPnl = totalPnl;
    pnlPath.push(totalPnl);

    history.push({
      step,
      fairValue,
      bid,
      ask,
      buyFlow,
      sellFlow,
      buyFill,
      sellFill,
      netFill,
      inventory,
      cash,
      midMarkToMarket,
      realizedPnl,
      totalPnl,
    });
  }

  const pnlDiffs = pnlPath.slice(1).map((v, i) => v - pnlPath[i]);
  const mean = pnlDiffs.length
    ? pnlDiffs.reduce((a, b) => a + b, 0) / pnlDiffs.length
    : history.at(-1)?.totalPnl ?? 0;
  const variance = pnlDiffs.length
    ? pnlDiffs.reduce((acc, x) => acc + (x - mean) ** 2, 0) / pnlDiffs.length
    : 0;
  const stdev = Math.sqrt(variance);
  const inventoryPenalty = config.inventoryPenalty * Math.abs(inventory);
  const riskAdjustedScore = (stdev > 0 ? mean / stdev : mean) - inventoryPenalty;

  return {
    history,
    endingInventory: inventory,
    endingCash: cash,
    endingPnl: history.at(-1)?.totalPnl ?? 0,
    riskAdjustedScore,
  };
}
