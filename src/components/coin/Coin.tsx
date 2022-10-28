import React, { useCallback, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import classes from 'components/coin/Coin.module.css';
import { coinGeckoApi } from 'services/api.service';

interface InterfaceCoinProps {
  id: string;
}

interface ApiResponse {
  image: { large: string };
  name: string;
  market_data: { current_price: { usd: string }; ath: { usd: string } };
}

export const Coin: React.FC<InterfaceCoinProps> = ({ id }) => {
  const [coinInfo, setcoinInfo] = useState({ url: '', name: '', price: '', allTimeHighPrice: '' });
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
        ath: { usd: allTimeHighPrice }
      }
    } = data;
    setcoinInfo({ url, name, price, allTimeHighPrice });
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    fetchCoinInfoHandler();
  }, [fetchCoinInfoHandler]);

  return (
    <React.Fragment>
      {isLoading && (
        <Oval
          height={80}
          width={80}
          color='#4fa94d'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#4fa94d'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {!isLoading && (
        <div>
          <img className={classes.coinItem__logo} src={coinInfo.url} alt='Logo.' />
          <h1 className={classes.coinItem__header}>{coinInfo.name}</h1>
          <h3 className={classes.coinItem__price}>Current price: {coinInfo.price} $</h3>
          <h3 className={classes.coinItem__price}>All time high: {coinInfo.allTimeHighPrice} $</h3>
          <p>And so on...</p>
        </div>
      )}
    </React.Fragment>
  );
};
