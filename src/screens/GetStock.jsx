import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
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
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>購入銘柄</Text>
        </View>
        <KeyboardAvoidingView style={styles.stockDetail}>
          <TextInput
            value={name}
            placeholder="株名"
            onChangeText={(text) => { setName(text); }}
            autoFocus
            />
          <TextInput
            value={stockAmount}
            placeholder="株数"
            onChangeText={(text) => { setStockAmount(text); }}
            />
          <TextInput
            value={population}
            placeholder="購入額"
            onChangeText={(text) => { setPopulation(text); }}
            />
        </KeyboardAvoidingView>
        <View>
          <CircleButton
            style={{
              position: 'absolute',
              right: -100,
              bottom: -300,
            }}
            onPress={handlePress}
         >
            購入
          </CircleButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 60,
    position: 'relative',
  },
  stockDetail: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 50,
    // backgroundColor: 'black',
    position: 'absolute',
    marginBottom: 0,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
