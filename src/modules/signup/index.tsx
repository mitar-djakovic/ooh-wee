import { SignUpView } from './SignUp.styled';
import SignUpForm from './SignUpForm';
import WelcomeSection from './WelcomeSection';

const SignUp = () => (
  <SignUpView>
    <WelcomeSection />
    <SignUpForm />
  </SignUpView>
);

export default SignUp;
