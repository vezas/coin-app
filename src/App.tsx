import classes from 'App.module.css';
import { CoinList } from 'components/coin/coinsList/CoinList';

export const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <CoinList />
    </div>
  );
};
