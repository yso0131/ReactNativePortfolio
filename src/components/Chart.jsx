import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
// import firebase from 'firebase';
import { PieChart } from 'react-native-chart-kit';
import {
  shape, string, instanceOf, arrayOf, number,
} from 'prop-types';
import CircleButton from './CircleButton';
// import Culuculate from './Culuculate';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0,
  color: () => 'white',
};

export default function Chart(props) {
  const { memos } = props;
  const datas = memos;
  let data1 = datas.map((memo) => memo.name);
  console.log(data1);

  const amounts = datas.map((money) => money.population);
  const total = amounts.reduce((sum, element) => sum + element, 0);

  const data = [
    {
      name: 'aaaa',
      population: 9000,
      color: 'hsla(0, 100%,　50%, .5)',
      legendFontColor: 'black', // ラベルの色
      legendFontSize: 8, // ラベルサイズ
    }, //  populationは計算して割合を算出
  ];
  const navigation = useNavigation();
  return (
  // eslint-disable-next-line react/jsx-filename-extension
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line react/jsx-filename-extension
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarPrice}>
          <Text style={styles.priceBar}>
            {total.toString()}
            円
          </Text>
        </View>
      </View>
      <View>
        <PieChart
          data={data}
          width={windowWidth * 1}
          height={windowHeight / 2.5}
          chartConfig={chartConfig}
          accessor="population"
          bgColor="transparent"
          paddingLeft={35}
        />
      </View>
      <View style={styles.inner}>
        <CircleButton
          style={{ marginTop: 10, width: '70%', paddingVertical: 24 }}
          onPress={() => { navigation.navigate('GetStock'); }}
        >
          購入
        </CircleButton>
        <CircleButton
          style={{ marginTop: 30, width: '70%', paddingVertical: 24 }}
          onPress={() => { navigation.navigate('Sell'); }}
        >
          売却＆調整
        </CircleButton>
      </View>
    </View>
  );
}
Chart.propTypes = {
  memos: arrayOf(shape({
    id: string,
    name: string,
    stockAmount: number,
    population: number,
    updatedAt: instanceOf(Date),
  })).isRequired,
};
const styles = StyleSheet.create({
  appBar: {
    width: '100%',
  },
  priceBar: {
    fontSize: 48,
    marginTop: -100,
  },
  PieChartText: {
    fontSize: 300,
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    // 下デフォルト設定
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 200,
    alignItems: 'center',
  },
});
