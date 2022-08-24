import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

type Props = {
  fontWeight: string;
};

const Heading1 = styled.h1<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};

  @media only screen and ${device.xs} {
    font-size: 32px;
    line-height: 36px;
  }

  @media only screen and ${device.md} {
    font-size: 38px;
    line-height: 44px;
  }

  @media only screen and ${device.xl} {
    font-size: 48px;
    line-height: 52px;
  }
`;

const Heading2 = styled.h2<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};

  @media only screen and ${device.xs} {
    font-size: 29px;
    line-height: 32px;
  }

  @media only screen and ${device.md} {
    font-size: 33px;
    line-height: 36px;
  }

  @media only screen and ${device.xl} {
    font-size: 40px;
    line-height: 44px;
  }
`;

const Heading3 = styled.h3<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};

  @media only screen and ${device.xs} {
    font-size: 26px;
    line-height: 32px;
  }

  @media only screen and ${device.md} {
    font-size: 28px;
    line-height: 32px;
  }

  @media only screen and ${device.xl} {
    font-size: 33px;
    line-height: 36px;
  }
`;

const Heading4 = styled.h4<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};

  @media only screen and ${device.xs} {
    font-size: 23px;
    line-height: 24px;
  }

  @media only screen and ${device.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media only screen and ${device.xl} {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Heading5 = styled.h5<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};

  @media only screen and ${device.xs} {
    font-size: 20px;
    line-height: 24px;
  }

  @media only screen and ${device.md} {
    font-size: 21px;
    line-height: 24px;
  }

  @media only screen and ${device.xl} {
    font-size: 23px;
    line-height: 24px;
  }
`;

const Heading6 = styled.h6<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};
  font-size: 18px;
  line-height: 20px;
`;

const Paragraph = styled.p<Props>`
  color: ${(props) => props.theme.colors.random.black};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};

  @media only screen and ${device.xs} {
    font-size: 20px;
    line-height: 28px;
  }

  @media only screen and ${device.md} {
    font-size: 21px;
    line-height: 32px;
  }

  @media only screen and ${device.xl} {
    font-size: 23px;
    line-height: 36px;
  }
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
