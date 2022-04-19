/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add login screen
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import StyledText from '../../../../components/StyledText/View/StyledText';
import ContainerHeader from '../../../../components/ContainerHeader/View/ContainerHeader';

const LoginView = () => {
    return (
        <SafeAreaView>
            <ContainerHeader/>
            <StyledText title={'Log in to youre account'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
})

export default LoginView;
