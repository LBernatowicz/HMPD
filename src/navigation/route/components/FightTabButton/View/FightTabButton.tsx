/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add tab routing
 * 23.04.2022
 */

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';

const image = require('../../../../../assets/pictures/fist.png')

type Props = {
    focused: boolean; // what happened when button will press
}

const FightTabButton = ({focused}: Props) => {
    return (
        <View style={styles.mainContainer}>
            {focused ? <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image}/>
                </View>
                :
                <Image source={image} style={[styles.image, {top:8,}]}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        top: '25%',
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
        width: 35,
        height: 35,
    }
})


export default FightTabButton;
