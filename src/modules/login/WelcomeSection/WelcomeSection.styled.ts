import { Typography } from 'src/components';
import styled from 'styled-components';

const WelcomeSectionView = styled.div`
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  position: relative;
  box-sizing: border-box;
  //padding: 100px 90px 90px 90px;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  span {
    height: 100% !important;
  }
`;

const MessageContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2rem 9rem rgba(0, 0, 0, 0.115449);
  backdrop-filter: blur(62.5rem);
  /* Note: backdrop-filter has minimal browser support */
  box-sizing: border-box;
  padding: 0.8rem 1.3rem 0.8rem 3rem;
  border-radius: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Typography)`
  color: #ffffff;
`;

const ContentContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 10rem 9rem 9rem 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SubTitle = styled(Typography)`
  color: #ffffff;
`;

export {
  BackgroundImage,
  ContentContainer,
  MessageContainer,
  SubTitle,
  Title,
  WelcomeSectionView,
};
