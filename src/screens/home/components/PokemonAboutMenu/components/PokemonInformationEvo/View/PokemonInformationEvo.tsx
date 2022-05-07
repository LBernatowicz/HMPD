import React from 'react';
import {View, StyleSheet} from 'react-native';
import GLOBAL_COLORS from '../../../../../../../ui/colors/colors';
import StyledText from '../../../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';
import hairlineWidth = StyleSheet.hairlineWidth;
import PokemonDetailsImage from '../../../../PokemonDetailsImage/View/PokemonDetailsImage';

const PokemonInformationEvo = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.aboutContainer, {borderColor: GLOBAL_COLORS.leafSecond}]}>
                <View style={styles.aboutEvo}>
                        <PokemonDetailsImage imageHeight={100} imageWidth={100}/>
                        <PokemonDetailsImage imageHeight={100} imageWidth={100}/>
                        <PokemonDetailsImage imageHeight={100} imageWidth={100}/>
                </View>
                <View style={[styles.sectionTitleContainer, {backgroundColor: GLOBAL_COLORS.leafFirst}]}>
                    <StyledText
                        title={'Evolution'}
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
    },
    aboutContainer: {
        borderWidth: hairlineWidth,
        width:'100%',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    aboutEvo:{
      paddingVertical: 10,
        flexDirection: 'row',
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

export default PokemonInformationEvo;
