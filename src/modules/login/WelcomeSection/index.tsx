import Image from 'next/image';
import { useRouter } from 'next/router';
import { registrationBg } from 'src/assets/images';
import { Button } from 'src/components';

import {
  BackgroundImage,
  ContentContainer,
  MessageContainer,
  SubTitle,
  Title,
  WelcomeSectionView,
} from './WelcomeSection.styled';

const WelcomeSection = () => {
  const router = useRouter();
  const onClick = () => router.push('/signUp');

  return (
    <WelcomeSectionView>
      <BackgroundImage>
        <Image src={registrationBg} alt="Registration background" />
      </BackgroundImage>
      <ContentContainer>
        <Title variant="h1">
          A highly-curated platform for creating, collecting Comics
        </Title>
        <MessageContainer>
          <SubTitle variant="p1">You don’t have an account?</SubTitle>
          <Button onClick={onClick}>Sign Up</Button>
        </MessageContainer>
      </ContentContainer>
    </WelcomeSectionView>
  );
};

export default WelcomeSection;
