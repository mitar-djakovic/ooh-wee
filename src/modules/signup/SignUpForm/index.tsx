import { Field, Form, Formik } from 'formik';
import Image from 'next/image';

import { logoImg } from '../../../assets/images';
import { Button, Icon, Input } from '../../../components';

import {
  ButtonContainer,
  LogoContainer,
  SignInFormView,
  SubTitle,
  Title,
} from './SignUpForm.styled';
import { validationSchema } from './validation';

const SignupForm = () => {
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
        onSubmit={(values) => console.log('submit', values)}
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
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
                name="username"
                id="username"
                showStatus
                icon={<Icon name="warning" />}
                fullWidth
                placeholder="Enter your username"
                label="Username"
                value={values.username}
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
                <Button fullWidth type="submit" disabled={isSubmitting}>
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
