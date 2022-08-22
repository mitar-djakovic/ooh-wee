import { FC } from 'react';

import { InputContainer, InputStyled, Label } from './Input.styled';

interface InputProps {
  placeholder: string;
  name: string;
  label?: string;
  outline?: boolean;
}

const Input: FC<InputProps> = ({
  placeholder,
  outline,
  label,
  name,
}: InputProps) => (
  <InputContainer>
    {label && <Label htmlFor={name}>{label}</Label>}
    <InputStyled name={name} outline={outline} placeholder={placeholder} />
  </InputContainer>
);

export default Input;
