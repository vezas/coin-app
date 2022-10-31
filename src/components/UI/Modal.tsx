import ReactDOM from 'react-dom';
import React from 'react';
import { Card } from 'components/UI/Card';
import { Button } from 'components/UI/Button';
import classes from 'components/UI/Modal.module.scss';

interface InterfaceModalProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Modal: React.FC<InterfaceModalProps> = ({ children, onClick }) => {
  //eslint-disable-next-line
  const modalRoot: HTMLElement = document.getElementById('modal-root')!;
  return ReactDOM.createPortal(
    <React.Fragment>
      <div onClick={onClick} className={classes.modal__background} />
      <Card className={classes.modal__content}>
        {children}
        <Button className={classes.modal__btn} onClick={onClick} type='submit'>
          Close
        </Button>
      </Card>
    </React.Fragment>,
    modalRoot
  );
};
