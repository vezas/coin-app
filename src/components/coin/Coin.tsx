import { useCallback, useEffect, useState } from 'react';
import { Card } from 'components/UI/Card';
import classes from 'components/coin/Coin.module.css';
import { stringify } from 'querystring';

interface InterfaceCoin {
  id: string;
}

export const Coin: React.FC<InterfaceCoin> = ({ id }) => {
  const [coinInfo, setcoinInfo] = useState({ url: '', name: '', price: '' });

  const fetchCoinInfoHandler: () => Promise<void> = useCallback(async () => {
    console.log('load');
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await response.json();
    const {
      image: { large: url },
      name,
      market_data: {
        current_price: { usd: price }
      }
    } = data;

    setcoinInfo({ url, name, price });
  }, [id]);

  useEffect(() => {
    fetchCoinInfoHandler();
  }, [fetchCoinInfoHandler]);

  return (
    <Card className={classes.coinItem}>
      <img className={classes.coinItem__logo} src={coinInfo.url} alt='Logo with coin.' />
      <h1 className={classes.coinItem__header}>{coinInfo.name}</h1>
      <h3 className={classes.coinItem__price}>{coinInfo.price} $</h3>
    </Card>
  );
};
