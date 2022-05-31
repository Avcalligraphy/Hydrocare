/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {
  DummyPhoto,
  DummyProfile,
  IcAddPhoto,
  IcDeletePhoto,
} from '../../assets';
import {Button, Gap, HeaderUpload, Loading} from '../../components';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';
import {storeData} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, email, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(DummyPhoto);
  const [photoForDB, setPhotoForDB] = useState('');
  const [loading, setloading] = useState(false);
  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Oops Spertinya anda tidak memilih photo',
            type: 'default',
            backgroundColor: 'red',
            color: 'white',
          });
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  const uploadAndContinue = () => {
    // setloading(true);
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);
    // setloading(false);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <HeaderUpload />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IcDeletePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IcAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Gap height={15} />
          <Text style={styles.title}>{fullName}</Text>
          <Gap height={1} />
          <Text style={styles.subTitle}>{profession}</Text>
        </View>
        <View>
          <Button title="Upload Photo" onPress={uploadAndContinue} />
          <Gap height={30} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#171E24',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#7D8797',
  },
});
