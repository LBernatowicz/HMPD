/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add tab routing
 * 23.04.2022
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokedexStack from './stack/PokedexStack';
import FightStack from './stack/FightStack';
import GLOBAL_COLORS from '../../ui/colors/colors';
import PokedexTabButton from './components/PokedexTabButton/View/PokedexTabButton';
import HomeTabButton from './components/HomeTabButton/View/HomeTabButton';
import FightTabButton from './components/FightTabButton/View/FightTabButton';
import HomeView from '../../screens/home/View/HomeView/View/HomeView';


const TabRouting = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="HomeView"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: GLOBAL_COLORS.white,
                    bottom: 30,
                    marginHorizontal: 30,
                    borderRadius: 30,
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowColor: 'black',
                    shadowOpacity: 0.06,

                }
        }}

        >
            <Tab.Screen
                name={'Pokedex'}
                component={PokedexStack}
                options={{
                    tabBarIcon: ({ focused}) => <PokedexTabButton focused={focused}/>
                }}
            />
            <Tab.Screen
                name={'HomeView'}
                component={HomeView}
                options={{
                    tabBarIcon: ({ focused}) => <HomeTabButton focused={focused}/>
                }}
            />
            <Tab.Screen
                name={'Fight'}
                component={FightStack}
                options={{
                    tabBarIcon: ({focused}) => <FightTabButton focused={focused}/>
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRouting;
