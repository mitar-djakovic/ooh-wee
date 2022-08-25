import { ReactNode } from 'react';

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
} from './Typography.styled';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type FontWeight = 'light' | 'regular' | 'bold';

interface TypographyProp {
  variant: Variant;
  children: ReactNode;
  fontWeight?: FontWeight;
  className?: string;
}

const Typography = ({
  variant,
  children,
  fontWeight = 'regular',
  className,
}: TypographyProp) => {
  switch (variant) {
    case 'h1':
      return (
        <Heading1 className={className} fontWeight={fontWeight}>
          {children}
        </Heading1>
      );
    case 'h2':
      return (
        <Heading2 className={className} fontWeight={fontWeight}>
          {children}
        </Heading2>
      );
    case 'h3':
      return (
        <Heading3 className={className} fontWeight={fontWeight}>
          {children}
        </Heading3>
      );
    case 'h4':
      return (
        <Heading4 className={className} fontWeight={fontWeight}>
          {children}
        </Heading4>
      );
    case 'h5':
      return (
        <Heading5 className={className} fontWeight={fontWeight}>
          {children}
        </Heading5>
      );
    case 'h6':
      return (
        <Heading6 className={className} fontWeight={fontWeight}>
          {children}
        </Heading6>
      );
    default:
      return (
        <Paragraph className={className} fontWeight={fontWeight}>
          {children}
        </Paragraph>
      );
  }
};

export default Typography;
