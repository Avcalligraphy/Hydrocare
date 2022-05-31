import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react/cjs/react.development';
import {Button, HeaderUpload, Input, Link, Loading} from '../../components';
import {Gap} from '../../components';
import {Fire} from '../../config';
import {storeData, useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setloading] = useState(false);
  const onContinue = () => {
    console.log(form);
    setloading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setloading(false);
        setForm('reset');
        Fire.database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user:', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('Home');
            }
          });
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
          <Text style={styles.title}>Sign In</Text>
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
          <Gap height={24} />
          <Button title="Sign In" onPress={onContinue} />
          <Gap height={10} />
          <Link
            value="Create New Account"
            onPress={() => navigation.navigate('SignUp')}
          />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171E24',
    paddingTop: 40,
    paddingHorizontal: 24,
    // height: 1000,
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
