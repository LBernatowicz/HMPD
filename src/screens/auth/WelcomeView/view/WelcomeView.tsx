/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

//import library section
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

// import component and interfaces section
import {GLOBAL_COLORS} from '../../../../ui/colors/colors';
import TitleContainer from '../components/TitleContainer/View/TitleContainer';
import WelcomeAnimation from '../components/WelcomeAnimation/View/WelcomeAnimation';
import LoginContainer from '../components/LoginContainer/View/LoginContainer';



const WelcomeView = () => {
    return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <TitleContainer/>
                </View>
                <View style={styles.lottieContainer}>
                    <WelcomeAnimation/>
                </View>
                <View style={styles.loginContainer}>
                    <LoginContainer/>
                </View>
            </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.primary
    },
    headerContainer: {
        flex:1
    },
    lottieContainer: {
        flex:4,
        padding: 20,
    },
    loginContainer: {
        flex:1,
    }
})

export default WelcomeView;
