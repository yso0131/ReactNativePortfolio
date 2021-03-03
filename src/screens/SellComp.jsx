import React, { useState } from 'react';
import { shape, string, number } from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import KeyboardSafeView from '../components/KeyboadSafeView';
import CircleButton from '../components/CircleButton';

export default function SellComp(props) {
  const { navigation, route } = props;
  const {
    id, name, stockAmount, population,
  } = route.params;
  const [stockAm, setStockAm] = useState(stockAmount.toString());
  const [popula, setPopula] = useState(population.toString());

  function handlePressEdit() {
    const db = firebase.firestore();
    const ref = db.collection('users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos').doc(id);
    ref.set({
      name,
      stockAmount: stockAm,
      population: popula,
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  function handlePress() { // deleteの処理に変更
    const db = firebase.firestore();
    const ref = db.collection('users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos');// user毎の情報を受け取れる
    ref.add({
      stockAmount: toString(),
      population: toString(),
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.navigate('SoldOut');
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  return (
    <KeyboardSafeView
      style={styles.stockDetail}
      bahavior="position"
    >
      <View>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.StockName}>{name}</Text>
          </View>
          <TextInput
            style={styles.inputText}
            value={stockAm}
            keyboardType="numeric"
            placeholder="変更後の株数"
            onChangeText={(text) => {
              const elvalue = Number(text);
              setStockAm(elvalue);
            }}
          />
          <TextInput
            style={styles.inputText}
            value={popula}
            keyboardType="numeric"
            placeholder="変更後の売却額"
            onChangeText={(text) => {
              const value1 = Number(text);
              setPopula(value1);
            }}
          />
          <View>
            <CircleButton
              style={styles.fixButton}
              onPress={handlePressEdit}
            >
              編集
            </CircleButton>
            <CircleButton
              style={styles.secButton}
              onPress={handlePress}
            >
              すべて売却
            </CircleButton>
          </View>
        </View>
      </View>
    </KeyboardSafeView>

  );
}

SellComp.propTypes = {
  route: shape({
    params: shape({
      id: string, name: string, stockAmount: number, population: number,
    }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 30,
    alignItems: 'center',
  },
  stockDetail: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    position: 'relative',
    flex: 1,
    // paddingTop: 50,
    // backgroundColor: 'black',
    // position: 'absolute',
    marginBottom: 0,
  },
  StockName: {
    fontWeight: 'bold',
    fontSize: 32,
    alignItems: 'center',
    color: '#3b3b3b',
  },
  inputText: {
    fontSize: 24,
  },
  fixButton: {
    position: 'absolute',
    right: -100,
    bottom: -80,
    width: '70%',
    paddingVertical: 24,
  },
  secButton: {
    position: 'absolute',
    right: 0,
    bottom: -150,
    width: '100%',
    paddingVertical: 24,
  },
});
