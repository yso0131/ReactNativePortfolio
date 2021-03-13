import React, { useState } from 'react';
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
// import { NavigationActions, StackActions } from 'react-navigation';
export default function SignupScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Sign Up
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => { setEmail(text); }}
        placeholder="Email Adress"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => { setPassword(text); }}
        placeholder="Password"
        secureTextEntry
        keyboardType="default"
        textContentType="password"
      />

      <CircleButton
        style={styles.button}
        onPress={handlePress}
      >
        メンバー登録する
      </CircleButton>
      <Text style={styles.footerText}>
        Already Registerd?
      </Text>
      <TouchableOpacity
        onPress={() => { navigation.navigate('Login'); }}
      >
        <Text style={styles.footerLink}>Log in</Text>
      </TouchableOpacity>

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
    marginBottom: 24,
  },
  button: {
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
  footerText: {
    marginTop: 16,
    alignSelf: 'center',
  },
  footerLink: {
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
  },
});
