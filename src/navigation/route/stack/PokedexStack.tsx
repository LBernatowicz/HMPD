/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * AccountStack
 * 25.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokedexView from '../../../screens/pokedex/View/PokedexView/View/PokedexView';

const PokedexStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="PokedexView"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={'PokedexView'} component={PokedexView}/>
        </Stack.Navigator>
    )
}

export default PokedexStack;
