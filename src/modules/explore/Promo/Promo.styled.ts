import Image from 'next/image';
import { Typography } from 'src/components';
import styled from 'styled-components';

const PromoView = styled.div`
  width: 100%;
  position: relative;
  height: 724px;
`;

const PromoBackground = styled(Image)`
  width: 100%;
  height: 724px;
  //filter: blur(4px);
`;

const PromoBackgroundOpacity = styled.div`
  width: 100%;
  height: 724px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 100;
`;

const PromoBackgroundContainer = styled.div`
  height: 724px;
  width: 100%;
  position: absolute;
  z-index: 1;
  span {
    height: 724px !important;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
  box-sizing: border-box;
  padding: 150px 0;
`;

const Title = styled(Typography)`
  color: #ffffff;
  margin-bottom: 20px;
`;

const SubTitle = styled(Typography)`
  color: #ffffff;
  margin-bottom: 48px;
  font-weight: 400;
`;

export {
  Content,
  PromoBackground,
  PromoBackgroundContainer,
  PromoBackgroundOpacity,
  PromoView,
  SubTitle,
  Title,
};
