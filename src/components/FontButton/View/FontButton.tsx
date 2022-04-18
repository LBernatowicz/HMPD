/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 17.04.2022
 */

// Import library section
import React from 'react';
import {TouchableOpacity, StyleSheet, SafeAreaView, ViewStyle, StyleProp} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';


// Props section
type Props = {
    title: string;
    font?: string;
    fSize?: number;
    fColor?: string;
    fOpacity?: number;
    externalStyles?: StyleProp<ViewStyle>
}
const FontButton = ({title, font, fColor, fOpacity, fSize, externalStyles}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity>
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
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FontButton;
