import { SignInView } from './SignIn.styled';
import SignInForm from './SignInForm';
import WelcomeSection from './WelcomeSection';

const Signup = () => (
  <SignInView>
    <WelcomeSection />
    <SignInForm />
  </SignInView>
);

export default Signup;
