import Container from '../../components/Container';

import { ExploreContainer, ImagesContainer, LoginView } from './Login.styled';

const Login = () => (
  <LoginView>
    <Container display={'flex'}>
      <ExploreContainer>
        <div>1</div>
      </ExploreContainer>
      <ImagesContainer>
        <div>2</div>
      </ImagesContainer>
    </Container>
  </LoginView>
);

export default Login;
