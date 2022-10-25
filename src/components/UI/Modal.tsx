import ReactDOM from 'react-dom';
import React from 'react';
import { Card } from 'components/UI/Card';
import { Button } from 'components/UI/Button';
import classes from 'components/UI/Modal.module.css';

interface InterfaceModal {
  children: React.ReactNode;
  isModal: boolean;
  onClick?: () => void;
}

export const Modal: React.FC<InterfaceModal> = ({ children, isModal, onClick }) => {
  const modalRoot: HTMLElement = document.getElementById('modal-root')!;
  if (!isModal) {
    return null;
  }

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
