/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

// import lottie section
const pokeball = require('../../../../../../assets/pictures/pokeball.png')

const WelcomeAnimation = () => {
    return (
        <View style={styles.mainContainer}>
            <Image source={pokeball} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        transform: [{
            scale: 0.75
        }]
    },
})

export default WelcomeAnimation;
