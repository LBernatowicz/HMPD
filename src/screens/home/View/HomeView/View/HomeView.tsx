/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */


import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import NavBar from '../../../../../components/NavBar/View/NavBar';

const HomeView = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StyledText title={'home screen'} fColor={GLOBAL_COLORS.white}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.primary
    }
})

export default HomeView;
