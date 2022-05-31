import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  CardSensor,
  Headers,
  HumidtySensor,
  SoilMoisture,
  ButtonSwitch,
  Gap,
  Charts,
} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Headers />
          <Text style={styles.headerTitle}>Hidroponik Report</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <CardSensor />
            <SoilMoisture />
            <HumidtySensor />
          </ScrollView>
          <View style={styles.switch}>
            <ButtonSwitch title="Fan" icWings />
            <ButtonSwitch title="Tap" icSwitch />
          </View>
          <Gap height={25} />
          <Text style={styles.headerTitle}>Ultrasonic</Text>
          <Charts />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171E24',
    flex: 1,
  },
  headerTitle: {
    color: 'white',
    marginTop: 44,
    marginHorizontal: 24,
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
});
