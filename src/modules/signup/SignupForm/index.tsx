import { Field, Form, Formik } from 'formik';

import { Button, Icon, Input } from '../../../components';

import {
  ButtonContainer,
  SignupFormView,
  SocialButton,
  SocialButtons,
} from './SignupForm.styled';
import { validationSchema } from './validation';

const SignupForm = () => {
  return (
    <SignupFormView>
      <Formik
        onSubmit={(values) => console.log('submit', values)}
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
      >
        {({
          values,
          isSubmitting,
          errors,
          touched,
          handleBlur,
          handleChange,
        }) => {
          console.log('errors', errors);
          console.log('touched', touched);
          console.log('values', values);
          // console.log('-------', errors.email && touched.email)
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
                icon={<Icon color="#DA1414" name="warning-full" />}
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
              />
              <ButtonContainer>
                <Button fullWidth type="submit" disabled={isSubmitting}>
                  Signup
                </Button>
              </ButtonContainer>
              <SocialButtons>
                <SocialButton fullWidth>Sign Up with Google</SocialButton>
                <SocialButton fullWidth>Sign up with Facebook</SocialButton>
                <SocialButton fullWidth>Sign up with Twitter</SocialButton>
              </SocialButtons>
            </Form>
          );
        }}
      </Formik>
    </SignupFormView>
  );
};

export default SignupForm;
