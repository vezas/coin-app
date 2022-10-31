import React, { useState } from 'react';
import { Card } from 'components/UI/Card';
import { Modal } from 'components/UI/Modal';
import { Coin } from 'components/coin/Coin';
import classes from 'components/coin/coinList/CoinItem.module.scss';

interface InterfaceCoinItemProps {
  children?: React.ReactNode;
  id: string;
  name: string;
  url: string;
  currentPrice: string;
}

export const CoinItem: React.FC<InterfaceCoinItemProps> = ({ name, url, currentPrice, id }) => {
  const [isModal, setIsModal] = useState(false);

  const onClick = () => {
    setIsModal(false);
  };

  const displayCoinInfo = () => {
    setIsModal(true);
  };

  return (
    <React.Fragment>
      <li>
        <Card className={classes.coinItem} onClick={displayCoinInfo}>
          <img className={classes.coinItem__logo} src={url} alt='Logo.' />
          <h1 className={classes.coinItem__header}>{name}</h1>
          <h3 className={classes.coinItem__price}>{currentPrice} $</h3>
        </Card>
      </li>
      {isModal && (
        <Modal onClick={onClick}>
          <Coin id={id} />
        </Modal>
      )}
    </React.Fragment>
  );
};
