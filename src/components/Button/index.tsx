import { FC } from 'react';

import { ButtonStyled } from './Button.styled';

type Size = 'large' | 'medium' | 'small';

interface ButtonProps {
  label: string;
  outline?: boolean;
  size?: Size;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  outline,
  size = 'medium',
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonStyled disabled={disabled} outline={outline} size={size}>
      {label}
    </ButtonStyled>
  );
};

export default Button;
