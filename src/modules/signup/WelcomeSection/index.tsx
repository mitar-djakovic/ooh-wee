import Image from 'next/image';

import { registrationBg } from '../../../assets/images';
import { Button } from '../../../components';

import {
  BackgroundImage,
  ContentContainer,
  MessageContainer,
  SubTitle,
  Title,
  WelcomeSectionView,
} from './WelcomeSection.styled';

const WelcomeSection = () => (
  <WelcomeSectionView>
    <BackgroundImage>
      <Image src={registrationBg} alt="Registration background" />
    </BackgroundImage>
    <ContentContainer>
      <Title variant="h1">
        A highly-curated platform for creating, collecting Comics
      </Title>
      <MessageContainer>
        <SubTitle variant="p">You don’t have an account?</SubTitle>
        <Button>Sign Up</Button>
      </MessageContainer>
    </ContentContainer>
  </WelcomeSectionView>
);

export default WelcomeSection;
