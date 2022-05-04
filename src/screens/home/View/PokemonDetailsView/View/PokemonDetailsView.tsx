import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ContainerHeader from '../../../../../components/ContainerHeader/View/ContainerHeader';
import GLOBAL_COLORS from '../../../../../ui/colors/colors';

type Props = {
    navigation: any
}

const PokemonDetailsView = ({navigation}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ContainerHeader title={''} navigation={navigation}/>
            <View style={{flex:1}}/>
            <View style={{flex:2, backgroundColor: GLOBAL_COLORS.fireFirst, borderTopLeftRadius: 20, borderTopRightRadius:20, top:50}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: GLOBAL_COLORS.white
    },
    externalStyle: {
        backgroundColor: 'transparent'
    }
})

export default PokemonDetailsView;
