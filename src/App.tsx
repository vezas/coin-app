import classes from 'App.module.scss';
import { CoinList } from 'components/coin/coinList/CoinList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <CoinList />
      <ToastContainer />
    </div>
  );
};
