import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';


function App() {
  return (
    <div className="App"> {/* Use your existing App div */}
      <h1>Controlled Component Form</h1>
      <RegistrationForm />
      <h1>Formik Form</h1>
      <FormikForm />
    </div>
  );
}

export default App;