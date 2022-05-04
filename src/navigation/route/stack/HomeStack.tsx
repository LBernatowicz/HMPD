/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * AccountStack
 * 22.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokemonDetailsView from '../../../screens/home/View/PokemonDetailsView/View/PokemonDetailsView';
import TabRouting from '../TabRouting';

const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="Tab"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={'Tab'} component={TabRouting}/>
            <Stack.Screen name={'PokemonDetails'} component={PokemonDetailsView} />
        </Stack.Navigator>
    )
}

export default HomeStack;
