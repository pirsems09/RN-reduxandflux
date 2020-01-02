import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class EmptyScreen extends React.Component {
    render() {
        return (
            
            <View style={styles.container}>

                <View style={styles.body}>
                    <Text style={styles.text}>Veri Bulunamadı</Text>
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        flexDirection:'column',

    },body: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',

    },
    text: {
        padding:20,
        fontSize: 24,
        fontWeight:'700',
        color:'#555555'
    }
});