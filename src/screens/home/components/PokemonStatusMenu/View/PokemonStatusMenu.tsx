/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokedexView
 * 22.04.2022
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import LineGraph from '../../../../../components/LineGraph/View/LineGraph';
import {GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';

const PokemonStatusMenu = () => {
    return (
        <View style={styles.mainContainer}>
            <LineGraph
                progress={0.3}
                title={'HP'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
            <LineGraph
                progress={0.3}
                title={'Attack'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
            <LineGraph
                progress={0.3}
                title={'Defence'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
            <LineGraph
                progress={0.3}
                title={'Sp. Atk'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
            <LineGraph
                progress={0.3}
                title={'Sp. Def'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
            <LineGraph
                progress={0.3}
                title={'Speed'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
            <LineGraph
                progress={0.3}
                title={'Total'}
                fSize={GLOBAL_FONTSIZES.info}
                fOpacity={0.5}
                shortTitle={40}
                shortFOpacity={0.5}
                barColor={GLOBAL_COLORS.leafSecond}
            />
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
