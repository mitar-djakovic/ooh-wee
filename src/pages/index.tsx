import styled from '@emotion/styled';

const SomeText = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const Home = () => {
  return <SomeText>Hello world</SomeText>;
};

export default Home;
