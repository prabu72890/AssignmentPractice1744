import React, { Component } from 'react';
import { TextInput } from 'react-native';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState();

  return (
    <TextInput
      style={{ 
        height: 40, 
        borderColor: '#92278F', 
        borderWidth: 2 , 
        padding:8,
        borderRadius:8,
        margin:10,

        }}

      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = { 'type your email'}
    />
  );
}

export default UselessTextInput;