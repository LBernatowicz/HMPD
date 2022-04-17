/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 17.04.2022
 */

import * as React from 'react';
import { StyleSheet,View} from 'react-native';
import PrimaryButton from '../../../../../../components/PrimaryButton/View/PrimaryButton';
import colors, {GLOBAL_COLORS} from '../../../../../../ui/colors/colors';
import StyledText from '../../../../../../components/StyledText/View/StyledText';
import {GLOBAL_FONTS, GLOBAL_FONTSIZES} from '../../../../../../ui/fonts/fonts';
import FontButton from '../../../../../../components/FontButton/View/FontButton';

const LoginContainer = () => {
    return (
        <View style={styles.loginContainer}>
           <View style={styles.buttonContainer}>
             <PrimaryButton title={'Create Account'}/>
           </View>
            <View style={styles.underTextComponent}>
                <StyledText
                    title={'Already have an account?'}
                    fColor={GLOBAL_COLORS.white}
                    font={GLOBAL_FONTS.ROBOTO}
                    fSize={GLOBAL_FONTSIZES.description}
                />
                <FontButton
                    title={'Login'}
                    fColor={GLOBAL_COLORS.fourth}
                    font={GLOBAL_FONTS.ROBOTO}
                    fSize={GLOBAL_FONTSIZES.description}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
    },
    loginInput: {
        width: '100%',
        flex:1,
    },
    underTextComponent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    buttonContainer:{
      width: '90%',
        flex:1,
    },
})
export default LoginContainer;
