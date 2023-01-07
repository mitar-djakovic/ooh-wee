import { Field, Form, Formik } from 'formik';
import { Button, Icon, Input } from 'src/components';

import { PromoSearchFormView, SearchContainer } from './PromoSearchForm.styled';

const PromoSearchForm = () => (
  <PromoSearchFormView>
    <Formik
      initialValues={{ topic: '' }}
      onSubmit={(values) => console.log('values', values)}
    >
      {({ values, isSubmitting, handleBlur, handleChange, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <SearchContainer>
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                component={Input}
                name="topic"
                id="topic"
                fullWidth
                placeholder="Search items, collections, and accounts"
                value={values.topic}
              />
              <Button
                disabled={isSubmitting}
                leftIcon={<Icon name="search" />}
                type="submit"
                onClick={handleSubmit}
              />
            </SearchContainer>
          </Form>
        );
      }}
    </Formik>
  </PromoSearchFormView>
);

export default PromoSearchForm;
