import { FC } from 'react';

import {
  CheckCircle,
  Envelope,
  Eye,
  EyeClosed,
  Facebook,
  Google,
  Lock,
  Search,
  Twitter,
  User,
  WarningCircle,
  WarningCircleFull,
} from '../../assets/icons';

import { IconView } from './Icon.styles';

export const iconMap = {
  check: <CheckCircle />,
  warning: <WarningCircle />,
  warningFull: <WarningCircleFull />,
  eye: <Eye />,
  eyeClosed: <EyeClosed />,
  envelope: <Envelope />,
  lock: <Lock />,
  user: <User />,
  google: <Google />,
  twitter: <Twitter />,
  facebook: <Facebook />,
  search: <Search />,
};

export type Name =
  | 'warning'
  | 'warningFull'
  | 'check'
  | 'eye'
  | 'eyeClosed'
  | 'envelope'
  | 'lock'
  | 'user'
  | 'google'
  | 'twitter'
  | 'facebook'
  | 'search';

interface IconProps {
  name: Name;
  size?: string;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, size = '1.8rem', color = '#000000' }) => (
  <IconView size={size} color={color}>
    {iconMap[name]}
  </IconView>
);

export default Icon;
