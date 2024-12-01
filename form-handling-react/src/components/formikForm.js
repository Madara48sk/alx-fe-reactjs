import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setIsLoading(true); // Show loading indicator (add loading state to component)

    fetch('/api/register', { // Update with your API endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registration successful:', data);
        // Optionally reset the form here.  Formik provides functions for this.
        setSubmitting(false);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setSubmitting(false);
        setIsLoading(false);
      });
  };

  const [isLoading, setIsLoading] = useState(false); // Add loading state

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => ( // Access isSubmitting prop for better UX
        <Form>
          {isLoading && <div>Submitting...</div>} {/* Loading indicator */}

          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;