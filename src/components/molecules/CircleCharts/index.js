import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View, Dimensions} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';

const CircleCharts = () => {
  return (
    <View>
      <ProgressChart
        data={{
          labels: ['Swim', 'Bike', 'Run'],

          data: [0.4, 0.6, 0.8],
        }}
        width={Dimensions.get('window').width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: '#171E24',
          backgroundGradientFrom: '#171E24',
          backgroundGradientTo: '#171E24',
          decimalPlaces: false,
          color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(255,255,255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'red',
          },
        }}
        hideLegend={false}
      />
      <Text>Avav Mujtaba</Text>
    </View>
  );
};

export default CircleCharts;

const styles = StyleSheet.create({});
