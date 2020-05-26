import React from 'react';

import { View, SafeAreaView, Text, ScrollView, Image, StyleSheet, FlatList } from 'react-native';
import { productList } from './../../src/actions'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { LineFull, Snipper } from '../../src/util/Container';
import { sliderWidth, itemWidth } from './../../src/util/SliderEntry.style';
import SliderEntry from './../../src/util/SliderEntry';
import { ENTRIES1, ENTRIES2 } from './../../src/util/entries';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './../../src/util/index.style';
import sTrying from './sTrying';
import { USERID, CATEGORYID } from '../../src/actions/types';


const SLIDER_1_FIRST_ITEM = 1;

class NewProductScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: '20 TL',
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        }
    }

    componentDidMount() {
        //this.props.productList(USERID.data, false, CATEGORYID.data, null, 1)
    }


    returnLeft() {

        return (

            <View style={{ ...styles.newStoreFrame, marginTop: 0, width: '100%', flex: 0.5 }}>

                <View style={{ marginTop: -10, maxHeight: 50, shadowOpacity: 0.35, shadowRadius: 5, shadowColor: 'black', shadowOffset: { height: 3, width: 1 }, elevation: 3 }}>
                    <Image style={{ maxHeight: 50, alignSelf: 'center', resizeMode: 'contain', }} source={require('../../src/assets/img/a101.png')} />
                </View>

                <View style={{ shadowOpacity: 0.35, shadowRadius: 5, shadowColor: 'black', shadowOffset: { height: 3, width: 1 }, elevation: 3 }}>
                    <Image style={{ width: '75%', maxHeight: 150, alignSelf: 'center', resizeMode: 'contain', borderRadius: 20, marginTop: 20, marginBottom: 20 }} source={require('../../src/assets/img/sut.png')} />
                </View>

                <View style={{ marginLeft: 15, flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ textAlign: 'left', fontSize: 16, color: '#555', fontWeight: '600', marginTop: 12 }}>20 tl</Text>
                            <View style={{
                                flex: 1, backgroundColor: 'transparent', marginTop: -20, marginLeft: 10
                            }}>
                                <View
                                    style={{
                                        backgroundColor: 'red',
                                        height: 2,
                                        width: "100%",
                                        marginBottom: 10,
                                        marginTop: 10,
                                    }}
                                />
                            </View>

                        </View>
                        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '700', marginTop: 10 }}>20 tl</Text>
                    </View>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '500', color: '#111', marginTop: 10 }}>Başlık</Text>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '400', color: '#888', marginTop: 5, marginBottom: 10 }}>Başlık</Text>
                </View>

            </View>

        )
    }

    returnRight() {

        return (


            <View style={{ ...styles.newStoreFrame, marginTop: -20, marginBottom: 20, width: '100%', flex: 0.5 }}>
                <View style={{ marginTop: -10, maxHeight: 50, shadowOpacity: 0.35, shadowRadius: 5, shadowColor: 'black', shadowOffset: { height: 3, width: 1 }, elevation: 3 }}>
                    <Image style={{ maxHeight: 50, alignSelf: 'center', resizeMode: 'contain', }} source={require('../../src/assets/img/migros.png')} />
                </View>

                <View style={{ shadowOpacity: 0.35, shadowRadius: 5, shadowColor: 'black', shadowOffset: { height: 3, width: 1 }, elevation: 3 }}>
                    <Image style={{ width: '75%', maxHeight: 150, alignSelf: 'center', resizeMode: 'contain', borderRadius: 20, marginTop: 20, marginBottom: 20 }} source={require('../../src/assets/img/sut.png')} />
                </View>

                <View style={{ marginLeft: 15, flex: 1 }}>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ marginRight: 10 }}>
                            <Text style={{ textAlign: 'left', fontSize: 16, color: '#555', fontWeight: '600', marginTop: 12 }}>20 tl</Text>
                            <View style={{
                                flex: 1, backgroundColor: 'transparent', marginTop: -20, marginLeft: 10
                            }}>
                                <View
                                    style={{
                                        backgroundColor: 'red',
                                        height: 2,
                                        width: "100%",
                                        marginBottom: 10,
                                        marginTop: 10,
                                    }}
                                />
                            </View>

                        </View>
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10 }}>20 tl</Text>
                    </View>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '500', color: '#111', marginTop: 10 }}>Başlık</Text>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '400', color: '#888', marginTop: 5, marginBottom: 10 }}>Başlık</Text>

                </View>

            </View>


        )
    }


    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }


    //ok
    mainExample(number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    // inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
            </View>
        );
    }


    render() {

        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');

        if (!this.props.loading) {
            return (
                <SafeAreaView style={styles.safeArea}>

                    <ScrollView
                        style={styles.scrollview}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}>

                        <Text style={{ ...sTrying.textMenuDark, color: '#111', marginTop: 20, marginLeft: 30 }}>Ürünler</Text>

                        <FlatList
                            data={this.props.productData.data}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10 }}
                            renderItem={({ item, index }) =>
                                <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, marginRight: 10, marginLeft: 10 }}>
                                    {index % 2 == 0 ? this.returnLeft() : this.returnRight()}
                                </View>
                            }
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />

                    </ScrollView>

                </SafeAreaView>
            )
        } else {
            return (
                <Snipper />
            )
        }


    }
}

const mapStateToProps = ({ productResponse }) => {

    return {
        loading: productResponse.loading, productData: productResponse.productData
    }
}

export default connect(mapStateToProps, { productList })(NewProductScreen)

