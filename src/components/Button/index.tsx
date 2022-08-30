import { FC } from 'react';

import { ButtonStyled, IconWrapper } from './Button.styled';

type Type = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  outline?: boolean;
  disabled?: boolean;
  type?: Type;
  fullWidth?: boolean;
  className?: string;
  icon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  outline = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  className,
  icon,
}: ButtonProps) => {
  console.log('icon', icon);
  return (
    <ButtonStyled
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      fullWidth={fullWidth}
    >
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </ButtonStyled>
  );
};

export default Button;
