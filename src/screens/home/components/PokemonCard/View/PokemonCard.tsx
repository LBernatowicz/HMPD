/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * PokemonCard
 * 26.04.2022
 */


import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../ui/fonts/fonts';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import {getData} from '../../../../../config/apiRequests';
import {POKEMON} from '../../../../../config/axiosInstances';
import {handlePokemonIndex, handlePokemonTypeColor, handlePokemonTypeElemental} from '../../../../../helpers/helpersFunction';

type Props = {
    title: string;
    pokemonIndex: number;
    navigation: any;
}

const PokemonCard = ({title, pokemonIndex, navigation}: Props) => {
    const [pokemonDetails, setPokemonDetails] = useState<any>()
    const [pokemonType, setPokemonType] = useState<any>()

    const getPokemonDetails = async() => {
        const response = await getData(`${POKEMON}/${pokemonIndex}`)
        setPokemonType(response?.data.types[0].type.name)
        setPokemonDetails(response?.data)
        //console.log('@@@@@@@@@',response?.data.stats[0].base_stat)
    }

    useEffect(()=>{
        getPokemonDetails()
    },[])

    const PokemonImage = {uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`}

    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={()=>navigation.navigate('PokemonDetails', {
                details: pokemonDetails,
                index: pokemonIndex,
            })}
        >
            <LinearGradient colors={handlePokemonTypeColor(pokemonType)}
                style={styles.cardBGContainer}>
                <View style={styles.backgroundText}>
                    <StyledText
                        title={handlePokemonIndex(pokemonIndex)}
                        font={GLOBAL_FONTS.ROBOTO_CONDENSED_BOLD}
                        fSize={GLOBAL_FONTSIZES.cardTitle}
                        fColor={GLOBAL_COLORS.primary}
                        fOpacity={0.4}
                    />
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.iconContainer}>
                        <Image source={PokemonImage} style={styles.icon}/>
                    </View>
                    <View style={styles.nameContainer}>
                        <StyledText
                            title={title ? title.toUpperCase() : ''}
                            font={GLOBAL_FONTS.ROBOTO_BOLD}
                            fSize={GLOBAL_FONTSIZES.smallTitle}
                            fColor={GLOBAL_COLORS.primary}
                            fOpacity={1}
                        />
                    </View>
                    <View style={styles.elementalContainer}>
                        <Image source={handlePokemonTypeElemental(pokemonType)} style={styles.elementIcon}/>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 100,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBGContainer: {
        width: '95%',
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.2,
    },
    backgroundText: {
        position:'absolute',
    },
    cardContainer: {
        flexDirection: 'row'
    },
    iconContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        position: 'absolute',
        left :20,
        width: 100,
        height: 100,
    },
    nameContainer: {
        bottom: 20,
        left: 20,
    },
    elementalContainer: {
        flexDirection: 'row',
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 10,
    },
    elementIcon: {
        margin: 2,
        width: 30,
        height: 30,
    }
})

export default PokemonCard;
