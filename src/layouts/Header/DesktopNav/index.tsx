import { useRouter } from 'next/router';
import { Button } from 'src/components';

import { DesktopNavView } from './Desktop.styled';

const DesktopNav = () => {
  const router = useRouter();

  const onSignInClick = () => {
    router.push('/signin');
  };

  const onSignUpClick = () => {
    router.push('/signup');
  };

  return (
    <DesktopNavView>
      <Button onClick={onSignInClick}>Sign Up</Button>
      <Button secondary onClick={onSignUpClick}>
        Sign In
      </Button>
    </DesktopNavView>
  );
};

export default DesktopNav;
