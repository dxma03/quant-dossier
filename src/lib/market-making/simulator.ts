export type SimulatorConfig = {
  midPrice: number;
  halfSpread: number;
  inventory: number;
  riskAversion: number;
};

export type Quote = {
  bid: number;
  ask: number;
  reservationPrice: number;
};

export function computeQuote(config: SimulatorConfig): Quote {
  const skew = config.riskAversion * config.inventory;
  const reservationPrice = config.midPrice - skew;
  return {
    reservationPrice,
    bid: reservationPrice - config.halfSpread,
    ask: reservationPrice + config.halfSpread
  };
}
