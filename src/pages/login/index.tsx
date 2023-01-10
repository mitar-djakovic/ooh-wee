import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import { LoginView } from './Login.styled';
import LoginForm from './LoginForm';
import WelcomeSection from './WelcomeSection';

import 'src/styles/reset.css';

const LoginPage = () => (
  <ThemeProvider theme={theme}>
    <LoginView>
      <WelcomeSection />
      <LoginForm />
    </LoginView>
  </ThemeProvider>
);

export default LoginPage;
