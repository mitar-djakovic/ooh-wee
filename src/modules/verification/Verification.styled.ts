import { Typography } from 'src/components';
import styled from 'styled-components';

const VerificationView = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const DescriptionSection = styled.div`
  width: 40%;
  background-color: ${(props) => props.theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
`;

const Description = styled(Typography)`
  color: ${(props) => props.theme.colors.random.white};
`;

export { Description, DescriptionSection, VerificationView };
