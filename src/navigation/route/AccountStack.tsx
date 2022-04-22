/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * AccountStack
 * 22.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from '../../screens/account/HomeView/View/HomeView';

const AccountStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="HomeView"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={'HomeView'} component={HomeView}/>
        </Stack.Navigator>
    )
}

export default AccountStack;
