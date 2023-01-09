import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { Button, Icon, Input, Typography } from 'src/components';

import { sendEmailVerificationLink } from '../../../api/auth';
import { handleStatus } from '../../../utils';

import { validationSchema } from './validation';
import {
  ButtonWrapper,
  SubmitStatus,
  VerificationFormView,
} from './VerificationForm.styled';

interface VerificationValues {
  email: string;
}

const VerificationForm = () => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  const onSubmit = async (values: VerificationValues) => {
    try {
      const response = await sendEmailVerificationLink(values.email);
      setMessage(response.message);
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  const handleReturnToLogin = () => {
    router.push('/login');
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
              {message && <SubmitStatus>{message}</SubmitStatus>}
              <ButtonWrapper>
                <Button onClick={handleReturnToLogin}>Return to login</Button>
                <Button onClick={() => onSubmit(values)}>Resend email</Button>
              </ButtonWrapper>
            </Form>
          );
        }}
      </Formik>
    </VerificationFormView>
  );
};

export default VerificationForm;
