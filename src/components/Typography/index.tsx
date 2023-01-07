import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph1,
  Paragraph2,
  Paragraph3,
} from './Typography.styled';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3';

interface TypographyProp {
  variant: Variant;
  children: string | string[];
  className?: string;
}

const TypographyMap = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p1: Paragraph1,
  p2: Paragraph2,
  p3: Paragraph3,
};

const Typography = ({ variant, children, className }: TypographyProp) => {
  const Type = TypographyMap[variant];

  return <Type className={className}>{children}</Type>;
};

export default Typography;
