import styled from 'styled-components';

type Button = {
  outline: boolean | undefined;
  disabled: boolean;
  fullWidth: boolean;
};

const ButtonStyled = styled.button<Button>`
  font-weight: ${(props) => props.theme.typography.buttons.primary.fontWeight};
  font-size: ${(props) => props.theme.typography.buttons.primary.fontSize};
  line-height: ${(props) => props.theme.typography.buttons.primary.lineHeight};
  background-color: ${(props) =>
    props.outline ? '#FFF' : props.theme.colors.primary.main};
  box-sizing: border-box;
  padding: 12px 44px;
  border: 2px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 48px;
  //box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
  //  0px 2px 4px rgba(96, 97, 112, 0.16);
  color: ${(props) =>
    props.outline
      ? props.theme.colors.primary.main
      : props.theme.colors.random.white};
  font-style: normal;
  letter-spacing: 0.2px;
  width: ${(props) => props.fullWidth && '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background-color: ${(props) =>
      !props.outline && props.theme.colors.primary.hover};
    color: ${(props) => props.outline && props.theme.colors.primary.hover};
    border-color: ${(props) => props.theme.colors.primary.hover};
  }
  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

export { ButtonStyled, IconWrapper };
