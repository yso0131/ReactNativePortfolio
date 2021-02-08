import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
// import firebase from 'firebase';
// import { NavigationActions, StackActions } from 'react-navigation';
// eslint-disable-next-line react/prefer-stateless-function
export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }
    });
    return unsubscribe;
  }, []);
  function handlePress() {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  }

  return (
    <View style={styles.container}>
        <Text　style={styles.title}>
                    ログイン
                </Text>
                <TextInput style={styles.input}
                value={email}
                onChangeText={(text) => { setEmail(text); }}
                placeholder="Email Adress"
                autoCapitalize='none'
                keyboardType="email-address"
                textContentType="emailAddress"
                />
                <TextInput style={styles.input}
                value={password}
                onChangeText={(text) => { setPassword(text); }}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                />

                <CircleButton 
                    label="Submit"
                        style={{ 
                        fontSize: 16, 
                        height: 48, 
                        borderRadius: 4, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '70%',
                        alignSelf: 'center',
                        marginBottom: 24,
                        }} onPress={handlePress}>
                    ログインする
                </CircleButton>

                
                <CircleButton style={{ 
                        fontSize: 16, 
                        height: 48, 
                        borderRadius: 4, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '70%',
                        alignSelf: 'center',
                        }} onPress={() => { navigation.navigate('Signup'); }}>
                        メンバー登録する
                    </CircleButton>
                
                <View style={styles.signupMenu}>
                    <Text>Not Registerd?</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('Signup'); }}>
                        <Text>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#f0f0f0',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 8,
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        paddingVertical: 20,
    },
    signupMenu: {
        marginTop: 10,
    },
});
