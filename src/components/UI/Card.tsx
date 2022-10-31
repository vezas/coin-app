import classes from 'components/UI/Card.module.scss';
import clsx from 'clsx';

interface InterfaceCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<InterfaceCardProps> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={clsx([classes.card], [className])}>
      {children}
    </div>
  );
};
