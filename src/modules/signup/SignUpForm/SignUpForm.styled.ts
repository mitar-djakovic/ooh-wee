import styled from 'styled-components';

import { Typography } from '../../../components';

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

export { ButtonContainer, LogoContainer, SignInFormView, SubTitle, Title };
