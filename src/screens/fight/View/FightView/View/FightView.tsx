/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */


import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';

const FightView = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StyledText title={'Fight screen'}/>
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

export default FightView;
