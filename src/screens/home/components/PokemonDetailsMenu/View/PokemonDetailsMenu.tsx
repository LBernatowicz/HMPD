import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import FontButton from '../../../../../components/FontButton/View/FontButton';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import PokeballButton from '../../../../../components/PokebalButton/View/PokeballButton';
import {GLOBAL_FONTS} from '../../../../../ui/fonts/fonts';
import PokemonAboutMenu from '../../PokemonAboutMenu/View/PokemonAboutMenu';
import PokemonStatusMenu from '../../PokemonStatusMenu/View/PokemonStatusMenu';
import PokemonMovesMenu from '../../PokemonMovesMenu/View/PokemonMovesMenu';
import hairlineWidth = StyleSheet.hairlineWidth;

const PokemonDetailsMenu = () => {
    const [menuVersion, setMenuVersion] = useState<number>(1)

    //handle menu version
    const handleMenuVersion = (version: any) => {
        switch(version) {
            case 1:
                return <PokemonAboutMenu/>
            case 2:
                return <PokemonStatusMenu/>;
            case 3:
                return <PokemonMovesMenu/>
            default:
                return <StyledText title={'4'}/>
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.menuContainer}>
                <View style={styles.buttonMenuContainer}>
                    <PokeballButton
                        title={'About'}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fColor={menuVersion === 1 ? GLOBAL_COLORS.white : GLOBAL_COLORS.primary}
                        menuVersion={menuVersion === 1 && true}
                        onPress={()=>setMenuVersion(1)}
                    />
                    <PokeballButton
                        title={'Status'}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fColor={menuVersion === 2 ? GLOBAL_COLORS.white : GLOBAL_COLORS.primary}
                        menuVersion={menuVersion === 2 && true}
                        onPress={()=>setMenuVersion(2)}
                    />
                    <PokeballButton
                        title={'Moves'}
                        font={GLOBAL_FONTS.ROBOTO_BOLD}
                        fColor={menuVersion === 3 ? GLOBAL_COLORS.white : GLOBAL_COLORS.primary}
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
        backgroundColor: GLOBAL_COLORS.leafFirst,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        alignItems:'center'
    },
    buttonMenuContainer: {
        marginVertical:10,
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',

    }
})

export default PokemonDetailsMenu;
