import { LoginView } from './Login.styled';
import LoginForm from './LoginForm';
import WelcomeSection from './WelcomeSection';

const Signup = () => (
  <LoginView>
    <WelcomeSection />
    <LoginForm />
  </LoginView>
);

export default Signup;
