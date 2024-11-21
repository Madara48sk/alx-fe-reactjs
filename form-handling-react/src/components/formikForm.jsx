import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

function FormikForm() {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch('/api/register', { //Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData); //Handle API-returned errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Registration successful:', await response.json());
      setSubmitting(false);
    } catch (error) {
      console.error('Registration failed:', error);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field type="text" name="username" id="username" />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;