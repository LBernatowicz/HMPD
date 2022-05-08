/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';

import {
    handlePokemonFirstColor,
    handlePokemonMoves, handlePokemonSecondColor,
} from '../../../../../helpers/helpersFunction';
import PokeballButton from '../../../../../components/PokebalButton/View/PokeballButton';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import StyledText from '../../../../../components/StyledText/View/StyledText';

type Props = {
    pokemonType: string;
    pokemonDetails: any;
}

const PokemonMovesMenu = ({pokemonType, pokemonDetails}: Props) => {
    const [pokemonMoves, setPokemonMoves] = useState<Array<object>>([])
    useEffect(() => {
      setPokemonMoves(handlePokemonMoves(pokemonDetails.moves));
      console.log(handlePokemonMoves(pokemonDetails.moves).map(([item]: any) => item.name))
    },[])

    const renderItem = ({ item }: any) => (
        <View style={[styles.moves, {backgroundColor:handlePokemonSecondColor(pokemonType)}]}>
                    <StyledText
                        title={item.name.toUpperCase()}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fSize={GLOBAL_FONTSIZES.description}
                        fColor={handlePokemonFirstColor(pokemonType)}
                     />
                 </View>
    );

    return (
        <View style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.movesContainer}>
                {pokemonMoves &&
                    <FlatList
                        data={pokemonMoves}
                        renderItem={renderItem}
                        keyExtractor={(pokemonDetails.moves).map(([item]: any) => item.name)}
                    />
                    // pokemonMoves.map(([item]: any) => {
                    //     return <View style={[styles.moves, {backgroundColor:handlePokemonSecondColor(pokemonType)}]}>
                    //         <StyledText
                    //             title={item.name.toUpperCase()}
                    //             font={GLOBAL_FONTS.ROBOTO_BOLD}
                    //             fSize={GLOBAL_FONTSIZES.description}
                    //             fColor={handlePokemonFirstColor(pokemonType)}
                    //         />
                    //     </View>
                    }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    movesContainer: {
        width: '90%',
    },
    moves: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 10,
    }
})

export default PokemonMovesMenu;
