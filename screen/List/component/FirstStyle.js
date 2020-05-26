import { View, Text, Image, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import styles from '../style';
import { colors } from '../../../src/util/Color';
import Icon from 'react-native-vector-icons/Entypo';

export default class FirstStyle extends React.Component {


    state = {
        price: '20 TL',
        active:false,
    }


    render() {
        
    
        return (

            <View style={styles.newStoreFrame}>
                <View style={{ flexDirection: 'row', height: 130 }}>

                    <View style={{
                        marginTop: -15, shadowOpacity: 0.35,
                        shadowRadius: 3,
                        shadowColor: colors.MAINCOLOR,
                        shadowOffset: { height: 2, width: 1 },
                        elevation: 3,
                    }}>
                        <Image style={{ borderRadius: 10, marginLeft: 10, width: 110, height: 160,resizeMode:'contain' }} source={require("./../../../src/assets/img/home.jpeg")} />
                        {/* <Image style={{ borderRadius: 10, marginLeft: 10, width: 110, height: 160 }} source={{uri:'https://i.pinimg.com/474x/31/95/d2/3195d2b51a44058dd461145189f36836--gym-outfits-fitness-girls.jpg'}} /> */}
                    </View>

                    <View style={{ minHeight: 140, justifyContent: 'center', marginRight: '5%', marginLeft: '5%', flex: 1 }}>

                        <Text style={styles.listeTitleName}>Ashly Lana</Text>

                        <View style={{ flexDirection: 'row' }} >
                            <Icon name="star" size={20} color={colors.MAINCOLOR} />
                            <Icon name="star-outlined" size={20} color={colors.MAINCOLOR} />
                            <Icon name="star-outlined" size={20} color={colors.MAINCOLOR} />
                            <Icon name="star-outlined" size={20} color={colors.MAINCOLOR} />
                            <Icon name="star-outlined" size={20} color={colors.MAINCOLOR} />
                        </View>

                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.listeTitlePassive}>Fiyat : </Text>
                            <Text style={styles.listeTitleDesc}>{this.state.price}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.listeTitlePassive}>Durumu : </Text>
                            <Text style={styles.listeTitleDesc}>Aktif</Text>
                        </View>

                    </View>

                    <View style={{ position: 'relative', height: '100%', marginTop: 10, marginRight: 14 }}>
                        <View style={{ backgroundColor: colors.EXTRA_LIGHT_GRAY, borderRadius: 10, padding: 5 }}>
                            <Icon name="globe" size={20} color={colors.MAINCOLOR} />
                            <Icon name="pin" size={20} color={this.state.active ? colors.G_FIRST :  colors.G_THREE} />
                        </View>
                    </View>


                </View>

            </View>

        )
    };
}
