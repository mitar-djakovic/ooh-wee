import { Typography } from 'src/components';
import styled from 'styled-components';

const VerificationTokenView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled(Typography)`
  color: ${(props) => props.theme.colors.status.error.primary};
`;

const SuccessMessage = styled(Typography)`
  color: ${(props) => props.theme.colors.status.success.primary};
`;

export { ErrorMessage, SuccessMessage, VerificationTokenView };
