import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import KeyboardSafeView from '../components/KeyboadSafeView';
import CircleButton from '../components/CircleButton';

export default function GetStock(props) {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [population, setPopulation] = useState('');

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memos`);// user毎の情報を受け取れる
    ref.add({
      name,
      stockAmount,
      population,
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.navigate('BuyOut');
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
            <Text style={styles.titleText}>購入銘柄</Text>
          </View>
          <TextInput
            style={styles.inputText}
            value={name}
            placeholder="株名"
            onChangeText={(text) => { setName(text); }}
            autoFocus
          />
          <TextInput
            style={styles.inputText}
            value={stockAmount}
            keyboardType="numeric"
            placeholder="株数"
            onChangeText={(text) => {
              const value = Number(text);
              setStockAmount(value);
            }}
          />
          <TextInput
            style={styles.inputText}
            value={population}
            keyboardType="numeric"
            placeholder="購入額"
            onChangeText={(text) => {
              const value1 = Number(text);
              setPopulation(value1);
            }}
          />
          <View>
            <CircleButton
              style={styles.fixButton}
              onPress={handlePress}
            >
              購入
            </CircleButton>
          </View>
        </View>
      </View>
    </KeyboardSafeView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginBottom: 30,
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  inputText: {
    fontSize: 24,
  },
  fixButton: {
    position: 'absolute',
    right: -100,
    bottom: -200,
    width: '70%',
    paddingVertical: 24,
  },
});
