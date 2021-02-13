import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import CircleButton from '../components/CircleButton';
// import firebase from 'firebase';

export default function Empty(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>追加完了</Text>
      <View style={styles.inner}>
        <CircleButton
          style={styles.fixButton}
          onPress={() => { navigation.navigate('GetStock'); }}
        >
          続けて購入
        </CircleButton>
        <CircleButton
          style={styles.fixButton}
          onPress={() => { navigation.navigate('Home'); }}
        >
          HOMEへ戻る
        </CircleButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  inner: {
    width: '70%',
    alignItems: 'center',
    marginTop: 32,
  },
  fixButton: {
    width: '70%',
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 16,
  },
});
