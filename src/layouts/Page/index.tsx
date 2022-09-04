import { FC } from 'react';
import { Header } from 'src/layouts';

import { PageView } from './Page.styled';

interface PageProps {
  children: JSX.Element;
}

const Page: FC<PageProps> = ({ children }) => (
  <PageView>
    <Header />
    {children}
  </PageView>
);

export default Page;
