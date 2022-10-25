import React, { useState } from 'react';
import { Card } from 'components/UI/Card';
import { Modal } from 'components/UI/Modal';
import { Coin } from 'components/coin/Coin';
import classes from 'components/coin/coinsList/CoinItem.module.css';

interface InterfaceCoinItem {
  children?: React.ReactNode;
  id: string;
  name: string;
  url: string;
  currentPrice: string;
}

export const CoinItem: React.FC<InterfaceCoinItem> = ({ name, url, currentPrice, id }) => {
  const [isModal, setIsModal] = useState(false);

  const onClick = () => {
    setIsModal(false);
  };

  const displayCoinInfo = () => {
    setIsModal(true);
  };

  return (
    <React.Fragment>
      <Card className={classes.coinItem} onClick={displayCoinInfo}>
        <img className={classes.coinItem__logo} src={url} alt='Logo with coin.' />
        <h1 className={classes.coinItem__header}>{name}</h1>
        <h3 className={classes.coinItem__price}>{currentPrice} $</h3>
      </Card>
      {isModal && (
        <Modal onClick={onClick} isModal={isModal}>
          <Coin id={id} />
        </Modal>
      )}
    </React.Fragment>
  );
};
