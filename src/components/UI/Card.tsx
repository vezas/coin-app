import classes from 'components/UI/Card.module.css';
import clsx from 'clsx';

interface InterfaceCard {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<InterfaceCard> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={clsx([classes.card], [className])}>
      {children}
    </div>
  );
};
