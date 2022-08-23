import { ContainerStyled } from './Container.styled';

interface ContainerProps {
  display?: string;
  children?: JSX.Element | JSX.Element[];
}

const Container = ({ children, display = 'block' }: ContainerProps) => (
  <ContainerStyled display={display}>{children}</ContainerStyled>
);

export default Container;
