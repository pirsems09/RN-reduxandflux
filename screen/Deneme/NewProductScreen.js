import React from 'react';

import { View, SafeAreaView, Text, ScrollView, Image, Dimensions, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { productList, productListAdd } from './../../src/actions'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { LineFull, Snipper } from '../../src/util/Container';
import { sliderWidth, itemWidth } from './../../src/util/SliderEntry.style';
import SliderEntry from './../../src/util/SliderEntry';
import { ENTRIES1, ENTRIES2 } from './../../src/util/entries';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import styles, { colors } from './../../src/util/index.style';
import sTrying from './sTrying';
import { USERID } from '../../src/actions/types';

const width = Math.round(Dimensions.get('window').width);
const SLIDER_1_FIRST_ITEM = 1;

class NewProductScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            price: '20 TL',
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            page: 1,
            marketId: '',
            categoryId: '',
            marketList: [],
        }
    }

    componentWillMount() {

        console.log('heyyy', this.props.marketData)

        console.log('this.props.marketID', this.props.marketID)
        console.log('this.props.categoryID', this.props.categoryID)

        this.setState({ marketId: this.props.marketID, categoryId: this.props.categoryID, marketList: this.props.marketData.data })

        var query = '?';
        query = query + 'justFavorite=false&'

        if (USERID.data !== null || USERID.data !== undefined)
            query = query + 'userId=' + USERID.data + '&'
        if (this.props.categoryID !== undefined)
            query = query + 'categoryId=' + this.props.categoryID + '&'
        if (this.props.marketID !== undefined)
            query = query + 'marketId=' + this.props.marketID + '&'

        query = query + 'nextRow=' + this.state.page

        console.log('gidecek query -> ', query)

        this.props.productList(query)

    }

    loadMoreData = () => {

        var queryy = '?';
        queryy = queryy + 'justFavorite=false&'

        if (USERID.data !== null || USERID.data !== undefined)
            queryy = queryy + 'userId=' + USERID.data + '&'
        if (this.state.categoryId !== undefined)
            queryy = queryy + 'categoryId=' + this.state.categoryId + '&'
        if (this.state.marketId !== undefined)
            queryy = queryy + 'marketId=' + this.state.marketId + '&'

        queryy = queryy + 'nextRow=' + this.state.page

        console.log('gidecek query -> ', queryy)

        this.setState({ page: this.state.page + 1 })

        this.props.productList(queryy)



    }


    //#region propertiler
    returnLeft(item) {

        var marketImage = ''

        this.state.marketList.map((value) => {
            if (value.marketName == item.marketName)
                marketImage = value.marketLogo
        })

        console.log(marketImage)

        return (

            <View style={{ ...sTrying.newStoreFrame, marginTop: 0, width: '100%', flex: 0.5 }}>

                <View style={{ marginTop: -10 }}>
                    <Image style={{ width: '75%', height: 50, alignSelf: 'center', resizeMode: 'contain', }} source={{ uri: marketImage}} />
                </View>

                <View>
                    <Image style={{ width: '75%', height: 180, alignSelf: 'center', resizeMode: 'contain', }} source={{ uri: item.imageUrl }} />
                </View>

                <View style={{ marginLeft: 15, flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Text style={{ textAlign: 'left', fontSize: 16, color: '#555', fontWeight: '600', marginTop: 12 }}>{item.oldPrice}</Text>
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
                        <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: '700', marginTop: 10 }}>{item.currentPrice} tl</Text>
                    </View>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '500', color: '#111', marginTop: 10 }}>{item.title}</Text>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '400', color: '#888', marginTop: 5, marginBottom: 10 }}>{item.categoryName}</Text>
                </View>

            </View>

        )
    }

    returnRight(item) {

        return (

            <View style={{ ...sTrying.newStoreFrame, marginTop: -20, marginBottom: 20, width: '100%', flex: 0.5 }}>
                <View style={{ marginTop: -10, maxHeight: 50, shadowOpacity: 0.35, shadowRadius: 5, shadowColor: 'black', shadowOffset: { height: 3, width: 1 }, elevation: 3 }}>
                    <Image style={{ maxHeight: 50, alignSelf: 'center', resizeMode: 'contain', }} source={require('../../src/assets/img/migros.png')} />
                </View>

                <View>
                    <Image style={{ width: '75%', height: 180, alignSelf: 'center', resizeMode: 'contain', }} source={{ uri: item.imageUrl }} />

                </View>

                <View style={{ marginLeft: 15, flex: 1 }}>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ marginRight: 10 }}>
                            <Text style={{ textAlign: 'left', fontSize: 16, color: '#555', fontWeight: '600', marginTop: 12 }}>{item.oldPrice}</Text>
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
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10 }}>{item.currentPrice} tl</Text>
                    </View>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '500', color: '#111', marginTop: 10 }}>{item.title}</Text>
                    <Text style={{ textAlign: 'left', fontSize: 13, fontWeight: '400', color: '#888', marginTop: 5, marginBottom: 10 }}>{item.categoryName}</Text>

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
    //#endregion

    renderFooter() {
        return (
            //Footer View with Load More button
            <View style={sTrying.footer}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.loadMoreData}
                    //On Click of button calling loadMoreData function to load more data
                    style={styles.loadMoreBtn}>
                    <Text style={styles.btnText}>Load More</Text>
                    {this.state.fetching_from_server ? (
                        <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
                    ) : null}
                </TouchableOpacity>
            </View>
        );
    }
    render() {

        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');

        if (!this.props.loading) {

            console.log('render', this.props.productData)

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
                                    {index % 2 == 0 ? this.returnLeft(item) : this.returnRight(item)}
                                </View>
                            }
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                            ListFooterComponent={this.renderFooter.bind(this)}
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

const mapStateToProps = ({ productResponse, marketResponse }) => {

    return {
        loading: productResponse.loading, productData: productResponse.productData, marketData: marketResponse.marketData
    }
}

export default connect(mapStateToProps, { productList, productListAdd })(NewProductScreen)

