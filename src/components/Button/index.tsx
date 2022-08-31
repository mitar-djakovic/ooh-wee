import { FC } from 'react';

import { ButtonStyled, IconWrapper } from './Button.styled';

type Type = 'submit' | 'reset' | 'button';

interface ButtonProps {
  children: string;
  onClick: () => void;
  secondary?: boolean;
  disabled?: boolean;
  type?: Type;
  fullWidth?: boolean;
  className?: string;
  icon?: JSX.Element;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  secondary = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  className,
  icon,
}: ButtonProps) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      secondary={secondary}
      fullWidth={fullWidth}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </ButtonStyled>
  );
};

export default Button;
