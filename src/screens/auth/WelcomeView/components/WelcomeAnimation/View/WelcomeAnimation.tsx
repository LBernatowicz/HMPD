/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

// import lottie section
const pokeball = require('../../../../../../assets/lottie/pokeball.json')

const WelcomeAnimation = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <LottieView source={pokeball} autoPlay style={styles.lottie}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    },
    lottie: {
        transform: [{
            scale: 0.75
        }]
    },
})

export default WelcomeAnimation;
