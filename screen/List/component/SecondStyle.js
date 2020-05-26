import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../style';
import { colors } from '../../../src/util/Color';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class SecondStyle extends React.Component {

    render() {

        const item = this.props.item


        if (item !== undefined) {
            return (
                <TouchableOpacity onPress={() => { Actions.listDetail({ item: item }) }}>

                    <View style={{ ...styles.frame, flexDirection: 'row', }}>

                        <View style={{ flex: 1, paddingLeft: 20, }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 21, marginTop: 0 }}> {item.title} </Text>
                            <Text style={{ fontWeight: '500', color: 'white', fontSize: 16, marginTop: 5 }}> {item.city} </Text>
                            <Icon name="arrowright" size={20} color={colors.WHITE} style={{ left: 5, marginTop: 10 }} />
                        </View>

                        <View style={{ height: 130 }}>
                            <Image style={{ marginTop: -20, marginRight: 10, borderRadius: 80, height: 140, width: 140, resizeMode: 'cover' }} source={require("./../../../src/assets/img/yemek.jpeg")}></Image>
                        </View>

                    </View>
                </TouchableOpacity >
            )
        } else {
            return (<></>)
        }

    };
}
