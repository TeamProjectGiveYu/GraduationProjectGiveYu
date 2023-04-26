/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput } from 'react-native';

const Page = () => {
  const longPlaceholder = 'This is a really long placeholder t';

  return (
    <TextInput
      multiline={true}
      placeholder={longPlaceholder}
      style={{ backgroundColor: '#f0f' }}
    />
  );
};

export default Page;
