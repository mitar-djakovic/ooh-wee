import { Button, Typography } from 'src/components';
import styled from 'styled-components';

const SignInFormView = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 90px 110px;
`;

const ButtonContainer = styled.div`
  margin: 30px 0;
`;

const SocialButtons = styled.div``;

const SocialButton = styled(Button)`
  border: 1px solid rgba(207, 219, 213, 0.6);
  background-color: #ffffff;
  margin-bottom: 8px;
  color: #5d5d5b;
`;

const Divider = styled.div`
  border: 1px solid rgba(207, 219, 213, 0.6);
  width: 100%;
`;

const DividerText = styled(Typography)`
  margin: 0 20px;
`;

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 34px 0;
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

export {
  ButtonContainer,
  Divider,
  DividerContainer,
  DividerText,
  LogoContainer,
  SignInFormView,
  SocialButton,
  SocialButtons,
  SubTitle,
  Title,
};
