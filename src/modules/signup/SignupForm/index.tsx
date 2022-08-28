import { Field, Form, Formik } from 'formik';

import { Button, Icon, Input } from '../../../components';

import { SignupFormView } from './SignupForm.styled';
import { validationSchema } from './validation';

const SignupForm = () => {
  return (
    <SignupFormView>
      <Formik
        onSubmit={() => console.log('submit')}
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
              />
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                type="password"
                name="password"
                id="password"
                showStatus
              />
              <Button type="submit" disabled={isSubmitting}>
                Signup
              </Button>
            </Form>
          );
        }}
      </Formik>
    </SignupFormView>
  );
};

export default SignupForm;
