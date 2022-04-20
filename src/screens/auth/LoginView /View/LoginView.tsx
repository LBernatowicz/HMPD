/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add login screen
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import StyledText from '../../../../components/StyledText/View/StyledText';
import ContainerHeader from '../../../../components/ContainerHeader/View/ContainerHeader';
import GLOBAL_COLORS from '../../../../ui/colors/colors';
import StyledInput from '../../../../components/StyledInput/View/StyledInput';
import PrimaryButton from '../../../../components/PrimaryButton/View/PrimaryButton';

type Props = {
    navigation: any
}
const LoginView = ({navigation}: Props) => {
    const loginImage = require('../../../../assets/pictures/squirtle.png')
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ContainerHeader
                title={'Login'}
                exitButton={false}
                navigation={navigation}
            />
            <View style={styles.bodyContainer}>
                <View style={styles.imageContainer}>
                    <Image source={loginImage} style={styles.image}/>
                </View>
                <View style={styles.inputContainer}>
                    <StyledText title={'Log in to youre account'}/>
                    <View style={styles.input} >
                        <StyledInput
                            value={'Dupa'}
                            title={'dasdas'}
                            label={'Podaj login'}/>
                        <StyledInput
                            secure={true}
                            title={'dasdas'}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton title={'Zaloguj'}/>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
        backgroundColor: GLOBAL_COLORS.white,
    },
    bodyContainer: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
        margin: 20,
    },
    image: {
        transform: [{
            scale: 0.3,
        }]
    },
    inputContainer: {
        flex:5,
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        marginVertical:10,
        paddingVertical:10,
    },
    buttonContainer: {
        width: '100%',
        marginVertical:10,
    }
})

export default LoginView;
