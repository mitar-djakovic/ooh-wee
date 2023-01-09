import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { confirmEmail } from 'src/api/auth';

import {
  ErrorMessage,
  SuccessMessage,
  VerificationTokenView,
} from './VerificationToken.styled';

interface Decoded {
  email: string;
  exp: number;
  iat: number;
}

const VerificationToken = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { token } = router.query;

  useEffect(() => {
    if (typeof token === 'string') {
      const { email } = jwtDecode<Decoded>(token);

      if (email) {
        confirmEmail(email)
          .then((res) => {
            setError('');
            setMessage(res.message);
          })
          .catch((error) => {
            setMessage('');
            setError(error.message);
          });
      }
    }
  }, [token]);

  return (
    <VerificationTokenView>
      {error ? (
        <ErrorMessage variant="h1">{error}</ErrorMessage>
      ) : (
        <SuccessMessage variant="h1">{message}</SuccessMessage>
      )}
    </VerificationTokenView>
  );
};

export default VerificationToken;
