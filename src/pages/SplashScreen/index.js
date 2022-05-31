/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fire} from '../../config';
import {IcLogo} from '../../assets/icon';
import {DummyLogo, DummyPhoto} from '../../assets/Dummy';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('Home');
        } else {
          navigation.replace('SignIn');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={DummyLogo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171E24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 296,
    width: 229,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
