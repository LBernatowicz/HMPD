
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
import {getPokemon} from '../../../config/homeApiRequests';
import {getData} from '../../../../../config/apiRequests';
import {POKEMON} from '../../../../../config/axiosInstances';


const HomeView = () => {
    const [pokemon, setPokemon] = useState<Array<object>>([])

    const fetchUser = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon`;
        await axios.get(url)
            .then(resp => {
                if (resp.status === 200)
                {
                    setPokemon(resp.data.results)
                } else {console.log('bad resp status !== 200')}
            })
            .catch(err => {
                console.log(err)
            })
    };

    useEffect(()=>{
        console.log('getPokemon!@',getPokemon())
        fetchUser()
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
