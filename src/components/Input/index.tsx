import { FC } from 'react';

import {
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
  showStatus: boolean;
  icon: JSX.Element;
  fullWidth?: boolean;
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
  // icon,
  fullWidth,
}: InputProps) => {
  return (
    <InputContainer fullWidth={fullWidth}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputStyled
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        value={value}
      />
      {/*{showStatus && <InputMessage status={'error'}>{icon} Hello</InputMessage>}*/}
    </InputContainer>
  );
};

export default Input;
