import { FC } from 'react';

import { ButtonStyled } from './Button.styled';

type Size = 'large' | 'medium' | 'small';
type Type = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  outline?: boolean;
  size?: Size;
  disabled?: boolean;
  type?: Type;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  outline = false,
  size = 'medium',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      size={size}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
