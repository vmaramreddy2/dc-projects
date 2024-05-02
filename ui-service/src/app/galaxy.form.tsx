// GalaxyForm.tsx
import { Formik, Form, Field } from 'formik';
import { Button } from '@mui/material';

const GalaxyForm = ({ onSubmit, initialValues }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form>
      <Field name="name" type="text" placeholder="Name" />
      {/* Add fields for other galaxy attributes */}
      <Button type="submit">Submit</Button>
    </Form>
  </Formik>
);

export default GalaxyForm;
