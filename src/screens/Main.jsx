/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import {
  Alert,
} from 'react-native';
import firebase from 'firebase';
// import { useIsFocused } from '@react-navigation/native';
import Chart from '../components/Chart';
import LogoutButton from '../components/LogoutButton';

export default function Main(props) {
  // const isFocused = useIsFocused();
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
  });
  }, []);
  useEffect(() => {
    const currentUser = firebase.auth();
    const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      ref.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          });
      });
    }, []);

    return (
      <Chart />
        );
    }
