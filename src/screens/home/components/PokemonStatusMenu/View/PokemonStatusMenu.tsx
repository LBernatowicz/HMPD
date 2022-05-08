/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import LineGraph from '../../../../../components/LineGraph/View/LineGraph';
import {GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import {handlePokemonSecondColor, handleStatesArray} from '../../../../../helpers/helpersFunction';

type Props = {
    pokemonType: string
    pokemonDetails: any
}

const PokemonStatusMenu = ({pokemonType, pokemonDetails}: Props) => {
    const [pokemonStats, setPokemonStats] = useState<Array<object>>([])

    useEffect(() => {
        setPokemonStats(handleStatesArray(pokemonDetails.stats))
    }, [])

    return (
        <View style={styles.mainContainer}>
            {pokemonStats &&
            pokemonStats.map(([item]: any) => {
                return <LineGraph
                            progress={(item.value/150)}
                            title={item.name.toUpperCase()}
                            fSize={GLOBAL_FONTSIZES.info}
                            fOpacity={1}
                            shortTitle={item.value}
                            shortFOpacity={1}
                            fColor={handlePokemonSecondColor(pokemonType)}
                            shortFColor={handlePokemonSecondColor(pokemonType)}
                            barColor={handlePokemonSecondColor(pokemonType)}
                />
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center'
    }
})

export default PokemonStatusMenu;
