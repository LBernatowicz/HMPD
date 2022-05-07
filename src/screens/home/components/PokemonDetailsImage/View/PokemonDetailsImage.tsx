import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';

type Props = {
    imageWidth?: number;
    imageHeight?: number;
    showIndex?: string;
    absolute?: boolean;
    image?: string;
}

const PokemonDetailsImage = ({imageWidth, imageHeight, showIndex, absolute, image}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.indexText}>
                {showIndex &&
                    <StyledText
                        title={showIndex}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fSize={GLOBAL_FONTSIZES.cardTitle}
                        fColor={GLOBAL_COLORS.primary}
                        fOpacity={0.3}
                    />
                }
            </View>
            <View style={[styles.pokemonImage, {
                position: absolute ? 'absolute' : 'relative',
                top: absolute ? '5%' : 0,
            }]}>
                <Image source={image ? {uri: image} : require('../../../../../assets/pictures/butterfly.png')}
                       style={{
                           width: imageWidth ? imageWidth : 300,
                           height: imageHeight? imageHeight : 300,
                }}/>
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
    },
    image: {
        width: 300,
        height: 300,
    }
})

export default PokemonDetailsImage;
