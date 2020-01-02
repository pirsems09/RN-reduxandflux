import React, { Component } from "react";
import { View, Image, Dimensions } from 'react-native';

import styles from './sSplash'
import { ImageBackground } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Splash extends Component {

    componentWillMount() {
        setTimeout(() => {
            Actions.home()
        }, 1000);
    }

    render() {

        return (
            <ImageBackground source={require('../../src/assets/img/background_dark.png')} imageStyle={{ opacity: 0.1 }} style={{ flex: 1, backgroundColor: "#2F3640" }} >
                <View style={styles.container}>
                    <View>
                        <Image style={{ width: Math.round(Dimensions.get('window').width) / 1.3, resizeMode: 'contain' }} source={require("../../src/assets/img/icon.png")} />
                    </View>
                </View>
            </ImageBackground >

        );
    }
}