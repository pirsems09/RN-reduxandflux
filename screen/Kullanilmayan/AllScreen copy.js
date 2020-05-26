import React from 'react';

import { View, SafeAreaView, Text, Dimensions, ScrollView, Image, TouchableHighlight } from 'react-native';
import styles from '../Deneme/sTrying';
import { connect } from 'react-redux';
import { colors } from '../../src/util/Color';
//import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { withPreventDoubleClick, LineFull } from '../../src/util/Container';
import Carousel from 'react-native-snap-carousel';

const width = Math.round(Dimensions.get('window').width);

class AllScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            carouselItems: [
                {
                    title: "Item 1"
                },
                {
                    title: "Item 2"
                },
                {
                    title: "Item 3"
                },
                {
                    title: "Item 4"
                },
                {
                    title: "Item 5"
                }
            ]
        }
    }


    returnStoreItem = () => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.whiteFrame, minHeight: 130, marginLeft: '5%', marginRight: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Text style={styles.textList}>Rasyotik</Text>
                    <Icon onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30} color="grey" />
                </View>

                <View style={{ ...styles.whiteFrame, minHeight: 130, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Text style={styles.textList}>Rasyotik</Text>
                    <Icon onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30} color="grey" />
                </View>

            </View>
        )
    }

    returnStoreItem2 = () => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.whiteFrame, minHeight: 130, marginLeft: '5%', marginRight: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Icon onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30} color="grey" />
                    <LineFull />
                    <Text style={styles.textList}>Rasyotik</Text>
                </View>

                <View style={{ ...styles.whiteFrame, minHeight: 140, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Icon onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30} color="grey" />
                    <LineFull />
                    <Text style={styles.textList}>Rasyotik</Text>
                </View>

            </View>
        )
    }


    _renderItem({ item, index }) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('./../../src/assets/icons/User.png')}></Image>
                <Text style={{ color: '#333' }} >{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View>

                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    <TouchableHighlight onPress={()=>{this.carousel._snapToItem(this.state.activeIndex-1)}}>
                        <Icon name={'ios-arrow-back'} size={25} style={{ backgroundColor: 'red' }} />
                    </TouchableHighlight>

                    <Carousel
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={250}
                        itemWidth={250}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({activeIndex: index})}
                    />

                    <TouchableHighlight>
                        <Icon name={'ios-arrow-forward'} size={25} style={{ backgroundColor: 'red' }} />
                    </TouchableHighlight>

                </View>

            </View >
        )
    }
}

const mapStateToProps = ({ homeResponse }) => {

    return {
        loading: homeResponse.loading
    }
}

export default connect(mapStateToProps, {})(AllScreen)

