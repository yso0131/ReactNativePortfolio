import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CircleButton from '../components/CircleButton';

export default function GetStock(props) {
  const { navigation } = props;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>購入銘柄</Text>
        </View>
        <KeyboardAvoidingView style={styles.stockDetail}>
          <TextInput
            value=""
            placeholder="株名"/>
          <TextInput
            value=""
            placeholder="株数"/>
          <TextInput
            value=""
            placeholder="購入額"/>
        </KeyboardAvoidingView>
        <View>
          <CircleButton
            style={{ position: 'absolute', right: -100, bottom: -300 }}
            onPress={() => { navigation.navigate('Home'); }}
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
    // flex: 1,
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
