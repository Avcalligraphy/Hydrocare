import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, HeaderUpload, Input, Link, Loading} from '../../components';
import {Gap} from '../../components';
import {getData, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setloading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setloading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setloading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: success.user.uid,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        storeData('user', data);
        console.log('register success', success);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        const errorMessage = error.message;
        setloading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      });
    // () => navigation.navigate('UploadPhoto')
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* <HeaderUpload /> */}
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.desc}>
            Enjoy your Activity with Internet of Things
          </Text>
          <Gap height={40} />
          <Input
            label="Email Address"
            value="Your Email"
            grade={form.email}
            onChangeText={grade => setForm('email', grade)}
          />
          <Gap height={18} />
          <Input
            label="Password"
            value="Your Password"
            grade={form.password}
            onChangeText={grade => setForm('password', grade)}
            secureTextEntry
          />
          <Gap height={18} />
          <Input
            label="Profession"
            value="Your Profession"
            grade={form.profession}
            onChangeText={grade => setForm('profession', grade)}
          />
          <Gap height={18} />
          <Input
            label="Username"
            value="Your Username"
            grade={form.fullName}
            onChangeText={grade => setForm('fullName', grade)}
          />
          <Gap height={24} />
          <Button title="Sign Up" onPress={onContinue} />
          <Gap height={15} />
          <Link
            value="Do you have any account"
            onPress={() => navigation.navigate('SignIn')}
          />
          <Gap height={100} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171E24',
    paddingTop: 40,
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    //   flex: 1,
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  desc: {
    color: 'white',
  },
});
