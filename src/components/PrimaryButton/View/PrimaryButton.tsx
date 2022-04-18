/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 17.04.2022
 */

import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity} from 'react-native';
import colors from '../../../ui/colors/colors';
import GLOBAL_COLORS from '../../../ui/colors/colors';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../ui/fonts/fonts';

type Props = {
    title: string;
    font?: string; // font style from GLOBAL_FONT
    fColor?: string;  // colors form GLOBAL_COLORS
    fSize?: number; // font size from GLOBAL_FONTSIZE
    fOpacity?: number; // font opacity
    externalStyle?: StyleProp<TextStyle> // external font style
    onPress?: ()=>void
}

const PrimaryButton = ({title, font, fColor, fSize, fOpacity, externalStyle, onPress}: Props) => {
    const dynamicStyle = externalStyle
    const dynamicColor = fColor ? fColor : GLOBAL_COLORS.primary
    const dynamicFontSize = fSize ? fSize : GLOBAL_FONTSIZES.header
    const dynamicFont = font ? font : GLOBAL_FONTS.ROBOTO
    const dynamicOpacity = fOpacity ? fOpacity : 1
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonContainer}
        >
            <Text style={[
                dynamicStyle,
                styles.text,
                {
                    color: dynamicColor,
                    fontSize: dynamicFontSize,
                    fontFamily: dynamicFont,
                    opacity: dynamicOpacity,
                }]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.fourth,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        opacity: 0.75
    },
    button: {
        flex:1,
    },
    text: {
        fontFamily: GLOBAL_FONTS.ROBOTO_BOLD,
        fontSize: GLOBAL_FONTSIZES.info,
        opacity: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,

    }
})

export default PrimaryButton;
