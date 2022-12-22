import { Field, Form, Formik } from 'formik';
import { Button, Icon, Input, Typography } from 'src/components';

import { validationSchema } from './validation';
import { ButtonWrapper, VerificationFormView } from './VerificationForm.styled';

interface VerificationValues {
  email: string;
}

const VerificationForm = () => {
  const onSubmit = (values: VerificationValues) => {
    console.log('submit', values);
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
    <VerificationFormView>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values: VerificationValues) => onSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, values, touched, errors }) => {
          return (
            <Form>
              <Typography variant="h1">
                Check your email for verification link
              </Typography>
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
            </Form>
          );
        }}
      </Formik>
      <ButtonWrapper>
        <Button onClick={() => console.log('Return to login')}>
          Return to login
        </Button>
        <Button onClick={() => console.log('Return to login')}>
          Resend email
        </Button>
      </ButtonWrapper>
    </VerificationFormView>
  );
};

export default VerificationForm;
