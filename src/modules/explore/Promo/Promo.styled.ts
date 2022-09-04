import Image from 'next/image';
import { Typography } from 'src/components';
import styled from 'styled-components';

const PromoView = styled.div`
  width: 100%;
  position: relative;
  height: 7.24rem;
`;

const PromoBackground = styled(Image)`
  width: 100%;
  height: 7.24rem;
  //filter: blur(4px);
`;

const PromoBackgroundOpacity = styled.div`
  width: 100%;
  height: 7.24rem;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 100;
`;

const PromoBackgroundContainer = styled.div`
  height: 7.24rem;
  width: 100%;
  position: absolute;
  z-index: 1;
  span {
    height: 7.24rem !important;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
  box-sizing: border-box;
  padding: 15rem 0;
`;

const Title = styled(Typography)`
  color: #ffffff;
  margin-bottom: 2rem;
`;

const SubTitle = styled(Typography)`
  color: #ffffff;
  margin-bottom: 4.8rem;
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
