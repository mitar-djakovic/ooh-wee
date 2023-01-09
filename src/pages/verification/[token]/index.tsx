import { ThemeProvider } from 'styled-components';

import { theme } from '../../../theme';

import VerificationToken from './verificationToken';

import 'src/styles/reset.css';

const TokenPage = () => (
  <ThemeProvider theme={theme}>
    <VerificationToken />
  </ThemeProvider>
);

export default TokenPage;
