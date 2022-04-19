/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add ContainerHeader
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';
import CircleArrow from '../../../assets/svg/CircleArrow';
import hairlineWidth = StyleSheet.hairlineWidth;
import Exit from '../../../assets/svg/Exit';

const ContainerHeader = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <TouchableOpacity style={styles.backContainer}>
                <CircleArrow style={styles.backSvg}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <StyledText title={'Login'}/>
            </View>
            <TouchableOpacity style={styles.exitContainer}>
                <Exit/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: 60,
        borderBottomWidth: hairlineWidth,
        alignItems: 'center',
    },
    backContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        flex:1,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        flex:4,
    },
    exitContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flex:1,
    },
    backSvg: {
        transform: [
            { rotateX: "180deg" },
            { rotateZ: "180deg" }
        ]
    }
})

export default ContainerHeader;
