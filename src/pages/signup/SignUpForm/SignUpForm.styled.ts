import styled from 'styled-components';

import { Typography } from '../../../components';

type Status = 'success' | 'error';

const SignInFormView = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 9rem 11rem;
`;

const ButtonContainer = styled.div`
  margin: 3rem 0;
`;

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 0.8rem;
`;

const SubTitle = styled(Typography)`
  text-align: center;
  color: #5d5d5b;
  margin-bottom: 3.6rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SubmitStatus = styled.div<{ status?: Status }>`
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
  gap: 0.4rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  background-color: ${(props) => {
    if (props.status === 'error') {
      return props.theme.colors.status.error.secondary;
    }

    if (props.status === 'success') {
      return props.theme.colors.status.success.secondary;
    }
  }};
  color: ${(props) =>
    props.status === 'error'
      ? props.theme.colors.status.error.primary
      : props.theme.colors.status.success.primary};
`;

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`;

export {
  ButtonContainer,
  FieldWrapper,
  LogoContainer,
  SignInFormView,
  SubmitStatus,
  SubTitle,
  Title,
};
