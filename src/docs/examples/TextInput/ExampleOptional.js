import React from 'react';
import TextInput from 'ps-react/TextInput';

/** Optional Text Input */
export default function ExampleOptional() {
  return <TextInput
    htmlId="example-optional"
    label="First Name"
    name="firstname"
    onChange={() => {}}
  />
}
