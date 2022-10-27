import React, { useCallback, useEffect, useState } from 'react';
import { CoinItem } from 'components/coin/coinList/CoinItem';
import { coinGeckoApi } from 'services/api.service';
import classes from 'components/coin/coinList/CoinList.module.css';

interface InterfaceCoinList {
  id: string;
  name: string;
  currentPrice: string;
  url: string;
}

interface ApiResponse {
  id: string;
  name: string;
  current_price: string;
  image: string;
}

export const CoinList: React.FC = () => {
  const [coinList, setCoinList] = useState<InterfaceCoinList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoinsInfoHandler: () => Promise<void> = useCallback(async () => {
    setIsLoading(true);
    const data: ApiResponse[] = await coinGeckoApi.get(
      'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false'
    );

    const fetchedCoins = data.map((coin) => {
      return {
        id: coin.id,
        name: coin.name,
        currentPrice: coin.current_price,
        url: coin.image
      };
    });
    setCoinList(fetchedCoins);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCoinsInfoHandler();
  }, [fetchCoinsInfoHandler]);

  return (
    <React.Fragment>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ul className={classes.coinList}>
          {coinList.map((coin) => {
            return (
              <CoinItem
                key={coin.id}
                id={coin.id}
                name={coin.name}
                url={coin.url}
                currentPrice={coin.currentPrice}
              />
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
