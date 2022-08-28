import styled from 'styled-components';

import { Typography } from '../../../components';

const SignInFormView = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 90px 110px;
`;

const ButtonContainer = styled.div`
  margin: 30px 0;
`;

const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 8px;
`;

const SubTitle = styled(Typography)`
  text-align: center;
  color: #5d5d5b;
  margin-bottom: 36px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export { ButtonContainer, LogoContainer, SignInFormView, SubTitle, Title };
