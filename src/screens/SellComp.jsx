import React, { useState, useEffect } from 'react';
import { shape, string } from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import firebase from 'firebase';
import KeyboardSafeView from '../components/KeyboadSafeView';
import CircleButton from '../components/CircleButton';

export default function SellComp(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [memo, setMemo] = useState(null);
  // const [name, setName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [population, setPopulation] = useState('');

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('/users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos').doc(id);
    const unsubscribe = ref.onSnapshot((doc) => {
      console.log(doc.id, doc.data());
      const data = doc.data();
      setMemo({
        id: doc.id,
        name: data.name,
        stockAmount: data.stockAmount,
        population: data.population,
        updatedAt: data.updatedAt.toDate(),
      });
    });
    return unsubscribe;
  }, []);

  function handlePress() { // deleteの処理に変更
    const db = firebase.firestore();
    const ref = db.collection('users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos');// user毎の情報を受け取れる
    ref.add({
      stockAmount,
      population,
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
            <Text style={styles.titleText}>売却</Text>
            <Text style={styles.StockName}>{memo && memo.name}</Text>
          </View>
          <TextInput
            style={styles.inputText}
            value={stockAmount}
            keyboardType="numeric"
            placeholder="株数"
            onChangeText={(text) => { setStockAmount(text); }}
          />
          <TextInput
            style={styles.inputText}
            value={population}
            keyboardType="numeric"
            placeholder="売却額"
            onChangeText={(text) => { setPopulation(text); }}
          />
          <View>
            <CircleButton
              style={styles.fixButton}
              onPress={handlePress}
            >
              売却
            </CircleButton>
          </View>
        </View>
      </View>
    </KeyboardSafeView>

  );
}

SellComp.propTypes = {
  route: shape({
    params: shape({ id: string }),
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  StockName: {
    fontWeight: 'bold',
    fontSize: 24,
    alignItems: 'center',
    color: '#3b3b3b',
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
