import { SignupView } from './Signup.styled';
import SignupForm from './SignupForm';
import WelcomeSection from './WelcomeSection';

const Signup = () => (
  <SignupView>
    <WelcomeSection />
    <SignupForm />
  </SignupView>
);

export default Signup;
