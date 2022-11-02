import classes from 'components/UI/Card.module.scss';
import clsx from 'clsx';

interface InterfaceCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onKeyPress: (event: React.KeyboardEvent) => void;
}

export const Card: React.FC<InterfaceCardProps> = ({
  children,
  className,
  onClick,
  onKeyPress
}) => {
  return (
    <div
      onKeyPress={onKeyPress}
      tabIndex={0}
      role='button'
      onClick={onClick}
      className={clsx([classes.card], [className])}
    >
      {children}
    </div>
  );
};
