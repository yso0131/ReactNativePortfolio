import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

export default function Culuculate() {
  const [population, setPopulation] = useState();

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection('/users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos');
    const unsubscribe = ref.onSnapshot((doc) => {
      const data = doc.data();
      setPopulation({
        population: data.population,
      });
    });
    return unsubscribe;
  });
  return (
    <Text>{population}</Text>
  );
}
