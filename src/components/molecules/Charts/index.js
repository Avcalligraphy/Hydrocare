import React from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {StyleSheet, Text} from 'react-native';

const Charts = () => {
  return (
    <View style={styles.lineCharts}>
      <LineChart
        data={{
          labels: ['12:00', '13:00', '14:00', '15:00', '16:00'],
          datasets: [
            {
              data: [0, 0.75, 1, 0.25, 0.5],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={320}
        // yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#171E24',
          backgroundGradientFrom: '#171E24',
          backgroundGradientTo: '#171E24',
          decimalPlaces: 2,
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
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  lineCharts: {
    marginTop: 20,
  },
});
