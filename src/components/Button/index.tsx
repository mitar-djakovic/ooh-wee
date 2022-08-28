import { FC } from 'react';

import { ButtonStyled } from './Button.styled';

type Type = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  outline?: boolean;
  disabled?: boolean;
  type?: Type;
  fullWidth?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  outline = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  className,
}: ButtonProps) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      fullWidth={fullWidth}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
