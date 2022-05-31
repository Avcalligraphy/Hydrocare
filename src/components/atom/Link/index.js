/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Link = ({value, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.link}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecorationLine: 'underline',
  },
});
