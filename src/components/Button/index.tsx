import { FC } from 'react';

import { ButtonStyled } from './Button.styled';

type Size = 'large' | 'medium' | 'small';

interface ButtonProps {
  label: string;
  onClick: () => void;
  outline?: boolean;
  size?: Size;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  outline,
  size = 'medium',
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      size={size}
    >
      {label}
    </ButtonStyled>
  );
};

export default Button;
