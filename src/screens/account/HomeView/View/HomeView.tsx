/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * HomeView
 * 22.04.2022
 */


import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StyledText from '../../../../components/StyledText/View/StyledText';

const HomeView = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StyledText title={'home screen'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeView;
