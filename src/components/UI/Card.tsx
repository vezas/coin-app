import classes from 'components/UI/Card.module.css';

interface InterfaceCard {
  children: React.ReactNode;
}

export const Card: React.FC<InterfaceCard> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
