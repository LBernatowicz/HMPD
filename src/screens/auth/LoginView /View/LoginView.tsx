/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add login screen
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import StyledText from '../../../../components/StyledText/View/StyledText';

const LoginView = () => {
    return (
        <SafeAreaView>
            <StyledText title={'Log in to youre account'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    }
})

export default LoginView;
