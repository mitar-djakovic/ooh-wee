import { promoBg } from 'src/assets/images';
import { Container } from 'src/components';

import {
  Content,
  PromoBackground,
  PromoBackgroundContainer,
  PromoBackgroundOpacity,
  PromoView,
  SubTitle,
  Title,
} from './Promo.styled';
import PromoSearchForm from './PromoSearchForm';

const Promo = () => (
  <PromoView>
    <PromoBackgroundContainer>
      <PromoBackgroundOpacity />
      <PromoBackground src={promoBg} alt="Promo background" />
    </PromoBackgroundContainer>
    <Container>
      <Content>
        <Title variant="h1">
          Discover, collect, and sell extraordinary Comics
        </Title>
        <SubTitle variant="p1">
          Our marketplace is the world&lsquo;s first and largest Comic market
          for independent creators worldwide
        </SubTitle>
        <PromoSearchForm />
      </Content>
    </Container>
  </PromoView>
);

export default Promo;
