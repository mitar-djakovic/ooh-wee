import Image from 'next/image';
import { logoImg } from 'src/assets/images';

import DesktopNav from './DesktopNav';
import { HeaderView, Logo } from './Header.styled';

const Header = () => (
  <HeaderView>
    <Logo>
      <Image src={logoImg} alt="Logo" />
    </Logo>
    <DesktopNav />
  </HeaderView>
);

export default Header;
