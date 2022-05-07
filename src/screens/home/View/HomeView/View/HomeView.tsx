
/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchContainer from '../../../../../components/SearchContainer/View/SearchContainer';
import PokemonCard from '../../../components/PokemonCard/View/PokemonCard';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import {getPokemon} from '../../../config/homeApiRequests';

type Props = {
    navigation: any
}

const HomeView = ({navigation}: Props) => {
    const [pokemon, setPokemon] = useState<Array<object>>([])

    const fetchPokemon = async() => {
        const data = await getPokemon()
        setPokemon(data?.data.results)
    }

    useEffect(()=>{
        fetchPokemon()
    },[])

    return (
        <SafeAreaView style={styles.mainContainer}>
                <SearchContainer
                    title={'Pokedex'}
                    subTitle={'Search pokemon from pokedex or something what ever you want from pokemon world'}
                    placeholder={'Search your pokemon'}
                />
            <ScrollView
                style={styles.scrollViewContainer}
                showsVerticalScrollIndicator={false}
            >
                {/*todo: change map to FlatList component*/}
                {pokemon.map((item: any, index: number) => {
                    return <PokemonCard
                        title={item.name}
                        pokemonIndex={index + 1}
                        navigation={navigation}
                    />
                })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.white
    },
    scrollViewContainer:{
        top:'20%',
        paddingVertical: '10%',
        flex:1,

    }
})

export default HomeView;
