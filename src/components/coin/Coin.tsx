import React, { useCallback, useEffect, useState } from 'react';
import classes from 'components/coin/Coin.module.css';
import { coinGeckoApi } from 'services/api.service';

interface InterfaceCoin {
  id: string;
}

interface ApiResponse {
  image: { large: string };
  name: string;
  market_data: { current_price: { usd: string }; ath: { usd: string } };
}

export const Coin: React.FC<InterfaceCoin> = ({ id }) => {
  const [coinInfo, setcoinInfo] = useState({ url: '', name: '', price: '', ath: '' });
  const [isLoading, setIsLoading] = useState(false);

  const fetchCoinInfoHandler = useCallback(async () => {
    setIsLoading(true);
    const data: ApiResponse = await coinGeckoApi.get(`coins/${id}`);
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
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchCoinInfoHandler();
  }, [fetchCoinInfoHandler]);

  return (
    <React.Fragment>
      {isLoading && <p className={classes.coinItem_isLoading}>Loading...</p>}
      {!isLoading && (
        <div>
          <img className={classes.coinItem__logo} src={coinInfo.url} alt='Logo.' />
          <h1 className={classes.coinItem__header}>{coinInfo.name}</h1>
          <h3 className={classes.coinItem__price}>Current price: {coinInfo.price} $</h3>
          <h3 className={classes.coinItem__price}>All time high: {coinInfo.ath} $</h3>
          <p>And so on...</p>
        </div>
      )}
    </React.Fragment>
  );
};
