
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
import axios from 'axios';


const HomeView = () => {
    const [pokemon, setPokemon] = useState<Array<object>>([])

    const fetchUser = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon`;
        const response = await axios.get(url);
        //console.log(response.data.results);
        setPokemon(response.data.results)
    };

    useEffect(()=>{
        fetchUser().then(r => console.log('blad?',r))
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
                {pokemon.map((item: any, index: number) => {
                    return <PokemonCard
                        title={item.name}
                        pokemonIndex={index + 1}
                        pokemonUrl={item.url}
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
