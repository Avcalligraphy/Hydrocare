import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react/cjs/react.development';
import {DummyPhoto, IcMenu} from '../../../assets';
import {Fire} from '../../../config';
import {getData} from '../../../utils';

const Header = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: DummyPhoto,
    fullName: '',
    profession: '',
  });

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        navigation.replace('SplashScreen');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      });
  };

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? {uri: res.photo} : DummyPhoto;
      // console.log('data: ', res);
      setProfile(res);
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={profile.photo} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.headerText}>{profile.fullName}</Text>
          <Text style={styles.headerValue}>{profile.profession}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={signOut}>
        <IcMenu />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  text: {
    marginLeft: 12,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: -2,
    textTransform: 'capitalize',
  },
  headerValue: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#ADA5A5',
    marginTop: -2,
  },
});
