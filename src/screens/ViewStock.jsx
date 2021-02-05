import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import CircleButton from '../components/CircleButton';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: 'green',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'green',
  backgroundGradientToOpacity: 0,
  color: () => 'black',
};

export default function ViewStock() {
  const data = {
    labels: ['2021/01', '2021/2', '2021/3', '2021/4', '2021/5'],
    datasets: [
      {
        data: [50, 60, 70, 30],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Assets'], // optional
  };
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
        fromZero={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
});
