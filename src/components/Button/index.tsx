import { FC } from 'react';

import { ButtonStyled } from './Button.styled';

type Type = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  outline?: boolean;
  disabled?: boolean;
  type?: Type;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  outline = false,
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      disabled={disabled}
      outline={outline}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
