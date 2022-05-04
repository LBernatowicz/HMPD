/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokeballButton
 * 04.05.2022
 */

// Import library section
import React from 'react';
import {TouchableOpacity, StyleSheet, SafeAreaView, ViewStyle, StyleProp} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';
import GLOBAL_COLORS from '../../../ui/colors/colors';


// Props section
type Props = {
    title: string;
    font?: string;
    fSize?: number;
    fColor?: string;
    fOpacity?: number;
    externalStyles?: StyleProp<ViewStyle>
    onPress?: ()=>void;
    menuVersion?: boolean;
}
const PokeballButton = ({title, font, fColor, fOpacity, fSize, externalStyles, onPress, menuVersion}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity
                onPress={onPress}
                style={menuVersion ? styles.buttonEnabled : styles.buttonDisabled}
            >
                <StyledText
                    title={title}
                    font={font}
                    fSize={fSize}
                    fColor={fColor}
                    fOpacity={fOpacity}
                    externalStyle={externalStyles}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonEnabled: {
        height:80,
        width:80,
        borderRadius:40,
        backgroundColor:GLOBAL_COLORS.fourth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDisabled: {
        justifyContent: 'center',
        alignItems: 'center',
        height:80,
        width:80,
    }
})

export default PokeballButton;
