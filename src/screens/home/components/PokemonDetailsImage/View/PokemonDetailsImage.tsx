import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';

const PokemonDetailsImage = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.indexText}>
                <StyledText
                    title={'#001'}
                    font={GLOBAL_FONTS.ROBOTO_BOLD}
                    fSize={GLOBAL_FONTSIZES.cardTitle}
                    fColor={GLOBAL_COLORS.primary}
                    fOpacity={0.3}
                />
            </View>
            <View style={styles.pokemonImage}>
                <Image source={require('../../../../../assets/pictures/butterfly.png')} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        flex:1,
    },
    indexText: {
    },
    pokemonImage: {
        position: 'absolute',
        top:'5%',
        alignItems: 'center',
        elevation: 10,
        zIndex: 10,
        width:'100%',
        height:100,
    },
    image: {
        width: 300,
        height: 300,
    }
})

export default PokemonDetailsImage;
