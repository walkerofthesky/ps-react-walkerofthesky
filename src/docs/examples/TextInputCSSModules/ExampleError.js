import React from 'react';
import TextInputCSSModules from 'ps-react/TextInputCSSModules';

/** Required Text Input with Error - enable CSS Modules in webpack config */
export default function ExampleError() {
  return <TextInputCSSModules
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
}
