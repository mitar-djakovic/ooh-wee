import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary.main};
`;

const Home = () => {
  return <Button>Hello</Button>;
};

export default Home;
