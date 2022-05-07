import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import StyledText from '../../StyledText/View/StyledText';
import GLOBAL_COLORS from '../../../ui/colors/colors';

type Props = {
    progress: number;
    width?: number;
    title: string | number; // text from parent component
    font?: string; // font style from GLOBAL_FONT
    fColor?: string;  // colors form GLOBAL_COLORS
    fSize?: number; // font size from GLOBAL_FONTSIZE
    fOpacity?: number; // font opacity
    shortTitle: string | number; // text from parent component
    shortFont?: string; // font style from GLOBAL_FONT
    shortFColor?: string;  // colors form GLOBAL_COLORS
    shortFSize?: number; // font size from GLOBAL_FONTSIZE
    shortFOpacity?: number; // font opacity
    barColor?: string;

}

const LineGraph = ({
                       progress,
                       width,
                       shortTitle,
                       title,
                       font,
                       fColor,
                       fSize,
                       fOpacity,
                       shortFont,
                       shortFColor,
                       shortFOpacity,
                       shortFSize,
                       barColor,
}: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.barContainer}>
                <View style={styles.titleContainer}>
                    <StyledText
                        title={title}
                        font={font}
                        fColor={fColor}
                        fSize={fSize}
                        fOpacity={fOpacity}
                    />
                </View>
                <View style={styles.valueContainer}>
                    <StyledText
                        title={shortTitle}
                        font={shortFont}
                        fColor={shortFColor}
                        fOpacity={shortFOpacity}
                        fSize={shortFSize}
                    />
                </View>
                <View style={{height:6}}>
                    <Progress.Bar
                        width={width && width}
                        color={barColor}
                        progress={progress}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 40,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleContainer: {
        flex:2,
    },
    valueContainer: {
        flex:1,
    },
    barContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LineGraph;
