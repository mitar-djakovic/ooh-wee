import { defaultBreakpoints, device } from 'src/styles/breakpoints';
import styled from 'styled-components';

const ContainerStyled = styled.div<{ display: string }>`
  display: ${(props) => props.display};
  @media only screen and ${device.md} {
    width: ${defaultBreakpoints.md};
    margin: 0 auto;
  }
  @media only screen and ${device.lg} {
    width: ${defaultBreakpoints.lg};
    margin: 0 auto;
  }
  @media only screen and ${device.xl} {
    width: ${defaultBreakpoints.xl};
    margin: 0 auto;
  }
  @media only screen and ${device.xxl} {
    min-width: ${defaultBreakpoints.xxl};
    margin: 0 auto;
  }
`;

export { ContainerStyled };
