import classes from 'components/UI/Card.module.css';

interface InterfaceCard {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<InterfaceCard> = ({ children, className }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};
