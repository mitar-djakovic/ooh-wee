import styled from 'styled-components';

type Input = {
  outline: boolean;
};

const InputStyled = styled.input<Input>`
  width: 320px;
  background-color: ${(props) =>
    !props.outline && props.theme.colors.random.grayLight};
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.outline
        ? props.theme.colors.random.black
        : props.theme.colors.random.light};
  ::placeholder {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.8;
    color: ${(props) => props.theme.colors.random.black};
    font-weight: 600;
  }
`;

const InputContainer = styled.div`
  width: 320px;
  position: relative;
  padding: 18px 0;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  opacity: 0.8;
  color: ${(props) => props.theme.colors.random.dark};
  margin-left: 16px;
  position: absolute;
  top: 0;
`;

type Status = 'success' | 'info' | 'warning' | 'error';

const InputMessage = styled.div<{ status?: Status }>`
  margin-top: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 8px 6px 16px;
  gap: 4px;
  background-color: ${(props) => {
    console.log('props', props.status);
    if (props.status === 'error') {
      return props.theme.colors.status.error.secondary;
    }
    return 'green';
  }};
  color: ${(props) => props.theme.colors.status.error.primary};
  font-size: 16px;
  line-height: 20px;
`;

export { InputContainer, InputMessage, InputStyled, Label };
