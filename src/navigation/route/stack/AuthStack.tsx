/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeView from '../../../screens/auth/View/WelcomeView/view/WelcomeView';
import LoginView from '../../../screens/auth/View/LoginView /View/LoginView';
import CreateAccountView from '../../../screens/auth/View/CreateAccountView/View/CreateAccountView';

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="WelcomeView"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'WelcomeView'} component={WelcomeView} />
      <Stack.Group screenOptions={{ presentation: 'modal', gestureEnabled: false }}>
        <Stack.Screen name={'Login'} component={LoginView} />
        <Stack.Screen name={'CreateAccount'} component={CreateAccountView} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
