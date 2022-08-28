import styled from 'styled-components';

import { Button } from '../../../components';

const SignupFormView = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 90px 110px;
`;

const ButtonContainer = styled.div`
  margin: 30px 0;
`;

const SocialButtons = styled.div`
  background-color: red;
`;

const SocialButton = styled(Button)`
  border: 1px solid rgba(207, 219, 213, 0.6);
  background-color: #ffffff;
  margin-bottom: 8px;
  color: #5d5d5b;
`;

export { ButtonContainer, SignupFormView, SocialButton, SocialButtons };
