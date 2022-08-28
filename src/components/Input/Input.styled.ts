import styled from 'styled-components';

const InputStyled = styled.input`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 12px 20px;
  border-radius: 24px;
  border: 1px solid rgba(207, 219, 213, 0.6);
  margin-top: 4px;
  ::placeholder {
    font-size: ${(props) => props.theme.typography.inputs.primary.fontSize};
    font-weight: ${(props) => props.theme.typography.inputs.primary.fontWeight};
    line-height: ${(props) => props.theme.typography.inputs.primary.lineHeight};
    opacity: 0.8;
    color: ${(props) => props.theme.colors.random.black};
  }
`;

const InputContainer = styled.div<{ fullWidth: boolean | undefined }>`
  width: ${(props) => (props.fullWidth ? '100%' : '360px')};
  position: relative;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.random.dark};
  position: relative;
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
