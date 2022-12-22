import styled from 'styled-components';

const VerificationFormView = styled.div`
  width: 60%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  position: relative;
  flex-direction: column;

  form {
    width: 100%;

    h1 {
      margin-bottom: 4rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 6rem;
  width: calc(100% - 20rem);

  button:first-child {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

export { ButtonWrapper, VerificationFormView };
