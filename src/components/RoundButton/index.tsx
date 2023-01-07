import { ReactNode } from 'react';

import { Status } from '../../types';

import { RoundButtonStyled } from './RoundButton.styled';

export type Action = 'submit' | 'reset' | 'button';

interface RoundButtonProps {
  icon: ReactNode;
  variant?: Status;
  disabled?: boolean;
  outlined?: boolean;
  type?: Action;
  onClick?: () => void;
  className?: string;
}

const RoundButton = ({
  icon,
  variant = 'primary',
  disabled = false,
  outlined = false,
  type = 'button',
  onClick,
  className,
}: RoundButtonProps) => {
  return (
    <RoundButtonStyled
      className={className}
      type={type}
      onClick={onClick}
      outlined={outlined}
      variant={variant}
      disabled={disabled}
    >
      {icon}
    </RoundButtonStyled>
  );
};

export default RoundButton;
