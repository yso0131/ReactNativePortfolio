import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CircleButton from '../components/CircleButton';
//import firebase from 'firebase';
//import { NavigationActions, StackActions } from 'react-navigation';
export default function SignupScreen() {
        return (
            <View style={styles.container}>
                <Text　style={styles.title}>
                    Sign Up
                </Text>
                <TextInput style={styles.input}
                value="" placeholder="Email Adress" />
                <TextInput style={styles.input}
                value="" placeholder="Password"
                 secureTextEntry />

                <CircleButton style={styles.button} onPress={() => { Alert.alert('Pressed!');}}
                            onPress={() => {navigation.navigate('Signup');}}>
                            >
                    メンバー登録する
                </CircleButton>
                <Text style={styles.footerText}>
                    Already Registerd?
                </Text>
                <TouchableOpacity　>
                    <Text style={styles.footerLink} >Log in</Text>
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
        backgroundColor: '#E31676',
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
    }
});