import { FC } from 'react';
import {
  CheckCircle,
  Envelope,
  Eye,
  EyeClosed,
  Facebook,
  Google,
  Lock,
  Twitter,
  User,
  WarningCircle,
  WarningCircleFull,
} from 'src/assets/icons';

import { IconView } from './Icon.styles';

const renderIcon = (name: string) => {
  switch (name) {
    case 'check':
      return <CheckCircle />;
    case 'warning':
      return <WarningCircle />;
    case 'warning-full':
      return <WarningCircleFull />;
    case 'eye':
      return <Eye />;
    case 'eye-closed':
      return <EyeClosed />;
    case 'envelope':
      return <Envelope />;
    case 'lock':
      return <Lock />;
    case 'user':
      return <User />;
    case 'google':
      return <Google />;
    case 'twitter':
      return <Twitter />;
    case 'facebook':
      return <Facebook />;
  }
};

type Name =
  | 'warning'
  | 'warning-full'
  | 'check'
  | 'eye'
  | 'eye-closed'
  | 'envelope'
  | 'lock'
  | 'user'
  | 'google'
  | 'twitter'
  | 'facebook';

interface IconProps {
  name: Name;
  size?: string;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, size = '18px', color = '#000000' }) => (
  <IconView size={size} color={color}>
    {renderIcon(name)}
  </IconView>
);

export default Icon;
