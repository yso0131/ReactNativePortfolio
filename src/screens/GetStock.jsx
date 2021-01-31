import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import CircleButton from '../components/CircleButton';
// KeyboardAvoidingView,
export default function GetStock() {
  return (
    <View style={styles.container} behavior="height">
      <View style={styles.title}>
        <Text>購入銘柄</Text>
      </View>
      <View style={styles.stockDetail}>
        <TextInput
          value=""
          placeholder="株名"
        />
        <TextInput
          value=""
          placeholder="株数"
        />
        <TextInput
          value=""
          placeholder="購入額"
        />
      </View>
      <View>
        <CircleButton style={{ position: 'absolute', right: -100, bottom: -300 }}>購入</CircleButton>
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
    paddingVertical: 50,
  },
  stockDetail: {
    alignItems: 'flex-start',
    paddingTop: 50,
  },
});
