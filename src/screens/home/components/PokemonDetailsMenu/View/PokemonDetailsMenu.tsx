import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';
import FontButton from '../../../../../components/FontButton/View/FontButton';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import PokeballButton from '../../../../../components/PokebalButton/View/PokeballButton';

const PokemonDetailsMenu = () => {
    const [menuVersion, setMenuVersion] = useState<number>(1)

    //handle menu version
    const handleMenuVersion = (version: any) => {
        switch(version) {
            case 1:
                return <StyledText title={'1'}/>
            case 2:
                return <StyledText title={'2'}/>
            case 3:
                return <StyledText title={'3'}/>
            default:
                return <StyledText title={'4'}/>
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonMenuContainer}>
                <PokeballButton
                    title={'About'}
                    fColor={menuVersion === 1 ? GLOBAL_COLORS.white : GLOBAL_COLORS.primary}
                    menuVersion={menuVersion === 1 && true}
                    onPress={()=>setMenuVersion(1)}
                />
                <PokeballButton
                    title={'Status'}
                    fColor={menuVersion === 2 ? GLOBAL_COLORS.white : GLOBAL_COLORS.primary}
                    menuVersion={menuVersion === 2 && true}
                    onPress={()=>setMenuVersion(2)}
                />
                <PokeballButton
                    title={'Moves'}
                    fColor={menuVersion === 3 ? GLOBAL_COLORS.white : GLOBAL_COLORS.primary}
                    menuVersion={menuVersion === 3 && true}
                    onPress={()=>setMenuVersion(3)}
                />
            </View>
            <View style={styles.menuContainer}>
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
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around',

    }
})

export default PokemonDetailsMenu;
