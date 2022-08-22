import styled from 'styled-components';

type Input = {
  outline: boolean | undefined;
};

const InputStyled = styled.input<Input>`
  width: 320px;
  background-color: ${(props) =>
    !props.outline && props.theme.colors.background.light};
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.outline
        ? props.theme.colors.background.dark
        : props.theme.colors.background.light};
  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.8;
    color: ${(props) => props.theme.colors.background.dark};
    font-weight: 600;
  }
`;

const InputContainer = styled.div`
  width: 320px;
  position: relative;
  padding-top: 26px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.background.dark};
  margin-left: 16px;
  position: absolute;
  top: 0;
`;

export { InputContainer, InputStyled, Label };
