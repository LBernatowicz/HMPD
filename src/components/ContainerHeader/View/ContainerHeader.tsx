/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add ContainerHeader
 * 19.04.2022
 */

import React from 'react';
import {SafeAreaView, StyleProp, StyleSheet, TouchableOpacity, View, ViewProps} from 'react-native';
import StyledText from '../../StyledText/View/StyledText';
import CircleArrow from '../../../assets/svg/CircleArrow';
import Exit from '../../../assets/svg/Exit';
import GLOBAL_COLORS from '../../../ui/colors/colors';

type Props = {
    exitButton?: boolean
    title: string
    handleExit?: ()=>void;
    navigation?: any;
    externalStyle?: StyleProp<ViewProps>
}

const ContainerHeader = ({exitButton, title, handleExit, navigation, externalStyle}: Props) => {
    // function section
    const handleBack = () => navigation.goBack();

    return (
        <SafeAreaView style={[styles.mainContainer, externalStyle]}>
            <TouchableOpacity
                onPress={handleBack}
                style={styles.backContainer}
            >
                <CircleArrow style={styles.backSvg}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <StyledText title={title}/>
            </View>
            {exitButton ?
                <TouchableOpacity
                    onPress={handleExit}
                    style={styles.exitContainer}
                >
                    <Exit/>
                </TouchableOpacity>
                :
                <View style={styles.exitContainer}/>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: GLOBAL_COLORS.white,
        height: 60,
        alignItems: 'center',
    },
    backContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:4,
    },
    exitContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
