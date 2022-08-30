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
  box-shadow: 0px 20px 90px rgba(0, 0, 0, 0.115449);
  backdrop-filter: blur(62.5205px);
  /* Note: backdrop-filter has minimal browser support */
  box-sizing: border-box;
  padding: 8px 13px 8px 30px;
  border-radius: 45px;
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
  padding: 100px 90px 90px 90px;
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
