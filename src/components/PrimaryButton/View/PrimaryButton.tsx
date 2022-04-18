/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 17.04.2022
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../../../ui/colors/colors';

type Props = {
    title: string;

}

const PrimaryButton = ({title}: Props) => {
    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.fourth,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        opacity: 0.75
    },
    button: {
        flex:1,
    }
})

export default PrimaryButton;
