import React, { useState } from 'react';

const Calculator: React.FC = () => {
    const [accountBalance, setAccountBalance] = useState<number>(0);
    //   const [side, setSide] = useState<boolean>(true);
  const [sharePrice, setSharePrice] = useState<number>(0);
  const [stopLoss, setStopLoss] = useState<number>(0);
  const [takeProfit, setTakeProfit] = useState<number>(0);

  const [rewardRiskRatio, setRewardRiskRatio] = useState<number>(0);
  const [sharesToBuy, setSharesToBuy] = useState<number>(0);

  const calculateShares = () => {
    const risk = sharePrice - stopLoss;
    const reward = takeProfit - sharePrice;
    const rewardRiskRatio = (reward / risk).toFixed(2);
    setRewardRiskRatio(Number(rewardRiskRatio));

    const shares = (accountBalance * 0.01 / risk).toFixed(2);
    setSharesToBuy(Number(shares));
  };

  return (
    <div>
      <h1>Swing Trade Calculator</h1>
      {/* <input type="boolean" placeholder="Side" onChange={(e) => setSide(e.target.value)} /> */}
      <input type="number" placeholder="Share Price" onChange={(e) => setSharePrice(parseFloat(e.target.value))} />
      <input type="number" placeholder="Stop Loss" onChange={(e) => setStopLoss(parseFloat(e.target.value))} />
      <input type="number" placeholder="Take Profit" onChange={(e) => setTakeProfit(parseFloat(e.target.value))} />
      <input type="number" placeholder="Account Balance" onChange={(e) => setAccountBalance(parseFloat(e.target.value))} />
      <button onClick={calculateShares}>Calculate</button>
      <p>Reward-Risk Ratio: {rewardRiskRatio}</p>
      <p>Shares to Buy: {sharesToBuy}</p>
    </div>
  );
};

export default Calculator;
