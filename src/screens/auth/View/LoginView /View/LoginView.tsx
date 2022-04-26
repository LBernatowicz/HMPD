/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Add login screen
 * 19.04.2022
 */

import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import StyledText from '../../../../../components/StyledText/View/StyledText';
import ContainerHeader from '../../../../../components/ContainerHeader/View/ContainerHeader';
import StyledInput from '../../../../../components/StyledInput/View/StyledInput';
import PrimaryButton from '../../../../../components/PrimaryButton/View/PrimaryButton';
import Locker from '../../../../../assets/svg/Locker';

type Props = {
    navigation: any
}
const LoginView = ({navigation}: Props) => {
    const [login, setLogin] = useState<string>('admin')
    const [password, setPassword] = useState<string>('12345')
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [visibleWarningMessage, setVisibleWarningMessage] = useState({
        loginWarningMessage: false,
        passwordWarningMessage: false
    })
    const [verify, setVerify] = useState({
        login: false,
        password: false
    })

    const loginImage = require('../../../../../assets/pictures/squirtle.png')

    const handleShowPassword = () => {
        setShowPassword(false)
        setTimeout(()=>setShowPassword(true),2000)
    }

    const handleAccess = () => {
        if (login === 'admin' && password === '12345') {
            setVerify({
                login: true,
                password: true,
            })
            console.log(verify,'dane poprawne')
        }
        else if (login === 'admin' && password !== '12345') {console.log('złe hasło')}
        else if (login !== 'admin' && password === '12345') {console.log('zły login')}
        else if (login !== 'admin' && password === '12345') {console.log('zły login')}
    }

    const handleVerify = () => {
        handleAccess()
        if ((verify.login && verify.password)) navigation.navigate('Drawer', {screen: 'Tab'})
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ContainerHeader
                title={'Login'}
                exitButton={false}
                navigation={navigation}
            />
            <View style={styles.bodyContainer}>
                <View style={styles.imageContainer}>
                    <Image source={loginImage} style={styles.image}/>
                </View>
                <View style={styles.inputContainer}>
                    <StyledText title={'Log in to youre account'}/>
                    <View style={styles.input} >
                        <StyledInput
                            value={login}
                            title={'login...'}
                            label={'Your login'}
                            warningLabel={'Wrong login!'}
                            visibleWarning={visibleWarningMessage.loginWarningMessage}
                            onChangeText={(value) => setLogin(value)}
                        />
                        <StyledInput
                            secure={showPassword}
                            icon={<Locker/>}
                            iconPress={handleShowPassword}
                            value={password}
                            title={'password...'}
                            label={'Your password'}
                            warningLabel={'Wrong password!'}
                            visibleWarning={visibleWarningMessage.passwordWarningMessage}
                            onChangeText={(value) => setPassword(value)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={handleVerify}
                            title={'Zaloguj'}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        alignItems: 'center',
    },
    bodyContainer: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
    },
    imageContainer: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
        margin: 30,
    },
    image: {
        transform: [{
            scale: 0.3,
        }]
    },
    inputContainer: {
        flex:5,
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        marginVertical:10,
        paddingVertical:10,
    },
    buttonContainer: {
        width: '100%',
    }
})

export default LoginView;
