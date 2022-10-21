import { useCallback, useEffect, useState } from 'react';

import classes from 'components/coin/coinsList/CoinItem.module.css';
import { Card } from 'components/UI/Card';

interface InterfaceCoinItem {
  children?: React.ReactNode;
  coin: string;
}

export const CoinItem: React.FC<InterfaceCoinItem> = ({ coin }) => {
  const [coinInfo, setcoinInfo] = useState<string[]>([]);

  const fetchCoinInfoHandler: () => Promise<void> = useCallback(async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    const data = await response.json();
    console.log(data[0].ath);
    const { image: url, name, current_price: price } = data[0];
    console.log(data[0]);

    setcoinInfo([url, name, price]);
  }, []);

  useEffect(() => {
    fetchCoinInfoHandler();
  }, [fetchCoinInfoHandler]);

  return (
    <Card className={classes.coinItem}>
      <img className={classes.coinItem__logo} src={coinInfo[0]} alt='Logo with coin.' />
      <h1 className={classes.coinItem__header}>{coinInfo[1]}</h1>
      <h3 className={classes.coinItem__price}>{coinInfo[2]}</h3>
    </Card>
  );
};
