import { Typography } from 'src/components';
import { device } from 'src/styles/breakpoints';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  margin: 40px 0;
  button {
    margin-right: 15px;
  }
`;

const ExploreContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 20%;
`;

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled(Typography)`
  text-transform: uppercase;
  margin: 16px 0 24px 0;
`;

const SubTitle = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary.main};
`;

const Description = styled(Typography)``;

const HomeView = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.colors.random.background};
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
  HomeView,
  ImagesContainer,
  SubTitle,
  Title,
};
