import { FC, useState } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import Image from 'next/image';
import { sendEmailVerificationLink, signUp } from 'src/api/auth';
import { logoImg } from 'src/assets/images';
import { Button, Icon, Input } from 'src/components';
import { handleStatus } from 'src/utils';

import {
  ButtonContainer,
  FieldWrapper,
  LogoContainer,
  SignInFormView,
  SubmitStatus,
  SubTitle,
  Title,
} from './SignUpForm.styled';
import { validationSchema } from './validation';

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

const generateGetCommonProps =
  ({
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  }: FormikProps<Values>) =>
  (name: keyof Values) => {
    return {
      onChange: handleChange,
      onBlur: handleBlur,
      component: Input,
      name: name,
      id: name,
      fullWidth: true,
      value: values[name],
      type: 'text',
      status: handleStatus(touched[name], errors[name]),
      message: touched[name] && errors[name] ? errors[name] : '',
    };
  };

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
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
      >
        {(form) => {
          const getCommonProps = generateGetCommonProps(form);

          return (
            <Form>
              <FieldWrapper>
                <Field
                  {...getCommonProps('email')}
                  type="email"
                  placeholder="Enter your email"
                  label="Email"
                  icon={<Icon name="envelope" />}
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  {...getCommonProps('password')}
                  type="password"
                  icon={<Icon name="eyeClosed" />}
                  placeholder="Enter your password"
                  label="Password"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  {...getCommonProps('confirmPassword')}
                  type="password"
                  placeholder="Confirm your password"
                  label="Confirm Password"
                  icon={<Icon name="lock" />}
                />
              </FieldWrapper>
              <ButtonContainer>
                {status && (
                  <SubmitStatus status={error ? 'error' : 'success'}>
                    {status}
                  </SubmitStatus>
                )}
                <Button
                  onClick={foo}
                  fullWidth
                  type="submit"
                  disabled={form.isSubmitting}
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
