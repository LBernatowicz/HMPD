/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add tab routing
 * 23.04.2022
 */

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';

const image = require('../../../../../assets/pictures/pokedex-icon-13.png')

type Props = {
    focused: boolean; // what happened when button will press
}

const PokedexTabButton = ({focused}: Props) => {
    return (
        <View style={styles.mainContainer}>
            {focused ? <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image}/>
                </View>
                :
                <Image source={image} style={styles.image}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        top: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        bottom: 5,
        backgroundColor:GLOBAL_COLORS.third,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
    }
})

export default PokedexTabButton
