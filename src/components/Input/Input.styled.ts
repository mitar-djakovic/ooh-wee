import styled from 'styled-components';

type Status = 'success' | 'error';

const InputStyled = styled.input<{ status?: Status; label?: string }>`
  width: 100%;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.2rem 2rem;
  border-radius: 2.4rem;
  outline: none;
  border: 0.1rem solid
    ${(props) => {
      if (props.status !== undefined) {
        return props.theme.colors[props.status].main;
      } else {
        return 'rgba(207, 219, 213, 0.6)';
      }
    }};
  font-size: ${(props) => props.theme.typography.paragraphs.p1.fontSize};
  font-weight: ${(props) => props.theme.typography.paragraphs.p1.fontWeight};
  line-height: ${(props) => props.theme.typography.paragraphs.p1.lineHeight};
  margin-top: ${(props) => (props.label ? '0.4rem' : '')};
`;

const InputContainer = styled.div<{ fullWidth: boolean | undefined }>`
  width: ${(props) => (props.fullWidth ? '100%' : '36rem')};
`;

const Label = styled.label`
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.random.dark};
  position: relative;
`;

const InputStatus = styled.div<{ status?: Status }>`
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.6rem 0.8rem 0.6rem 1.6rem;
  gap: 0.4rem;
  background-color: ${(props) => {
    if (props.status !== undefined) {
      return props.theme.colors[props.status].focus;
    }
  }};
  color: ${(props) =>
    props.status !== undefined ? props.theme.colors[props.status].main : ''};
`;

const BoxHelper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div<{ status?: Status }>`
  position: absolute;
  top: 0;
  right: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    svg {
      fill: ${(props) =>
        props.status !== undefined
          ? props.theme.colors[props.status].main
          : ''};
    }
  }
`;

export {
  BoxHelper,
  IconWrapper,
  InputContainer,
  InputStatus,
  InputStyled,
  Label,
};
