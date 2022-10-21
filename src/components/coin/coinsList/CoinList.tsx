import classes from 'components/coin/coinsList/CoinList.module.css';
import { CoinItem } from 'components/coin/coinsList/CoinItem';

const DUMMY_COINLIST = ['bitcoin', 'ethereum'];

export const CoinList: React.FC = () => {
  return (
    <ul>
      {DUMMY_COINLIST.map((coin) => {
        return <CoinItem key={coin} coin={coin} />;
      })}
    </ul>
  );
};
