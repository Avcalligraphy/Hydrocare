/* eslint-disable react/prop-types */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Pie from 'react-native-pie';
import {IcHumidty, IcWatch, IcWater} from '../../../assets';

const TempratureSensor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.circleCharts}>
          <Pie
            radius={37}
            innerRadius={32}
            sections={[
              {
                percentage: 30,
                color: '#3572CE',
              },
            ]}
            backgroundColor="#171E24"
          />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>30</Text>
          </View>
        </View>
        <View style={styles.waterHeader}>
          <View style={styles.waterTitle}>
            <IcHumidty />
            <Text style={styles.waterText}>Temprature</Text>
          </View>
          <Text style={styles.valueWater}>30.1 %</Text>
          <View style={styles.waterTitle2}>
            <IcWatch />
            <Text style={styles.waterWatch}>15:20:10</Text>
          </View>
        </View>
      </View>
      <Text style={styles.standarTitle}>Standar</Text>
      <Text style={styles.valueStandar}>30 - 80 %</Text>
    </View>
  );
};

export default TempratureSensor;

const styles = StyleSheet.create({
  page: {
    marginTop: 24,
    paddingTop: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    width: 230,
    backgroundColor: '#171E24',
    marginLeft: 24,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 24,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
  },
  waterTitle: {
    flexDirection: 'row',
    marginBottom: -2,

    alignItems: 'center',
  },
  waterTitle2: {
    flexDirection: 'row',
    marginTop: -2,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  circleCharts: {
    alignItems: 'center',
    width: 80,
  },
  waterHeader: {
    marginLeft: 15,
    marginTop: 3,
  },
  gauge: {
    position: 'absolute',
    width: 50,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
  },
  waterText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#646D6C',
    marginLeft: 10,
  },
  waterWatch: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#646D6C',
    marginLeft: 10,
  },
  valueWater: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  standarTitle: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#646D6C',
  },
  valueStandar: {
    marginTop: -4,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#E7D000',
  },
});
