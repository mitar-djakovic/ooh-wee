import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';

const VerificationToken = () => {
  const router = useRouter();

  const { token } = router.query;

  useEffect(() => {
    if (typeof token === 'string') {
      const decoded = jwtDecode(token);

      console.log('token', decoded);
    }
  }, [token]);

  return <div>DDD</div>;
};

export default VerificationToken;
