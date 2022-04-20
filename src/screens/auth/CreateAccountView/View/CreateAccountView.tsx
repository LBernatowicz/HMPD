/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add login screen
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StyledText from '../../../../components/StyledText/View/StyledText';
import ContainerHeader from '../../../../components/ContainerHeader/View/ContainerHeader';

type Props = {
    navigation: any
}
const CreateAccountView = ({navigation}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ContainerHeader
                title={'Login'}
                exitButton={false}
                navigation={navigation}
            />
            <StyledText title={'Log in to youre account'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {

    }
})

export default CreateAccountView;
