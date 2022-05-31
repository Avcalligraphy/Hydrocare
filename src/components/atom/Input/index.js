/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Gap} from '..';

const Input = ({label, value, grade, onChangeText, secureTextEntry}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <Gap height={10} />
      <TextInput
        placeholder={value}
        style={styles.input}
        placeholderTextColor={'white'}
        value={grade}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    // backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    color: 'white',
    height: 50,
    // fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
