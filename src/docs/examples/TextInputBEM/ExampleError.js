import React from 'react';
import TextInputBEM from 'ps-react/TextInputBEM';

/** Required Text Input with Error */
export default function ExampleError() {
  return <TextInputBEM
    htmlId="example-error"
    label="First Name"
    name="firstname"
    onChange={() => {}}
    required
    error="First name is required."
  />
}
