import { FC } from 'react';

import {
  IconWrapper,
  InputContainer,
  InputStatus,
  InputStyled,
  Label,
} from './Input.styled';

type Status = 'success' | 'error';

interface InputProps {
  placeholder: string;
  name: string;
  label?: string;
  outline?: boolean;
  onChange: () => void;
  onBlur: () => void;
  id: string;
  value: string;
  icon?: JSX.Element;
  fullWidth?: boolean;
  type?: string;
  className?: string;
  status?: Status;
  message?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  label,
  name,
  onBlur,
  onChange,
  id,
  value,
  icon,
  fullWidth,
  type = 'text',
  className,
  status,
  message,
}: InputProps) => {
  console.log('status', status);
  console.log('message', message);
  return (
    <InputContainer fullWidth={fullWidth}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputStyled
        className={className}
        type={type}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        value={value}
        status={status}
      />
      <IconWrapper>{icon}</IconWrapper>
      {message && <InputStatus status={status}>{message}</InputStatus>}
    </InputContainer>
  );
};

export default Input;
