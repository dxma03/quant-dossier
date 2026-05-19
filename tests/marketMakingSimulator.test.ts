import { describe, expect, it } from 'vitest';
import {
  buildQuote,
  SeededRng,
  simulateMarketMaking,
  type SimulationConfig,
} from '../src/sim/marketMakingSimulator';

describe('buildQuote', () => {
  it('widens around fair value and skews by inventory', () => {
    const flat = buildQuote(100, 0, 20, 1);
    expect(flat.bid).toBeLessThan(100);
    expect(flat.ask).toBeGreaterThan(100);

    const longInv = buildQuote(100, 5, 20, 2);
    expect(longInv.bid).toBeLessThan(flat.bid);
    expect(longInv.ask).toBeLessThan(flat.ask);
  });
});

describe('simulateMarketMaking', () => {
  const config: SimulationConfig = {
    steps: 200,
    dt: 1 / 252,
    initialFairValue: 100,
    fairValueVolatility: 2,
    clientArrivalRate: 8,
    orderSizeMin: 0.2,
    orderSizeMax: 1.2,
    maxSpreadBps: 25,
    inventorySkewBpsPerUnit: 1,
    inventoryPenalty: 0.01,
  };

  it('is deterministic for a fixed seed', () => {
    const r1 = simulateMarketMaking(config, new SeededRng(123));
    const r2 = simulateMarketMaking(config, new SeededRng(123));

    expect(r1.endingPnl).toBeCloseTo(r2.endingPnl, 10);
    expect(r1.riskAdjustedScore).toBeCloseTo(r2.riskAdjustedScore, 10);
    expect(r1.history.length).toBe(config.steps);
  });

  it('satisfies accounting identity pnl = cash + inv*fairValue each step', () => {
    const result = simulateMarketMaking(config, new SeededRng(999));

    for (const row of result.history) {
      expect(row.totalPnl).toBeCloseTo(row.cash + row.inventory * row.fairValue, 10);
      expect(row.netFill).toBeCloseTo(row.buyFill - row.sellFill, 10);
      expect(row.bid).toBeLessThanOrEqual(row.ask);
    }
  });

  it('applies inventory penalty to score', () => {
    const noPenalty = simulateMarketMaking({ ...config, inventoryPenalty: 0 }, new SeededRng(77));
    const penalty = simulateMarketMaking({ ...config, inventoryPenalty: 0.2 }, new SeededRng(77));

    expect(penalty.riskAdjustedScore).toBeLessThanOrEqual(noPenalty.riskAdjustedScore);
  });
});
