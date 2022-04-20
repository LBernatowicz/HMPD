/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * add Styled input
 * 20.04.2022
 */

import React from 'react';
import {
    SafeAreaView,
    StyleProp,
    StyleSheet,
    TextInput,
    TextStyle,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import GLOBAL_COLORS from '../../../ui/colors/colors';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../ui/fonts/fonts';
import StyledText from '../../StyledText/View/StyledText';
import Exit from '../../../assets/svg/Exit';

type Props = {
    title?: string;
    label?: string;
    labelFont?: string;
    labelFontSize?: number;
    labelColor?: string;
    labelOpacity?: number;
    labelStyle?: StyleProp<TextStyle>
    value?: string;
    onChangeText?: (text: string)=>void
    secure?: boolean;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
}

const StyledInput = ({
                         title,
                         label,
                         labelFont,
                         labelFontSize,
                         labelColor,
                         labelOpacity,
                         labelStyle,
                         value,
                         onChangeText,
                         secure,
                         keyboardType
}: Props) => {
    const securedIcon = require('../../../assets/pictures/meow.png')
    return (
        <SafeAreaView style={styles.mainContainer}>
            {label &&
                <View style={styles.labelContainer}>
                    <StyledText
                        title={label ? label : ''}
                        font={labelFont ? labelFont : GLOBAL_FONTS.ROBOTO}
                        fSize={labelFontSize ? labelFontSize : GLOBAL_FONTSIZES.info}
                        fColor={labelColor ? labelColor : GLOBAL_COLORS.primary}
                        fOpacity={labelOpacity ? labelOpacity : 1}
                        externalStyle={labelStyle}
                    />
                </View>
            }
            <TextInput
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secure}
                keyboardType={keyboardType}
                placeholder={title}
                style={styles.input}
            >
            </TextInput>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
        marginVertical: 30,
    },
    labelContainer: {
    position: 'absolute'
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: GLOBAL_COLORS.fourth,
        color: GLOBAL_COLORS.primary,
        paddingHorizontal:10,
        borderRadius:10,
        fontFamily: GLOBAL_FONTS.ROBOTO,
        fontSize: GLOBAL_FONTSIZES.header

    }
})

export default StyledInput;
