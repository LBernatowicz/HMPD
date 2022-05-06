
/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ContainerHeader from '../../../../../components/ContainerHeader/View/ContainerHeader';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import PokemonDetailsImage from '../../../components/PokemonDetailsImage/View/PokemonDetailsImage';
import PokemonDetailsMenu from '../../../components/PokemonDetailsMenu/View/PokemonDetailsMenu';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    navigation: any
}

const PokemonDetailsView = ({navigation}: Props) => {
    return (
        <LinearGradient colors={[GLOBAL_COLORS.leafFirst, GLOBAL_COLORS.leafSecond]} style={styles.mainContainer}>
                <ContainerHeader
                    title={'BULBAZAUR'}
                    font={GLOBAL_FONTS.ROBOTO_BOLD}
                    fSize={GLOBAL_FONTSIZES.header}
                    fColor={GLOBAL_COLORS.primary}
                    fOpacity={0.5}
                    navigation={navigation}
                />
                <View style={styles.pokemonImageContainer}>
                    <PokemonDetailsImage/>
                </View>
            <View style={styles.pokemonMenuContainer}>
                <PokemonDetailsMenu/>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.white
    },
    pokemonImageContainer: {
        flex:4,
    },
    pokemonMenuContainer: {
        flex:5,
    }
})

export default PokemonDetailsView;
