import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../ui/colors/colors';

const PrimaryButton = () => {
    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <Text>Facebook</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10,
        shadowOffset: {
            width:4,
            height:4,
        },
        shadowOpacity:0.5,
        shadowRadius: 4,
    },
    button: {
        flex:1,
    }
})

export default PrimaryButton;
