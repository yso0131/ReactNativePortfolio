import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Main from './src/screens/Main';
import ViewStock from './src/screens/ViewStock';
import GetStock from './src/screens/GetStock';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStock"
        screenOptions={{
          headerStyle: { backgroundColor: '#c0c0c0' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Assests',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // androidの画面遷移を横にスライド
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="ViewStock" component={ViewStock} />
        <Stack.Screen name="GetStock" component={GetStock} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
