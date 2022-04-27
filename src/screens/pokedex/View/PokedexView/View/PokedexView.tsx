/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */


import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';

const PokedexView = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <StyledText title={'Pokedex screen'}/>
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

export default PokedexView;
