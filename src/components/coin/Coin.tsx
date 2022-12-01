import React, { useCallback, useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { coinGeckoApi } from 'services/api.service';
import classes from 'components/coin/Coin.module.scss';

interface InterfaceCoinProps {
  id: string;
}

interface InterfaceCoinInfo {
  url: string;
  name: string;
  price: string;
  allTimeHighPrice: string;
}

interface ApiResponse {
  image: { large: string };
  name: string;
  market_data: { current_price: { usd: string }; ath: { usd: string } };
}

export const Coin: React.FC<InterfaceCoinProps> = ({ id }) => {
  const [coinInfo, setcoinInfo] = useState<InterfaceCoinInfo | null>(null);
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
          height={20}
          width={20}
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
      {!isLoading && coinInfo && (
        <section className={classes.coin}>
          <img className={classes.coin__logo} src={coinInfo.url} alt='Logo.' />
          <h1 className={classes.coin__title}>{coinInfo.name}</h1>
          <h3 className={classes.coin__price}>Current price: {coinInfo.price} $</h3>
          <h3 className={classes.coin__price}>All time high: {coinInfo.allTimeHighPrice} $</h3>
          <p>And so on...</p>
        </section>
      )}
    </React.Fragment>
  );
};
