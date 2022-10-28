import ReactDOM from 'react-dom';
import React from 'react';
import { Card } from 'components/UI/Card';
import { Button } from 'components/UI/Button';
import classes from 'components/UI/Modal.module.css';

interface InterfaceModal {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Modal: React.FC<InterfaceModal> = ({ children, onClick }) => {
  //eslint-disable-next-line
  const modalRoot: HTMLElement = document.getElementById('modal-root')!;
  return ReactDOM.createPortal(
    <React.Fragment>
      <div onClick={onClick} className={`${classes.modal} ${classes.modal__background}`} />
      <Card className={`${classes.modal} ${classes.card__modal}`}>
        {children}
        <Button onClick={onClick} type='submit'>
          Close
        </Button>
      </Card>
    </React.Fragment>,
    modalRoot
  );
};
