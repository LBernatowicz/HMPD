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
import GLOBAL_COLORS from '../../ui/colors/colors';
import {View, Image} from 'react-native';


const TabRouting = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Home"
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
                    tabBarIcon: ({focused}) => (
                        <View style={{position: 'absolute', top: '30%', justifyContent: 'center', alignItems: 'center'}}>
                            {focused ? <View style={{height: 60, width: 60, borderRadius: 30, bottom: 5, backgroundColor:GLOBAL_COLORS.third, justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../../assets/pictures/pokedex-icon-13.png')} style={{width: 50, height: 50}}/>
                            </View>
                            :
                                <Image source={require('../../assets/pictures/pokedex-icon-13.png')} style={{width: 50, height: 50}}/>
                            }
                        </View>
                        )
                }}
            />
            <Tab.Screen
                name={'Home'}
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused}) => (
                        <View style={{ width: 70, height: 70, backgroundColor: focused ? GLOBAL_COLORS.third : GLOBAL_COLORS.fourth, borderRadius: 35, bottom: '40%', justifyContent: 'center',alignItems: 'center'}}>
                            <Image source={require('../../assets/pictures/pokeball.png')} style={{width: 70, height: 70}}/>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name={'Fight'}
                component={FightStack}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{position: 'absolute', top: '25%', justifyContent: 'center', alignItems: 'center'}}>
                            {focused ? <View style={{height: 60, width: 60, borderRadius: 30,bottom: 5, backgroundColor:GLOBAL_COLORS.third, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={require('../../assets/pictures/fist.png')} style={{width: 35, height: 35}}/>
                                </View>
                                :
                                <Image source={require('../../assets/pictures/fist.png')} style={{width: 35, height: 35, top: 8,}}/>
                            }
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default TabRouting;
