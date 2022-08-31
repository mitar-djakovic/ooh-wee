import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { logoImg } from 'src/assets/images';
import { Button, Icon, Input } from 'src/components';

import {
  ButtonContainer,
  Divider,
  DividerContainer,
  DividerText,
  LogoContainer,
  SignInFormView,
  SocialButton,
  SocialButtons,
  SubTitle,
  Title,
} from './SignInForm.styled';
import { validationSchema } from './validation';

const SignupForm = () => {
  const foo = () => null;

  return (
    <SignInFormView>
      <LogoContainer>
        <Image src={logoImg} alt="Logo" />
      </LogoContainer>
      <Title variant="h1">Sign In</Title>
      <SubTitle variant="p1">
        Take the next step and sign in to your account
      </SubTitle>
      <Formik
        onSubmit={(values) => console.log('submit', values)}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, handleBlur, handleChange }) => {
          return (
            <Form>
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="email"
                name="email"
                id="email"
                showStatus
                icon={<Icon name="envelope" />}
                fullWidth
                placeholder="Enter your email"
                label="Email"
                value={values.email}
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="password"
                name="password"
                id="password"
                showStatus
                fullWidth
                placeholder="Enter your password"
                label="Password"
                value={values.password}
                icon={<Icon name="lock" />}
              />
              <ButtonContainer>
                <Button
                  onClick={foo}
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  Signup
                </Button>
              </ButtonContainer>
              <DividerContainer>
                <Divider />
                <DividerText variant="p1">or</DividerText>
                <Divider />
              </DividerContainer>
              <SocialButtons>
                <SocialButton
                  onClick={foo}
                  icon={<Icon name="google" />}
                  fullWidth
                >
                  Sign Up with Google
                </SocialButton>
                <SocialButton
                  onClick={foo}
                  icon={<Icon name="facebook" />}
                  fullWidth
                >
                  Sign up with Facebook
                </SocialButton>
                <SocialButton
                  onClick={foo}
                  icon={<Icon name="twitter" />}
                  fullWidth
                >
                  Sign up with Twitter
                </SocialButton>
              </SocialButtons>
            </Form>
          );
        }}
      </Formik>
    </SignInFormView>
  );
};

export default SignupForm;
