/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import SearchContainer from '../../../../../components/SearchContainer/View/SearchContainer';
import PokemonCard from '../../../components/PokemonCard/View/PokemonCard';

const HomeView = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
                <SearchContainer
                    title={'Pokedex'}
                    subTitle={'Search pokemon from pokedex or something what ever you want from pokemon world'}
                    placeholder={'Search your pokemon'}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
    }
})

export default HomeView;
