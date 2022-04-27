/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * AccountStack
 * 25.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FightView from '../../../screens/fight/View/FightView/View/FightView';

const FightStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="FightView"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={'FightView'} component={FightView}/>
        </Stack.Navigator>
    )
}

export default FightView;
