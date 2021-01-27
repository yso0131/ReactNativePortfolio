import React from 'react';
import { StyleSheet , View , Text , TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
import { PieChart } from "react-native-chart-kit";
import CircleButton from '../components/CircleButton';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = [
    {
      name: "バンガードS&P500",
      population: 200000,
      color: "hsla(0, 100%,　50%, .5)",
      legendFontColor: "#d7d7d7", // ラベルの色
      legendFontSize: 10 // ラベルサイズ 
    },//populationは計算して割合を算出
    {
        name: "Bitcoin",
        population: 50000,
        color: "hsla(100, 40%, 10%, 1)",
        legendFontColor: "#d7d7d7", // ラベルの色
        legendFontSize: 10 // ラベルサイズ 
      },
      {
        name: "貯金",
        population: 50000,
        color: "hsla(0, 0%, 20%, 1)",
        legendFontColor: "#d7d7d7", // ラベルの色
        legendFontSize: 10 // ラベルサイズ 
      },
      {
        name: "イーサリアム",
        population: 120000,
        color: "hsla(0, 0%, 50%, 1)",
        legendFontColor: "#d7d7d7", // ラベルの色
        legendFontSize: 10 // ラベルサイズ 
      },
];

const chartConfig = {
    backgroundGradientFrom: "green",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "green",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => "white",
  };



class Main extends React.Component {
    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.appBar}>
                    <View style={styles.appBarPrice}>
                        <Text>xxxxxx円</Text>
                    </View>
                </View>
                <View>
                    <PieChart style={styles.PieChartText}
                        data={data}
                        width={windowWidth * 1}
                        height={windowHeight/2.5}
                        chartConfig={chartConfig}
                        accessor="population"
                        bgColor="transparent"
                        paddingLeft={45}
                        // absolute
                    />
                </View>
                <View>
                    <CircleButton>
                        購入
                    </CircleButton>
                </View>
                <View>
                    <Text>銘柄一覧</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appBar: {
        width: '100%',
    },
    PieChartText: {
        fontSize: 30,
    },
    appBarPrice: {
    },
    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#94d6da',
        //下デフォルト設定
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Main;