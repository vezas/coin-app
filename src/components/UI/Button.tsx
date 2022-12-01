import classes from 'components/UI/Button.module.scss';
import clsx from 'clsx';

interface InterfaceButtonProps
  extends Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onClick'
  > {
  className?: string;
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<InterfaceButtonProps> = ({
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
