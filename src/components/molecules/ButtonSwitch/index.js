/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {Gap} from '../..';
import {IcFan, IcFaucet} from '../../../assets';
import {Fire} from '../../../config';

const ButtonSwitch = ({title, icWings, icSwitch}) => {
  const [isSwitchEnabled, setSwitch] = useState(false);
  const [toogle, setToggle] = useState(false);
  const [sensor, setSensor] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('Sensor/' + 'WaterSensor')
      .on('value', data => {
        console.log('Switch:', data.toJSON());
        const int = data.toJSON();
        // const conInt = parseInt(int);
        setSensor(int);
        // if (sensor > 50) {
        //   return true;
        // }
        // setpercentage(conInt);
        // console.log('data 2: ', conInt);
      });
  }, []);
  // const toggler = () => {
  //   if (setSwitch === sensor > 30) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {icWings && <IcFan />}
        {icSwitch && <IcFaucet />}
        <Gap width={10} />
        <Text style={styles.textIcon}>{title}</Text>
      </View>
      <Switch
        value={isSwitchEnabled}
        onValueChange={value => setSwitch(value)}
        thumbColor={isSwitchEnabled ? '#E90909' : 'black'}
        trackColor={{false: 'white', true: 'red'}}
      />
    </View>
  );
};

export default ButtonSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 160,
    justifyContent: 'space-between',
    backgroundColor: '#171E24',
    marginTop: 25,
    borderRadius: 20,
    padding: 11,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    marginTop: 2,
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
});
