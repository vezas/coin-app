import { useCallback, useEffect, useState } from 'react';
import { CoinItem } from 'components/coin/coinsList/CoinItem';
import classes from 'components/coin/coinsList/CoinList.module.css';

export const CoinList: React.FC = () => {
  const [coinsList, setCoinsList] = useState([]);

  const fetchCoinsInfoHandler: () => Promise<void> = useCallback(async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false`
    );
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
  }, []);

  useEffect(() => {
    fetchCoinsInfoHandler();
  }, [fetchCoinsInfoHandler]);

  return (
    <ul className={classes.coinsList}>
      {coinsList.map((coin: any) => {
        return <CoinItem key={coin.id} id={coin.id} name={coin.name} url={coin.url} currentPrice={coin.currentPrice} />;
      })}
    </ul>
  );
};
