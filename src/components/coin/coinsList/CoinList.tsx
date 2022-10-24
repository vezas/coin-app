import React, { useCallback, useEffect, useState } from 'react';
import { CoinItem } from 'components/coin/coinsList/CoinItem';
import classes from 'components/coin/coinsList/CoinList.module.css';

export const CoinList: React.FC = () => {
  const [coinsList, setCoinsList] = useState([]);
  const [isError, setIsError] = useState('');

  const fetchCoinsInfoHandler: () => Promise<void> = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false`
      );

      if (!response.ok) {
        throw new Error('Sth went wrong...');
      }
      const data = await response.json();

      const fetchedCoins = data.map((coin: any) => {
        return {
          id: coin.id,
          name: coin.name,
          currentPrice: coin.current_price,
          url: coin.image
        };
      });
      setCoinsList(fetchedCoins);
    } catch (error) {
      if (error instanceof Error) {
        setIsError(error.message);
      } else {
        setIsError('Sth went wrong...');
      }
    }
  }, []);

  useEffect(() => {
    fetchCoinsInfoHandler();
  }, [fetchCoinsInfoHandler]);

  return (
    <React.Fragment>
      <ul className={classes.coinsList}>
        {coinsList.map((coin: any) => {
          return (
            <CoinItem key={coin.id} id={coin.id} name={coin.name} url={coin.url} currentPrice={coin.currentPrice} />
          );
        })}
      </ul>
      {isError && <p>Sth went wrong...</p>}
    </React.Fragment>
  );
};
