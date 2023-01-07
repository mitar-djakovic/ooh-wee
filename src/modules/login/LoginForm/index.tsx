import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { login } from 'src/api/auth';
import { logoImg } from 'src/assets/images';
import { Button, Icon, Input } from 'src/components';

import {
  ButtonContainer,
  Divider,
  DividerContainer,
  DividerText,
  LoginFormView,
  LogoContainer,
  SocialButton,
  SocialButtons,
  SubmitStatus,
  SubTitle,
  Title,
} from './LoginForm.styled';
import { validationSchema } from './validation';

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState('');
  const foo = () => null;

  const onSubmit = async (
    values: Values,
    setSubmitting: (status: boolean) => void
  ) => {
    try {
      setSubmitting(true);
      const response = await login(values);
      if (response.status === 200) {
        const accessToken = document.cookie
          .split('; ')
          .find((row) => row.startsWith('access_token'))
          ?.split('=')[1];
        if (accessToken) {
          const decoded = await jwtDecode(accessToken);
          console.log('redirect', decoded);
        }
        await router.push('/');
      }
      setSubmitting(false);
    } catch (error: any) {
      setLoginError(error.message);
      setSubmitting(false);
    }
  };

  const handleStatus = (touched?: boolean, error?: string): string | void => {
    if (touched && error) {
      return 'error';
    }
    if (touched && !error) {
      return 'success';
    }
  };

  return (
    <LoginFormView>
      <LogoContainer>
        <Image src={logoImg} alt="Logo" />
      </LogoContainer>
      <Title variant="h1">Login</Title>
      <SubTitle variant="p1">
        Take the next step and login to your account
      </SubTitle>
      <Formik
        onSubmit={(values: Values, { setSubmitting }) =>
          onSubmit(values, setSubmitting)
        }
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {({
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          errors,
          touched,
        }) => {
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
                status={handleStatus(touched.email, errors.email)}
                message={touched.email && errors.email ? errors.email : ''}
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
                status={handleStatus(touched.password, errors.password)}
                message={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <ButtonContainer>
                {loginError && (
                  <SubmitStatus status="error">{loginError}</SubmitStatus>
                )}
                <Button
                  onClick={foo}
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
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
                  leftIcon={<Icon name="google" />}
                  fullWidth
                >
                  Sign Up with Google
                </SocialButton>
                <SocialButton
                  onClick={foo}
                  leftIcon={<Icon name="facebook" />}
                  fullWidth
                >
                  Sign up with Facebook
                </SocialButton>
                <SocialButton
                  onClick={foo}
                  leftIcon={<Icon name="twitter" />}
                  fullWidth
                >
                  Sign up with Twitter
                </SocialButton>
              </SocialButtons>
            </Form>
          );
        }}
      </Formik>
    </LoginFormView>
  );
};

export default LoginForm;
