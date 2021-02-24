import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

export default function Sell() {
  const navigation = useNavigation();
  const [memos, setMemos] = useState([]);
  function renderItem({ item }) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => { navigation.navigate('SellComp', { id: item.id }); }}
        >
          <Text style={styles.stockText} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    const currentUser = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection('/users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos').orderBy('updatedAt', 'desc');
      // const ref = db.collection(`/users/${currentUser.uid}/memos`);
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            name: data.name,
            stockAmount: data.stockAmount,
            population: data.population,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
      });
    }
    return unsubscribe;
  }, []);
  return (
    <View>
      <View>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>売却一覧</Text>
          </View>
          <View style={styles.stockView}>
            <FlatList
              style={styles.list}
              data={memos}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingBottom: 100,
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
  },
  stockText: {
    fontSize: 32,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
});
