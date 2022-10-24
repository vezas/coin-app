import React from 'react';
import { Card } from 'components/UI/Card';
import classes from 'components/UI/Modal.module.css';

interface InterfaceModal {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Modal: React.FC<InterfaceModal> = ({ children, onClick }) => {
  return (
    <React.Fragment>
      <div onClick={onClick} className={`${classes.modal} ${classes.modal__background}`} />
      <Card className={`${classes.modal} ${classes.card__modal}`}>{children}</Card>;
      <button />
    </React.Fragment>
  );
};
