import { FC } from 'react';

import {
  CheckCircle,
  WarningCircle,
  WarningCircleFull,
} from '../../assets/icons';

import { IconView } from './Icon.styles';

const renderIcon = (name: string) => {
  switch (name) {
    case 'check':
      return <CheckCircle />;
    case 'warning':
      return <WarningCircle />;
    case 'warning-full':
      return <WarningCircleFull />;
  }
};

type Name = 'warning' | 'warning-full' | 'check';

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
