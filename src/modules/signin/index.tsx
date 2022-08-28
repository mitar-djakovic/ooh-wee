import { SignInView } from './SignIn.styled';
import SignupForm from './SignInForm';
import WelcomeSection from './WelcomeSection';

const Signup = () => (
  <SignInView>
    <WelcomeSection />
    <SignupForm />
  </SignInView>
);

export default Signup;
