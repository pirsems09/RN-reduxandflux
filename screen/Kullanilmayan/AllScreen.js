import React from 'react';

import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import styles from './sTrying';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { withPreventDoubleClick, LineFull } from '../../src/util/Container';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './../../src/util/SliderEntry';
import { sliderWidth, itemWidth } from './../../src/util/SliderEntry.style';
import mainstyles, { colors } from './../../src/util/index.style';

const SLIDER_1_FIRST_ITEM = 1;

class AllScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            ENTRIES1: [
                {
                    title: 'Beautiful and dramatic Antelope Canyon',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://cdn5.vectorstock.com/i/1000x1000/08/14/small-cartoon-people-with-megaphone-banner-we-are-vector-25540814.jpg'
                },
                {
                    title: 'Earlier this morning, NYC',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMT9gR9ebYRG9sJ18KJn4dsKgIf2VIedDTZAltPauRzO6_vyC9&s'
                },
                {
                    title: 'White Pocket Sunset',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdADS71X2MgjJ0ddRFz4cVEMXbgFd0unjlhwbJ_9-DN_aXvR8&s'
                },
                {
                    title: 'Acrocorinth, Greece',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
                },
                {
                    title: 'The lone tree, majestic landscape of New Zealand',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
                },
                {
                    title: 'Middle Earth, Germany',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
                }
            ]
        }
    }

    _renderItem({ item, index }) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    //0k
    momentumExample(number, title) {
        return (
            <View style={mainstyles.exampleContainer}>
                <Carousel
                    data={this.state.ENTRIES1}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    inactiveSlideScale={0.95}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    containerCustomStyle={mainstyles.slider}
                    contentContainerCustomStyle={mainstyles.sliderContentContainer}
                    activeAnimationType={'spring'}
                    activeAnimationOptions={{
                        friction: 4,
                        tension: 40
                    }}
                />
            </View>
        );
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

    render() {
        const headerAnnounce = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');

        return (
            <ScrollView style={styles.container}>

                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', flex:1 }}>
                        <Text style={styles.textList}>Teknoloji</Text>
                        <Text style={styles.textAllShow}>Tümü</Text>
                        <Icon name="ios-arrow-forward" size={20} color={colors.gray} style={{alignSelf:'center', marginTop:8, padding:5}}/>
                    </View>
                    {headerAnnounce}
                </View>

                <View style={{ flex:1, flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.textList}>Sağlık</Text>
                        <Text style={styles.textAllShow}>Tümü</Text>
                        <Icon name="ios-arrow-forward" size={20} color={colors.gray} style={{alignSelf:'center', marginTop:8, padding:5}}/>

                    </View>
                    {headerAnnounce}
                </View>

            </ScrollView >
        )
    }
}

const mapStateToProps = ({ homeResponse }) => {

    return {
        loading: homeResponse.loading
    }
}

export default connect(mapStateToProps, {})(AllScreen)

