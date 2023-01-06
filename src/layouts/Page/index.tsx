import { FC, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { Header } from 'src/layouts';

import { PageView } from './Page.styled';

interface PageProps {
  children: JSX.Element;
  isProtected?: boolean;
}

interface Decoded {
  email: string;
  exp: number;
  iat: number;
}

const Page: FC<PageProps> = ({ children, isProtected }) => {
  console.log('protected', isProtected);
  const [havePermissions, setHavePermissions] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token'))
      ?.split('=')[1];
    if (accessToken) {
      const decoded: Decoded = jwtDecode(accessToken);

      if (decoded.exp * 1000 < new Date().getTime()) {
        setHavePermissions(false);
        setIsLoading(false);
        push('/login');
      } else {
        setIsLoading(false);
        setHavePermissions(true);
      }
    }
  }, [push]);

  if (isLoading && !havePermissions) {
    return <div>Is loading</div>;
  }

  return (
    <PageView>
      <Header />
      {children}
    </PageView>
  );
};

export default Page;
