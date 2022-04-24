/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add Drawer bar
 * 25.04.2022
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabRouting from './TabRouting';
const DrawerRouting = () => {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator
            initialRouteName={'Tab'}
            screenOptions={{headerShown: false}}
        >
            <Drawer.Screen name={'Tab'} component={TabRouting}/>
        </Drawer.Navigator>
    )
}
export default DrawerRouting;
