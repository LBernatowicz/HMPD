/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add tab routing
 * 23.04.2022
 */

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';

const image = require('../../../../../assets/pictures/pokeball.png')

type Props = {
    focused: boolean; // what happened when button will press
}

const HomeTabButton = ({focused}: Props) => {
    return (
        <View style={[styles.mainContainer, {backgroundColor: focused ? GLOBAL_COLORS.third : GLOBAL_COLORS.fourth}]}>
            <Image source={image} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: 70, height: 70, borderRadius: 35, bottom: '40%', justifyContent: 'center',alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
    }
})

export default HomeTabButton
