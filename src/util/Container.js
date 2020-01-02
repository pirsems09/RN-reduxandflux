import { View, Text, Image, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import React from 'react';

// android // AIzaSyDsnGp4e45LaDV6HZzs1riA-0dTFDs6rVg
// ios // AIzaSyCwN8oyoWLKy3SgKnKmzszMFzdK_ivItlM
export class LineFull extends React.Component {

    render() {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                    marginBottom: 10,
                    marginTop: 10,
                }}
            />
        )
    };
}
export class LineVertical extends React.Component {

    render() {
        return (
            <View
                style={{
                    height: "100%",
                    width: 1,
                    backgroundColor: "#CED0CE",
                    alignSelf: 'center'
                }}
            />
        )
    };
}
export class Snipper extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    animating={true}
                    color='orange'
                    size="large"
                />
            </View>
        )
    };
}