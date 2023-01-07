import { FC, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { sendEmailVerificationLink, signUp } from 'src/api/auth';
import { logoImg } from 'src/assets/images';
import { Button, Icon, Input } from 'src/components';

import {
  ButtonContainer,
  LogoContainer,
  SignInFormView,
  SubmitStatus,
  SubTitle,
  Title,
} from './SignUpForm.styled';
import { validationSchema } from './validation';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: FC = () => {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);

  const foo = () => null;

  const onSubmit = async (
    values: Values,
    setSubmitting: (status: boolean) => void
  ) => {
    setError(false);
    setStatus('');
    try {
      setSubmitting(true);
      const response = await signUp(values);

      if (response.status === 201) {
        const emailVerificationResponse = await sendEmailVerificationLink(
          values.email
        );

        console.log('emailVerificationResponse', emailVerificationResponse);
        if (emailVerificationResponse.status === 201) {
          setStatus(emailVerificationResponse.message);
        }
      }
      setSubmitting(false);
    } catch (error: any) {
      setStatus(error.message);
      setError(true);
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
    <SignInFormView>
      <LogoContainer>
        <Image src={logoImg} alt="Logo" />
      </LogoContainer>
      <Title variant="h1">Sign Up</Title>
      <SubTitle variant="p1">
        Take the next step and sign up to your account
      </SubTitle>
      <Formik
        onSubmit={(values, { setSubmitting }) =>
          onSubmit(values, setSubmitting)
        }
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
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
                name="firstName"
                id="firstName"
                icon={<Icon name="user" />}
                fullWidth
                placeholder="Enter your first name"
                label="First Name"
                value={values.firstName}
                status={handleStatus(touched.firstName, errors.firstName)}
                message={
                  touched.firstName && errors.firstName ? errors.firstName : ''
                }
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="text"
                name="lastName"
                id="lastName"
                fullWidth
                placeholder="Enter your last name"
                icon={<Icon name="envelope" />}
                label="Last Name"
                value={values.lastName}
                status={handleStatus(touched.lastName, errors.lastName)}
                message={
                  touched.lastName && errors.lastName ? errors.lastName : ''
                }
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="email"
                name="email"
                id="email"
                fullWidth
                placeholder="Enter your email"
                label="Email"
                icon={<Icon name="envelope" />}
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
                icon={<Icon name="eyeClosed" />}
                fullWidth
                placeholder="Enter your password"
                label="Password"
                value={values.password}
                status={handleStatus(touched.password, errors.password)}
                message={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                fullWidth
                placeholder="Confirm your password"
                label="Confirm Password"
                value={values.confirmPassword}
                icon={<Icon name="lock" />}
                status={handleStatus(
                  touched.confirmPassword,
                  errors.confirmPassword
                )}
                message={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />
              <ButtonContainer>
                {/*{(signUpError || signUpSuccess) && (*/}
                {/*  <SubmitStatus status={signUpError ? 'error' : 'success'}>*/}
                {/*    {signUpError || signUpSuccess}*/}
                {/*  </SubmitStatus>*/}
                {/*)}*/}
                {status && (
                  <SubmitStatus status={error ? 'error' : 'success'}>
                    {status}
                  </SubmitStatus>
                )}
                <Button
                  onClick={foo}
                  fullWidth
                  type="submit"
                  disabled={isSubmitting}
                >
                  Signup
                </Button>
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
    </SignInFormView>
  );
};

export default SignupForm;
