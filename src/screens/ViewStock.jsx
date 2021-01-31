import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
// import { Circle } from 'react-native-svg';
import CircleButton from '../components/CircleButton';

export default function ViewStock() {
    return (
      <View style={styles.container}>
              <View style={styles.title}>
                  <Text style={styles.titleText}>銘柄一覧</Text>
                </View>
              <View>
                  <View style={styles.view}>
                      <Text>銘柄</Text>
                      <Text>株数</Text>
                      <Text>金額</Text>
                      <Text>日付</Text>
                    </View>
                </View>
              <ScrollView>
                  <View style={styles.view}>
                      <Text>バンガードS&P500</Text>
                      <Text>3</Text>
                      <Text>15000円</Text>
                      <Text>2021/1/15</Text>
                    </View>
                  <View style={styles.view}>
                      <Text>仮想通貨</Text>
                      <Text>10</Text>
                      <Text>10000円</Text>
                      <Text>2021/1/31</Text>
                    </View>
                </ScrollView>
              <CircleButton style={{ width: '50%', height: 30, }}>削除
                </CircleButton>
            </View>
    )
  };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  inner: {
    alignItems: 'flex-start',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 20,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  view: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderStyle: 'solid',
  },
});
