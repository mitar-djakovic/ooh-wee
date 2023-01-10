import { ThemeProvider } from 'styled-components';

import { theme } from '../../theme';

import {
  Description,
  DescriptionSection,
  VerificationView,
} from './Verification.styled';
import VerificationForm from './VerificationForm';

import 'src/styles/reset.css';

const VerificationPage = () => (
  <ThemeProvider theme={theme}>
    <VerificationView>
      <DescriptionSection>
        <Description variant="h1">
          Please confirm the validity of your email address
        </Description>
      </DescriptionSection>
      <VerificationForm />
    </VerificationView>
  </ThemeProvider>
);

export default VerificationPage;
