import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import PrimaryButton from '../../../../../../components/PrimaryButton/View/PrimaryButton';
import colors from '../../../../../../ui/colors/colors';
import LoginInput from '../../LoginInput/View/LoginInput';

const LoginContainer = () => {
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginInput}>
               <LoginInput/>
            </View>
           <View style={styles.buttonContainer}>
             <PrimaryButton/>
             <PrimaryButton/>
             <PrimaryButton/>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor: colors.primary,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
    },
    loginInput: {
        width: '100%',
        flex:1,
    },
    buttonContainer:{
      width: '90%',
        flex:1,
    },
})
export default LoginContainer;
