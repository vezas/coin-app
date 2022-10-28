import classes from 'components/UI/Button.module.css';
import clsx from 'clsx';

interface InterfaceButton
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onClick'
  > {
  className?: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<InterfaceButton> = ({
  children,
  className,
  onClick,
  type,
  ...props
}) => {
  return (
    <button {...props} className={clsx([classes.btn], [className])} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
