import { describe, expect, it } from 'vitest';
import { computeQuote } from './simulator';

describe('computeQuote', () => {
  it('widens around reservation price by half-spread', () => {
    const quote = computeQuote({ midPrice: 100, halfSpread: 0.5, inventory: 0, riskAversion: 0.1 });
    expect(quote.bid).toBe(99.5);
    expect(quote.ask).toBe(100.5);
  });

  it('skews reservation price with positive inventory', () => {
    const quote = computeQuote({ midPrice: 100, halfSpread: 0.5, inventory: 4, riskAversion: 0.2 });
    expect(quote.reservationPrice).toBe(99.2);
  });
});
