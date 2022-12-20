import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import { signUp } from 'src/api/auth';
import { logoImg } from 'src/assets/images';
import { Button, Icon, Input } from 'src/components';

import {
  ButtonContainer,
  LogoContainer,
  SignInFormView,
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

const SignupForm = () => {
  const foo = () => null;

  const onSubmit = async (values: Values) => {
    console.log('values', values);
    try {
      const response = await signUp(values);
      console.log('-----', response);
    } catch (error) {
      console.log('error1', error);
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
        onSubmit={(values) => onSubmit(values)}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting, handleBlur, handleChange }) => {
          return (
            <Form>
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                name="firstName"
                id="firstName"
                showStatus
                icon={<Icon name="user" />}
                fullWidth
                placeholder="Enter your first name"
                label="First Name"
                value={values.firstName}
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="text"
                name="lastName"
                id="lastName"
                showStatus
                fullWidth
                placeholder="Enter your last name"
                icon={<Icon name="envelope" />}
                label="Last Name"
                value={values.lastName}
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="email"
                name="email"
                id="email"
                showStatus
                fullWidth
                placeholder="Enter your email"
                label="Email"
                icon={<Icon name="envelope" />}
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
                icon={<Icon name="eye-closed" />}
                fullWidth
                placeholder="Enter your password"
                label="Password"
                value={values.password}
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                showStatus
                fullWidth
                placeholder="Confirm your password"
                label="Confirm Password"
                value={values.confirmPassword}
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
            </Form>
          );
        }}
      </Formik>
    </SignInFormView>
  );
};

export default SignupForm;
