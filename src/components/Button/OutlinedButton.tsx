import { BaseButton } from '@radix-ui/themes/dist/cjs/components/base-button';
import { classNames } from 'lib/utils';

interface ButtonProps {
  className?: string;
  size?: '1' | '2' | '3' | '4';
  onClick?: () => void;
  children?: React.ReactNode;
}

const OutlinedButton: React.FC<ButtonProps> = ({
  className,
  children,
  size,
  onClick,
}) => {
  return (
    <BaseButton
      onClick={onClick}
      variant="outline"
      size={size}
      className={classNames(
        'transition-all !cursor-pointer !gap-1 !text-xs !font-medium !text-white !shadow-none bg-transparent !border !border-primary !outline !outline-1 !outline-primary hover:brightness-75',
        className
      )}
    >
      {children}
    </BaseButton>
  );
};

export default OutlinedButton;
