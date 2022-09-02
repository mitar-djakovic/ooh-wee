import { FC } from 'react';
import Image from 'next/image';

import { AvatarView } from './Avatar.styled';

interface Avatar {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: FC<Avatar> = ({ src, alt, className }) => (
  <AvatarView className={className}>
    <Image src={src} alt={alt} />
  </AvatarView>
);

export default Avatar;
