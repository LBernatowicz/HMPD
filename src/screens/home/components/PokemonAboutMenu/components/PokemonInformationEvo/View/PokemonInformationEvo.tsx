import React from 'react';
import {View, StyleSheet} from 'react-native';
import GLOBAL_COLORS from '../../../../../../../ui/colors/colors';
import StyledText from '../../../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';
import hairlineWidth = StyleSheet.hairlineWidth;
import PokemonDetailsImage from '../../../../PokemonDetailsImage/View/PokemonDetailsImage';
import CircleArrow from '../../../../../../../assets/svg/CircleArrow';
import {handlePokemonFirstColor, handlePokemonSecondColor} from '../../../../../helpers/helpersFunction';

type Props = {
    pokemonType: string;
}

const PokemonInformationEvo = ({pokemonType}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.aboutContainer, {borderColor: handlePokemonSecondColor(pokemonType)}]}>
                <View style={styles.aboutEvo}>
                        <PokemonDetailsImage imageHeight={100} imageWidth={100}/>
                        <CircleArrow/>
                        <PokemonDetailsImage imageHeight={100} imageWidth={100}/>
                        <CircleArrow/>
                        <PokemonDetailsImage imageHeight={100} imageWidth={100}/>
                </View>
                <View style={[styles.sectionTitleContainer, {backgroundColor: handlePokemonFirstColor(pokemonType)}]}>
                    <StyledText
                        title={'Evolution'}
                        font={GLOBAL_FONTS.ROBOTO}
                        fColor={handlePokemonSecondColor(pokemonType)}
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
        justifyContent:'center',
        alignItems: 'center'
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
