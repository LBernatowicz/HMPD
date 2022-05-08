import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import PokeballButton from '../../../../../components/PokebalButton/View/PokeballButton';
import {GLOBAL_FONTS} from '../../../../../ui/fonts/fonts';
import PokemonAboutMenu from '../../PokemonAboutMenu/View/PokemonAboutMenu';
import PokemonStatusMenu from '../../PokemonStatusMenu/View/PokemonStatusMenu';
import PokemonMovesMenu from '../../PokemonMovesMenu/View/PokemonMovesMenu';
import hairlineWidth = StyleSheet.hairlineWidth;
import {handlePokemonFirstColor, handlePokemonSecondColor} from '../../../../../helpers/helpersFunction';

type Props = {
    pokemonType?: string;
    pokemonDetails?: object;
    pokemonIndex?: number;
}

const PokemonDetailsMenu = ({pokemonDetails, pokemonType, pokemonIndex}: Props) => {
    const [menuVersion, setMenuVersion] = useState<number>(1)

    //handle menu version
    const handleMenuVersion = (version: any) => {
        switch(version) {
            case 1:
                return <PokemonAboutMenu
                            pokemonType={pokemonType ? pokemonType : ''}
                            pokemonIndex={pokemonIndex ? pokemonIndex : 1}
                    />
            case 2:
                return <PokemonStatusMenu
                            pokemonType={pokemonType ? pokemonType : ''}
                            pokemonDetails={pokemonDetails}
                    />
            case 3:
                return <PokemonMovesMenu
                            pokemonType={pokemonType ? pokemonType : ''}
                            pokemonDetails={pokemonDetails}
                    />
            default:
                return <StyledText title={'4'}/>
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.menuContainer, {
                backgroundColor: handlePokemonFirstColor(pokemonType ? pokemonType : '')
            }]}
            >
                <View style={[styles.buttonMenuContainer, {
                    borderColor: handlePokemonSecondColor(pokemonType ? pokemonType : '')
                }]}
                >
                    <PokeballButton
                        title={'About'}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fColor={menuVersion === 1 ?
                            handlePokemonFirstColor(pokemonType ? pokemonType : '')
                            :
                            handlePokemonSecondColor(pokemonType ? pokemonType : '')
                    }
                        menuVersion={menuVersion === 1 && true}
                        enabledBackgroundColor={
                            handlePokemonSecondColor(pokemonType ? pokemonType : '')
                        }
                        onPress={()=>setMenuVersion(1)}
                    />
                    <PokeballButton
                        title={'Status'}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fColor={menuVersion === 2 ?
                            handlePokemonFirstColor(pokemonType ? pokemonType : '')
                            :
                            handlePokemonSecondColor(pokemonType ? pokemonType : '')
                        }
                        menuVersion={menuVersion === 2 && true}
                        enabledBackgroundColor={
                            handlePokemonSecondColor(pokemonType ? pokemonType : '')
                        }
                        onPress={()=>setMenuVersion(2)}
                    />
                    <PokeballButton
                        title={'Moves'}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fColor={menuVersion === 3 ?
                            handlePokemonFirstColor(pokemonType ? pokemonType : '')
                            :
                            handlePokemonSecondColor(pokemonType ? pokemonType : '')
                        }
                        enabledBackgroundColor={
                        handlePokemonSecondColor(pokemonType ? pokemonType : '')
                        }
                        menuVersion={menuVersion === 3 && true}
                        onPress={()=>setMenuVersion(3)}
                    />
                </View>
                {handleMenuVersion(menuVersion)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems:'center'
    },
    menuContainer:{
        flex:1,
        width:'100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems:'center'
    },
    buttonMenuContainer: {
        borderWidth: hairlineWidth,
        borderRadius: 20,
        marginVertical:20,
        paddingHorizontal:5,
        paddingVertical:5,
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',

    }
})

export default PokemonDetailsMenu;
