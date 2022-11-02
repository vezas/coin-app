import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { Card } from 'components/UI/Card';
import { Coin } from 'components/coin/Coin';
import { Button } from 'components/UI/Button';
import ReactModal from 'react-modal';
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

  const closeModal = () => {
    setIsModal(false);
  };

  const displayCoinInfo = () => {
    setIsModal(true);
  };

  const onKeyPress = (e: React.KeyboardEvent) => {
    const enterOrSpace = e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar';
    if (enterOrSpace) {
      e.preventDefault();
      displayCoinInfo();
    }
  };

  return (
    <React.Fragment>
      <li>
        <Card onKeyPress={onKeyPress} className={classes.coinItem} onClick={displayCoinInfo}>
          <img className={classes.coinItem__logo} src={url} alt='Logo.' />
          <h1 className={classes.coinItem__title}>{name}</h1>
          <h3 className={classes.coinItem__price}>{currentPrice} $</h3>
        </Card>
      </li>
      {isModal && (
        <ReactModal
          //eslint-disable-next-line
          //parentSelector={() => document.getElementById('modal-root')!}
          overlayClassName={classes.Overlay}
          onRequestClose={closeModal}
          className={classes.ReactModal}
          isOpen={isModal}
          ariaHideApp={false}
        >
          <Coin id={id} />
          <Button onClick={closeModal} type='button'>
            Close
          </Button>
        </ReactModal>
      )}
    </React.Fragment>
  );
};
