import styled from 'styled-components';

const InputStyled = styled.input`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.2rem 2rem;
  border-radius: 2.4rem;
  border: 0.1rem solid rgba(207, 219, 213, 0.6);
  margin-top: 0.4rem;
  ::placeholder {
    font-size: ${(props) => props.theme.typography.paragraphs.p1.fontSize};
    font-weight: ${(props) => props.theme.typography.paragraphs.p1.fontWeight};
    line-height: ${(props) => props.theme.typography.paragraphs.p1.lineHeight};
    opacity: 0.8;
    color: ${(props) => props.theme.colors.random.black};
  }
`;

const InputContainer = styled.div<{ fullWidth: boolean | undefined }>`
  width: ${(props) => (props.fullWidth ? '100%' : '36rem')};
  position: relative;
  margin-bottom: 1.6rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.random.dark};
  position: relative;
`;

type Status = 'success' | 'info' | 'warning' | 'error';

const InputMessage = styled.div<{ status?: Status }>`
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.6rem 0.8rem 0.6rem 1.6rem;
  gap: 0.4rem;
  background-color: ${(props) => {
    if (props.status === 'error') {
      return props.theme.colors.status.error.secondary;
    }
    return 'green';
  }};
  color: ${(props) => props.theme.colors.status.error.primary};
  font-size: 1.6rem;
  line-height: 2rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 3.4rem;
  right: 1.5rem;
`;

export { IconWrapper, InputContainer, InputMessage, InputStyled, Label };
