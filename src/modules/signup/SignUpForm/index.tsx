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
        {({
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          errors,
          touched,
        }) => {
          console.log('errors', errors);
          console.log('touched', touched);
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
                status={
                  // eslint-disable-next-line no-nested-ternary
                  touched.firstName && errors.firstName
                    ? 'error'
                    : touched.firstName && !errors.firstName
                    ? 'success'
                    : ''
                }
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
                showStatus
                fullWidth
                placeholder="Enter your last name"
                icon={<Icon name="envelope" />}
                label="Last Name"
                value={values.lastName}
                status={
                  // eslint-disable-next-line no-nested-ternary
                  touched.lastName && errors.lastName
                    ? 'error'
                    : touched.lastName && !errors.lastName
                    ? 'success'
                    : ''
                }
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
                showStatus
                fullWidth
                placeholder="Enter your email"
                label="Email"
                icon={<Icon name="envelope" />}
                value={values.email}
                status={
                  // eslint-disable-next-line no-nested-ternary
                  touched.email && errors.email
                    ? 'error'
                    : touched.email && !errors.email
                    ? 'success'
                    : ''
                }
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
                icon={<Icon name="eye-closed" />}
                fullWidth
                placeholder="Enter your password"
                label="Password"
                value={values.password}
                status={
                  // eslint-disable-next-line no-nested-ternary
                  touched.password && errors.password
                    ? 'error'
                    : touched.password && !errors.password
                    ? 'success'
                    : ''
                }
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
                showStatus
                fullWidth
                placeholder="Confirm your password"
                label="Confirm Password"
                value={values.confirmPassword}
                icon={<Icon name="lock" />}
                status={
                  // eslint-disable-next-line no-nested-ternary
                  touched.confirmPassword && errors.confirmPassword
                    ? 'error'
                    : touched.confirmPassword && !errors.confirmPassword
                    ? 'success'
                    : ''
                }
                message={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
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
