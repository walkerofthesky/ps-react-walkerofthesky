import React from 'react';
import TextInputStyledComponents from 'ps-react/TextInputStyledComponents';

/** Required Text Input with Error - enable CSS Modules in webpack config */
export default function ExampleError() {
  return <TextInputStyledComponents
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
}
