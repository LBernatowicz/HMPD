/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import PokemonInformationText from '../components/PokemonInformationText/View/PokemonInformationText';
import PokemonInformationEvo from '../components/PokemonInformationEvo/View/PokemonInformationEvo';

type Props = {
    pokemonType: string;
    pokemonIndex: number | string;
}

const PokemonAboutMenu = ({pokemonType, pokemonIndex}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <PokemonInformationText pokemonType={pokemonType}/>
            <PokemonInformationEvo pokemonType={pokemonType} pokemonIndex={pokemonIndex}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
    }
})

export default PokemonAboutMenu;
