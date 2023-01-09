import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import { SignUpView } from './Signup.styled';
import SignupForm from './SignUpForm';
import WelcomeSection from './WelcomeSection';

import 'src/styles/reset.css';

const SignupPage = () => (
  <ThemeProvider theme={theme}>
    <SignUpView>
      <WelcomeSection />
      <SignupForm />
    </SignUpView>
  </ThemeProvider>
);

export default SignupPage;
