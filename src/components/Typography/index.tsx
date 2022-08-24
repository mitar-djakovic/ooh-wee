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
  children: string;
  fontWeight?: FontWeight;
}

const Typography = ({
  variant,
  children,
  fontWeight = 'regular',
}: TypographyProp) => {
  switch (variant) {
    case 'h1':
      return <Heading1 fontWeight={fontWeight}>{children}</Heading1>;
    case 'h2':
      return <Heading2 fontWeight={fontWeight}>{children}</Heading2>;
    case 'h3':
      return <Heading3 fontWeight={fontWeight}>{children}</Heading3>;
    case 'h4':
      return <Heading4 fontWeight={fontWeight}>{children}</Heading4>;
    case 'h5':
      return <Heading5 fontWeight={fontWeight}>{children}</Heading5>;
    case 'h6':
      return <Heading6 fontWeight={fontWeight}>{children}</Heading6>;
    default:
      return <Paragraph fontWeight={fontWeight}>{children}</Paragraph>;
  }
};

export default Typography;
