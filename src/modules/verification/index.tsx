import {
  Description,
  DescriptionSection,
  VerificationView,
} from './Verification.styled';
import VerificationForm from './VerificationForm';

const Verification = () => {
  return (
    <VerificationView>
      <DescriptionSection>
        <Description variant="h1">
          Please confirm the validity of your email address
        </Description>
      </DescriptionSection>
      <VerificationForm />
    </VerificationView>
  );
};

export default Verification;
