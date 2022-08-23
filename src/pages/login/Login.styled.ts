import styled from 'styled-components';

import { device } from '../../styles/breakpoints';

const ButtonsContainer = styled.div`
  margin: 40px 0;
  button {
    margin-right: 15px;
  }
`;

const ExploreContainer = styled.div`
  background-color: bisque;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20%;
`;

const ImagesContainer = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  line-height: 62px;
  font-weight: 600;
  margin: 16px 0 24px 0;
`;

const SubTitle = styled.h6`
  font-size: 18px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 24px;
`;

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

export {
  ButtonsContainer,
  Description,
  ExploreContainer,
  ImagesContainer,
  LoginView,
  SubTitle,
  Title,
};
