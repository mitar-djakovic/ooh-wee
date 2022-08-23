import { Button, Container } from '../../components';

import {
  ButtonsContainer,
  Description,
  ExploreContainer,
  ImagesContainer,
  LoginView,
  SubTitle,
  Title,
} from './Login.styled';

const Login = () => (
  <LoginView>
    <Container display={'flex'}>
      <ExploreContainer>
        <div>
          <SubTitle>Comics marketplace</SubTitle>
          <Title>Start your comic journey here</Title>
          <Description>
            Our marketplace is largest world largest marketplace <br /> for
            comic collectors
          </Description>
        </div>
        <ButtonsContainer>
          <Button label={'Explore'} disabled />
          <Button label={'Create'} />
        </ButtonsContainer>
      </ExploreContainer>
      <ImagesContainer>
        <div>2</div>
      </ImagesContainer>
    </Container>
  </LoginView>
);

export default Login;
