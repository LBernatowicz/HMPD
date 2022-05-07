import React from 'react';
import {View, StyleSheet} from 'react-native';
import GLOBAL_COLORS from '../../../../../../../ui/colors/colors';
import StyledText from '../../../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';
import hairlineWidth = StyleSheet.hairlineWidth;

const PokemonInformationText = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.aboutContainer, {borderColor: GLOBAL_COLORS.leafSecond}]}>
                <View style={styles.aboutText}>
                    <StyledText
                        title={'dasdasd'}
                        font={GLOBAL_FONTS.ROBOTO}
                        fColor={GLOBAL_COLORS.leafSecond}
                        fOpacity={1}
                        fSize={GLOBAL_FONTSIZES.info}
                    />
                    <StyledText
                        title={'dasdasd'}
                        font={GLOBAL_FONTS.ROBOTO}
                        fColor={GLOBAL_COLORS.leafSecond}
                        fOpacity={1}
                        fSize={GLOBAL_FONTSIZES.info}
                    />
                    <StyledText
                        title={'dasdasd'}
                        font={GLOBAL_FONTS.ROBOTO}
                        fColor={GLOBAL_COLORS.leafSecond}
                        fOpacity={1}
                        fSize={GLOBAL_FONTSIZES.info}
                    />
                </View>
                <View style={[styles.sectionTitleContainer, {backgroundColor: GLOBAL_COLORS.leafFirst}]}>
                    <StyledText
                        title={'Information'}
                        font={GLOBAL_FONTS.ROBOTO}
                        fColor={GLOBAL_COLORS.leafSecond}
                        fOpacity={1}
                        fSize={GLOBAL_FONTSIZES.info}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        width: '90%',
        marginBottom:15,
        alignContent: 'center'
    },
    aboutContainer: {
        borderWidth: hairlineWidth,
        width:'100%',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    aboutText:{
      paddingVertical: 10,
    },
    sectionTitleContainer: {
        position: 'absolute',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 5,
        top:-14,
        left: 10,
    }
})

export default PokemonInformationText;
