import styled from 'styled-components';

type Button = {
  secondary: boolean;
  disabled: boolean;
  fullWidth: boolean;
};

const ButtonStyled = styled.button<Button>`
  font-weight: ${(props) => props.theme.typography.paragraphs.p1.fontWeight};
  font-size: ${(props) => props.theme.typography.paragraphs.p1.fontSize};
  line-height: ${(props) => props.theme.typography.paragraphs.p1.lineHeight};
  background-color: ${(props) =>
    props.secondary ? '#FFF' : props.theme.colors.primary.main};
  box-sizing: border-box;
  padding: 8px 30px;
  border: 1px solid
    ${(props) =>
      props.secondary
        ? 'rgba(207, 219, 213, 0.6)'
        : props.theme.colors.primary.main};
  border-radius: 48px;
  color: ${(props) =>
    props.secondary
      ? props.theme.colors.random.black
      : props.theme.colors.random.white};
  font-style: normal;
  letter-spacing: 0.2px;
  width: ${(props) => props.fullWidth && '100%'};
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    background-color: ${(props) =>
      !props.secondary && props.theme.colors.primary.hover};
    color: ${(props) => props.secondary && props.theme.colors.random.black};
    border-color: ${(props) =>
      props.secondary
        ? 'rgba(207, 219, 213, 0.6)'
        : props.theme.colors.primary.hover};
  }
  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

export { ButtonStyled, IconWrapper };
