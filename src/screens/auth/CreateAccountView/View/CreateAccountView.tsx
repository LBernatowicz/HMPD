/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add login screen
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import StyledText from '../../../../components/StyledText/View/StyledText';

const CreateAccountView = () => {
    return (
        <SafeAreaView>
            <StyledText title={'Creating an account'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    }
})

export default CreateAccountView;
