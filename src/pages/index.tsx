import { useRouter } from 'next/router';
import { Button, Container } from 'src/components';

import {
  ButtonsContainer,
  Description,
  ExploreContainer,
  HomeView,
  ImagesContainer,
  SubTitle,
  Title,
} from './Home.styled';

const HomePage = () => {
  const router = useRouter();
  const toSignup = () => router.push('/signin');
  const foo = () => null;
  return (
    <HomeView>
      <Container display={'flex'}>
        <ExploreContainer>
          <div>
            <SubTitle variant={'h5'}>Comics marketplace</SubTitle>
            <Title variant={'h1'}>Start your comic journey here</Title>
            <Description variant={'p'}>
              Our marketplace is largest world largest marketplace <br /> for
              comic collectors
            </Description>
          </div>
          <ButtonsContainer>
            <Button disabled onClick={foo}>
              Explore
            </Button>
            <Button onClick={toSignup}>Create</Button>
          </ButtonsContainer>
        </ExploreContainer>
        <ImagesContainer>
          <div>2</div>
        </ImagesContainer>
      </Container>
    </HomeView>
  );
};

export default HomePage;
