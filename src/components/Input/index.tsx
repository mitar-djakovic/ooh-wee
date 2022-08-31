import { FC } from 'react';

import {
  IconWrapper,
  InputContainer,
  // InputMessage,
  InputStyled,
  Label,
} from './Input.styled';

interface InputProps {
  placeholder: string;
  name: string;
  label?: string;
  outline?: boolean;
  onChange: () => void;
  onBlur: () => void;
  id: string;
  value: string;
  showStatus?: boolean;
  icon?: JSX.Element;
  fullWidth?: boolean;
  type?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  label,
  name,
  onBlur,
  onChange,
  id,
  value,
  // showStatus,
  icon,
  fullWidth,
  type = 'text',
  className,
}: InputProps) => (
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
    />
    <IconWrapper>{icon}</IconWrapper>
    {/*{showStatus && <InputMessage status={'error'}>{icon} Hello</InputMessage>}*/}
  </InputContainer>
);

export default Input;
