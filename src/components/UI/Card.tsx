import classes from 'components/UI/Card.module.css';

interface InterfaceCard {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<InterfaceCard> = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`${classes.card} ${className}`}>
      {children}
    </div>
  );
};
