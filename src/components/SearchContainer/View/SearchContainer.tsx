/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * HomeView
 * 26.04.2022
 */


import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';
import StyledInput from '../../StyledInput/View/StyledInput';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../ui/fonts/fonts';
import hairlineWidth = StyleSheet.hairlineWidth;
import GLOBAL_COLORS from '../../../ui/colors/colors';

const BackgroundPokeball = require('../../../assets/pictures/pokeball-background.png')

type Props = {
    title: string;
    subTitle: string;
    placeholder?: string;
}

const SearchContainer = ({title, subTitle, placeholder}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchContainer}>
                <View style={styles.imageContainer}>
                    <Image source={BackgroundPokeball} style={styles.image}/>
                </View>
                <StyledText title={title} fSize={GLOBAL_FONTSIZES.title} font={GLOBAL_FONTS.ROBOTO_BOLD}/>
                <StyledText title={subTitle} fSize={GLOBAL_FONTSIZES.info}/>
                <StyledInput
                    labelColor={GLOBAL_COLORS.fourth}
                    inputStyle={styles.inputStyle}
                    title={placeholder}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: GLOBAL_COLORS.fourth,
        position: 'absolute',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        height: '30%',
        justifyContent: 'flex-end'
    },
    searchContainer: {
        marginHorizontal: 10,
    },
    imageContainer: {
      right: -100,
      top: -30,
      position: 'absolute',
      width: 200,
      height: 200,
    },
    image: {
        width: 200,
        height: 200,
    },
    inputStyle: {
        borderWidth: hairlineWidth,
        width: '100%',
        height: 50,
        backgroundColor: GLOBAL_COLORS.white,
        color: GLOBAL_COLORS.primary,
        paddingHorizontal:10,
        borderRadius:10,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.info
    }
})

export default SearchContainer;
