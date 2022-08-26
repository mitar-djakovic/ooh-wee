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

interface TypographyProp {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

const Typography = ({ variant, children, className }: TypographyProp) => {
  switch (variant) {
    case 'h1':
      return <Heading1 className={className}>{children}</Heading1>;
    case 'h2':
      return <Heading2 className={className}>{children}</Heading2>;
    case 'h3':
      return <Heading3 className={className}>{children}</Heading3>;
    case 'h4':
      return <Heading4 className={className}>{children}</Heading4>;
    case 'h5':
      return <Heading5 className={className}>{children}</Heading5>;
    case 'h6':
      return <Heading6 className={className}>{children}</Heading6>;
    default:
      return <Paragraph className={className}>{children}</Paragraph>;
  }
};

export default Typography;
