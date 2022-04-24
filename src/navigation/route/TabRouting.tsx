/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add tab routing
 * 23.04.2022
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './stack/HomeStack';
import PokedexStack from './stack/PokedexStack';
import FightStack from './stack/FightStack';

const TabRouting = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
        >
            <Tab.Screen name={'Pokedex'} component={PokedexStack}/>
            <Tab.Screen name={'Home'} component={HomeStack}/>
            <Tab.Screen name={'Fight'} component={FightStack}/>
        </Tab.Navigator>
    )
}

export default TabRouting;
