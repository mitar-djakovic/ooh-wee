import { FC, ReactNode } from 'react';

import { ButtonStyled, IconWrapper } from './Button.styled';

export type Action = 'submit' | 'reset' | 'button';
import { Status } from 'src/types';

interface ButtonProps {
  children?: string;
  onClick: () => void;
  variant?: Status;
  disabled?: boolean;
  type?: Action;
  fullWidth?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  outlined?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  className,
  leftIcon,
  rightIcon,
  variant = 'primary',
  outlined = false,
}: ButtonProps) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      fullWidth={fullWidth}
      outlined={outlined}
    >
      {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
      {children}
      {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
    </ButtonStyled>
  );
};

export default Button;
