import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, ImageBackground } from 'react-native';


export default class ErrorScreen extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../../src/assets/img/background_dark.png')} imageStyle={{ opacity: 0.1 }} style={{ flex: 1}} >

                <View style={styles.container}>

                    <View style={styles.body}>

                        <Image style={{ width: Math.round(Dimensions.get('window').width) / 1.3, resizeMode: 'contain', height: Math.round(Dimensions.get('window').height) / 1.5 }} source={require('../../src/assets/img/icon.png')}></Image>
                        <Text style={styles.error_text}>Beklenmedik Bir{"\n"}Hata İle Karşılaşıldı</Text>
                    </View>

                </View>

            </ImageBackground>
        );
    }
}
        //               

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    }, body: {
        backgroundColor:'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    error_text: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#333',
        alignContent:'center',
        alignSelf:'center',
        textAlign:'center'
    }
});