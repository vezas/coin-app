import React, { useCallback, useEffect, useState } from 'react';
import classes from 'components/coin/Coin.module.css';

interface InterfaceCoin {
  id: string;
}

export const Coin: React.FC<InterfaceCoin> = ({ id }) => {
  const [isError, setIsError] = useState('');

  const [coinInfo, setcoinInfo] = useState({ url: '', name: '', price: '', ath: '' });

  const fetchCoinInfoHandler: () => Promise<void> = useCallback(async () => {
    try {
      const response = await fetch(`https://api.cingecko.com/api/v3/coins/${id}`);
      console.log(response);
      if (!response.ok) {
        throw new Error('Sth went wrong...');
      }
      const data = await response.json();
      const {
        image: { large: url },
        name,
        market_data: {
          current_price: { usd: price }
        },
        market_data: {
          ath: { usd: ath }
        }
      } = data;
      setcoinInfo({ url, name, price, ath });
    } catch (error) {
      if (error instanceof Error) {
        setIsError(error.message);
      } else {
        setIsError('Sth went wrong...');
      }
    }
  }, [id]);

  useEffect(() => {
    fetchCoinInfoHandler();
  }, [fetchCoinInfoHandler]);

  return (
    <React.Fragment>
      {isError && <p>Sth went wrong...</p>}

      <img className={classes.coinItem__logo} src={coinInfo.url} alt='Logo with coin.' />
      <h1 className={classes.coinItem__header}>{coinInfo.name}</h1>
      <h3 className={classes.coinItem__price}>Current price: {coinInfo.price} $</h3>
      <h3 className={classes.coinItem__price}>All time high: {coinInfo.ath} $</h3>
      <p>And so on...</p>
    </React.Fragment>
  );
};
