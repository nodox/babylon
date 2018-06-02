import React from 'react'

const FormContext = React.createContext({
  formData: {},
  updateFormData: (e) => {},
  submitted: false,
  validation: {},
})


export { FormContext };
