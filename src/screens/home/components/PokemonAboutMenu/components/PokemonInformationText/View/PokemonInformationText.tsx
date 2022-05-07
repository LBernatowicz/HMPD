import React from 'react';
import {View, StyleSheet} from 'react-native';
import GLOBAL_COLORS from '../../../../../../../ui/colors/colors';
import StyledText from '../../../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../../ui/fonts/fonts';
import hairlineWidth = StyleSheet.hairlineWidth;
import {handlePokemonFirstColor, handlePokemonSecondColor} from '../../../../../helpers/helpersFunction';

type Props = {
    pokemonType: string;
}

const PokemonInformationText = ({pokemonType}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.aboutContainer, {borderColor: handlePokemonSecondColor(pokemonType)}]}>
                <View style={styles.aboutText}>
                    <StyledText
                        title={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eum id iste iure laboriosam perspiciatis quo quos repellat sint unde! Dignissimos illo in maiores molestias necessitatibus nobis perspiciatis quo velit!'}
                        font={GLOBAL_FONTS.ROBOTO}
                        fColor={handlePokemonSecondColor(pokemonType)}
                        fOpacity={1}
                        fSize={GLOBAL_FONTSIZES.info}
                    />
                </View>
                <View style={[styles.sectionTitleContainer, {backgroundColor: handlePokemonFirstColor(pokemonType)}]}>
                    <StyledText
                        title={'Information'}
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
