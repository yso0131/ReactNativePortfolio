/* eslint-disable indent */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import CircleButton from '../components/CircleButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  {
    name: 'バンガードS&P500',
    population: 200000,
    color: 'hsla(0, 100%,　50%, .5)',
    legendFontColor: '#d7d7d7', // ラベルの色
    legendFontSize: 10, // ラベルサイズ
  }, //  populationは計算して割合を算出
  {
    name: 'Bitcoin',
    population: 50000,
    color: 'hsla(100, 40%, 10%, 1)',
    legendFontColor: '#d7d7d7', // ラベルの色
    legendFontSize: 10, // ラベルサイズ
  },
  {
    name: '貯金',
    population: 50000,
    color: 'hsla(0, 0%, 20%, 1)',
    legendFontColor: '#d7d7d7', // ラベルの色
    legendFontSize: 10, // ラベルサイズ
  },
  {
    name: 'イーサリアム',
    population: 120000,
    color: 'hsla(0, 0%, 50%, 1)',
    legendFontColor: '#d7d7d7', // ラベルの色
    legendFontSize: 10, // ラベルサイズ
  },
];

const chartConfig = {
  backgroundGradientFrom: 'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'white',
  backgroundGradientToOpacity: 0,
  color: () => 'white',
};

export default function Main(props) {
  const { navigation } = props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      // eslint-disable-next-line no-use-before-define
      // eslint-disable-next-line react/jsx-filename-extension
      <View style={styles.container}>
        <View style={styles.appBar}>
          <View style={styles.appBarPrice}>
            <Text style={styles.priceBar}>xxxxxx円</Text>
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
            paddingLeft={45}
          />
        </View>
        <View>
          <CircleButton
            onPress={() => { navigation.navigate('GetStock'); }}>
            購入
          </CircleButton>
        </View>
        <View>
          <CircleButton
            style={{ marginTop: 30, width: 100}}
            onPress={() => { navigation.navigate('ViewStock'); }}
            >
          価格変動
        </CircleButton>
        </View>
      </View>
        );
    }

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
});
