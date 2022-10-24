import classes from 'components/UI/Button.module.css';

interface InterfaceButton {
  children: React.ReactNode;
  onClick?: () => void;
  type: 'button' | 'submit';
  className?: string;
}

export const Button: React.FC<InterfaceButton> = ({ children, className, onClick, type }) => {
  return (
    <button className={`${classes.btn} ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
