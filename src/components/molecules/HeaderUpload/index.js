import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcArrowWhite} from '../../../assets';

const HeaderUpload = () => {
  return (
    <View style={styles.container}>
      <View style={styles.arrow}>
        <IcArrowWhite />
      </View>
      <View style={styles.title}>
        <Text style={styles.subTitle}>Upload Photo</Text>
      </View>
    </View>
  );
};

export default HeaderUpload;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    padding: 4,
  },
  title: {
    flex: 1,
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: 'white',
  },
});
