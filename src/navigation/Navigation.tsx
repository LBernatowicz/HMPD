/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './route/AuthStack';
import AccountStack from './route/AccountStack';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth" screenOptions={{headerShown: false}}>
        <Stack.Screen component={AuthStack} name="Auth" />
        <Stack.Screen component={AccountStack} name="Account"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
