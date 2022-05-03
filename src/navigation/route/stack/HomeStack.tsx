/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * AccountStack
 * 22.04.2022
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from '../../../screens/home/View/HomeView/View/HomeView';
import PokemonDetailsView from '../../../screens/home/View/PokemonDetailsView/View/PokemonDetailsView';

const HomeStack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="HomeView"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name={'HomeView'} component={HomeView}/>
            <Stack.Screen name={'PokemonDetails'} component={PokemonDetailsView}/>
        </Stack.Navigator>
    )
}

export default HomeStack;
