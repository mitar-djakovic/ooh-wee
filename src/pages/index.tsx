import styled from '@emotion/styled';

const SomeText = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-family: ${(props) => props.theme.fonts.primary};
`;

const Home = () => {
  return <SomeText>Hello world</SomeText>;
};

export default Home;
