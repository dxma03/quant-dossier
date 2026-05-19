'use client';

import { useMemo, useState } from 'react';
import { computeQuote } from '@/lib/market-making/simulator';

export default function MarketMakingLabPage() {
  const [midPrice, setMidPrice] = useState(100);
  const [halfSpread, setHalfSpread] = useState(0.25);
  const [inventory, setInventory] = useState(0);
  const [riskAversion, setRiskAversion] = useState(0.1);

  const quote = useMemo(() => computeQuote({ midPrice, halfSpread, inventory, riskAversion }), [midPrice, halfSpread, inventory, riskAversion]);

  return (
    <section>
      <h1>Market-Making Lab</h1>
      <div className="card">
        <label>Mid price: {midPrice.toFixed(2)}</label>
        <input type="range" min="50" max="200" step="0.5" value={midPrice} onChange={(e) => setMidPrice(Number(e.target.value))} />
        <label>Half spread: {halfSpread.toFixed(2)}</label>
        <input type="range" min="0.05" max="2" step="0.05" value={halfSpread} onChange={(e) => setHalfSpread(Number(e.target.value))} />
        <label>Inventory: {inventory}</label>
        <input type="range" min="-20" max="20" step="1" value={inventory} onChange={(e) => setInventory(Number(e.target.value))} />
        <label>Risk aversion: {riskAversion.toFixed(2)}</label>
        <input type="range" min="0" max="1" step="0.01" value={riskAversion} onChange={(e) => setRiskAversion(Number(e.target.value))} />
      </div>
      <div className="card">
        <p>Reservation price: <code>{quote.reservationPrice.toFixed(4)}</code></p>
        <p>Bid quote: <code>{quote.bid.toFixed(4)}</code></p>
        <p>Ask quote: <code>{quote.ask.toFixed(4)}</code></p>
      </div>
    </section>
  );
}
