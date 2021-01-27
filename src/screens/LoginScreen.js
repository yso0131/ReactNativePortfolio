import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import CircleButton from '../components/CircleButton';
//import firebase from 'firebase';
//import { NavigationActions, StackActions } from 'react-navigation';


class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text　style={styles.title}>
                    ログイン
                </Text>
                <TextInput style={styles.input}
                value="" placeholder="Email Adress" />
                <TextInput style={styles.input}
                value="" placeholder="Password"
                 secureTextEntry />

                <CircleButton style={{ 
                        fontSize: 16, 
                        height: 48, 
                        borderRadius: 4, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '70%',
                        alignSelf: 'center',
                        marginBottom: 24,
                        }} onPress={() => { Alert.alert('Pressed!');}}>
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
                        }} onPress={() => { Alert.alert('Pressed!');}}>
                        メンバー登録する
                    </CircleButton>
                
                <View style={styles.signupMenu}>
                    <Text>Not Registerd?</Text>
                    <TouchableOpacity>
                        <Text>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#94d6da',
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

export default LoginScreen;
