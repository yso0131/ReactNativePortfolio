/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import Chart from '../components/Chart';
import LogoutButton from '../components/LogoutButton';

export default function Main(props) {
  // const isFocused = useIsFocused();
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
  });
  }, []);
  useEffect(() => {
    const currentUser = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection('/users/f6fOE3CxiZSxzAbzL1awHgMnetI3/memos');
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
      <Chart memos={memos} />
        );
    }
