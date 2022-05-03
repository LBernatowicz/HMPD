import React from 'react';
import {SafeAreaView, View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import GLOBAL_COLORS from '../../../ui/colors/colors';

const homeButtonDimension = 70;

type Props = {
    title?: string;
}

const NavBar = ({title}: Props) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.barContainer}>
                <View style={styles.pokedexContainer}>
                </View>
                <View style={styles.homeContainer}>
                    <View style={styles.homeTopContainer}>
                        <View style={styles.homeButtonContainer}>
                            <View style={styles.homeButton}>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.fightContainer}>
                </View>
            </View>
            <View style={styles.bottomContainer}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'transparent',
        marginVertical: 30,
        bottom: 30,
        width: '100%',
        height: '10%',
    },
    barContainer: {
        backgroundColor: 'transparent',
        flex:1,
        flexDirection: 'row',
    },
    bottomContainer: {
        width: '100%',
        height: '5%',
        backgroundColor: GLOBAL_COLORS.white
    },
    pokedexContainer: {
        flex: 3,
        backgroundColor: GLOBAL_COLORS.white,
        borderTopRightRadius: homeButtonDimension/4,
    },
    homeContainer: {
        elevation: 5,
        zIndex: 5,
        width: homeButtonDimension*1.1,
        height:'100%',
        backgroundColor: GLOBAL_COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    homeTopContainer: {
        borderRadius: (homeButtonDimension * 1.1)/2,
        width: '100%',
        height: homeButtonDimension,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: homeButtonDimension/4,
    },
    homeButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        bottom: homeButtonDimension/16,
        width: homeButtonDimension+10,
        height: homeButtonDimension+10,
        borderRadius: homeButtonDimension/2,
        backgroundColor: GLOBAL_COLORS.fourth,
    },
    homeButton:{
        justifyContent: 'center',
        alignItems: 'center',
        bottom: homeButtonDimension/16,
        width: homeButtonDimension,
        height: homeButtonDimension,
        borderRadius: homeButtonDimension/2,
        backgroundColor: GLOBAL_COLORS.fourth,
    },
    homeBottomContainer: {
        flex: 1,
        backgroundColor: GLOBAL_COLORS.white,
    },
    fightContainer: {
        flex: 3,
        backgroundColor: GLOBAL_COLORS.white,
        borderTopLeftRadius: homeButtonDimension/4,
    },
})

export default NavBar;
