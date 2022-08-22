import styled from 'styled-components';

type Size = 'large' | 'medium' | 'small';

type Button = {
  outline: boolean | undefined;
  size: Size;
  disabled: boolean;
};

const ButtonStyled = styled.button<Button>`
  background-color: ${(props) =>
    props.outline ? '#FFF' : props.theme.colors.primary.main};
  box-sizing: border-box;
  padding: ${(props) => {
    if (props.size === 'large') {
      return '12px 24px';
    } else if (props.size === 'small') {
      return '8px 12px';
    } else {
      return '10px 20px';
    }
  }};
  border: 2px solid
    ${(props) => props.outline && props.theme.colors.primary.main};
  border-radius: 8px;
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
  color: ${(props) =>
    props.outline
      ? props.theme.colors.primary.main
      : props.theme.colors.text.main};
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => {
    if (props.size === 'large') {
      return '18px';
    } else if (props.size === 'small') {
      return '14px';
    } else {
      return '16px';
    }
  }};
  line-height: ${(props) => {
    if (props.size === 'large') {
      return '28px';
    } else if (props.size === 'small') {
      return '20px';
    } else {
      return '24px';
    }
  }};
  letter-spacing: 0.2px;
  &:disabled {
    background-color: ${(props) =>
      !props.outline && props.theme.colors.primary.hover};
    color: ${(props) => props.outline && props.theme.colors.primary.hover};
    border-color: ${(props) =>
      props.outline && props.theme.colors.primary.hover};
  }
  &:hover {
    cursor: pointer;
  }
`;

export { ButtonStyled };
