import styled from 'styled-components';

const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.typography.headings.h1.fontSize};
  line-height: ${(props) => props.theme.typography.headings.h1.lineHeight};
  font-weight: ${(props) => props.theme.typography.headings.h1.fontWeight};
`;

const Heading2 = styled.h2`
  font-size: ${(props) => props.theme.typography.headings.h2.fontSize};
  line-height: ${(props) => props.theme.typography.headings.h2.lineHeight};
  font-weight: ${(props) => props.theme.typography.headings.h2.fontWeight};
`;

const Heading3 = styled.h3`
  font-size: ${(props) => props.theme.typography.headings.h3.fontSize};
  line-height: ${(props) => props.theme.typography.headings.h3.lineHeight};
  font-weight: ${(props) => props.theme.typography.headings.h3.fontWeight};
`;

const Heading4 = styled.h4`
  font-size: ${(props) => props.theme.typography.headings.h4.fontSize};
  line-height: ${(props) => props.theme.typography.headings.h4.lineHeight};
  font-weight: ${(props) => props.theme.typography.headings.h4.fontWeight};
`;

const Heading5 = styled.h5`
  font-size: ${(props) => props.theme.typography.headings.h5.fontSize};
  line-height: ${(props) => props.theme.typography.headings.h5.lineHeight};
  font-weight: ${(props) => props.theme.typography.headings.h5.fontWeight};
`;

const Heading6 = styled.h6`
  font-size: ${(props) => props.theme.typography.headings.h6.fontSize};
  line-height: ${(props) => props.theme.typography.headings.h6.lineHeight};
  font-weight: ${(props) => props.theme.typography.headings.h6.fontWeight};
`;

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.typography.paragraphs.big.fontSize};
  line-height: ${(props) => props.theme.typography.paragraphs.big.lineHeight};
  font-weight: ${(props) => props.theme.typography.paragraphs.big.fontWeight};
`;

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
};
