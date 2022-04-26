/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokemonCard
 * 26.04.2022
 */


import React from 'react';
import {View, StyleSheet } from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';

const PokemonCard = () => {
    return(
        <View style={styles.mainContainer}>
            <StyledText title={'asdasdasdas'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default PokemonCard;
