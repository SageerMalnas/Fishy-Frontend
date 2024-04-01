import React, { useState } from 'react';
import {
  TextInput,
  TextInputProps,
} from 'react-native';


const AppTextInput = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput 
      onFocus={() => setFocused(true)} 
      onBlur={() => setFocused(false)}  
      placeholderTextColor={'#626262'}
      style={[
        {
          fontSize: 14,
          padding: 20,
          backgroundColor: 'f1f4ff',
          borderRadius: 10,
          marginVertical: 10,
          borderColor: '#c2c2c2',
          borderWidth: 3,
        },
        focused && {
          borderColor: '#1d3557',
          borderWidth: 3,
          shadowOffset: { width: 2, height: 5 },
          shadowColor: '#1f41bb',
          shadowOpacity: 0.2,
          shadowRadius: 10
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;
