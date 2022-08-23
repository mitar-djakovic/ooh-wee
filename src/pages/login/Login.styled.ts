import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

const LoginView = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // @media only screen and ${device.xs} {
  //   background-color: bisque;
  // }
  // @media only screen and ${device.sm} {
  //   background-color: brown;
  // }
  // @media only screen and ${device.lg} {
  //   background-color: aquamarine;
  // }
`;

const ImagesContainer = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100%;
`;

const ExploreContainer = styled.div`
  background-color: bisque;
  width: 100%;
  height: 100%;
`;

export { ExploreContainer, ImagesContainer, LoginView };
