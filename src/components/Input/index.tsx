import {
  BoxHelper,
  IconWrapper,
  InputContainer,
  InputStatus,
  InputStyled,
  Label,
} from './Input.styled';

type Status = 'success' | 'error';
type InputType = 'text' | 'password' | 'email';

interface InputProps {
  placeholder: string;
  name: string;
  label?: string;
  onChange: () => void;
  onBlur: () => void;
  id: string;
  value: string;
  icon?: JSX.Element;
  fullWidth?: boolean;
  type?: InputType;
  className?: string;
  status?: Status;
  message?: string;
}

const Input = ({
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
  return (
    <InputContainer fullWidth={fullWidth}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <BoxHelper>
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
          label={label}
        />
        <IconWrapper status={status}>{icon}</IconWrapper>
      </BoxHelper>
      {message && <InputStatus status={status}>{message}</InputStatus>}
    </InputContainer>
  );
};

export default Input;
