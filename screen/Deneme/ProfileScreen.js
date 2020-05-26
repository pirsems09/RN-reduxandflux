import React from 'react';

import { View, Text, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../src/util/Color';
import { categoryList } from '../../src/actions'
import { LineFull, Linee, Snipper } from '../../src/util/Container';
import styles from './sTrying';
import ImageView from 'react-native-image-view';

const width = Math.round(Dimensions.get('window').width);

const images = [
    {
        source: {
            uri:
                'https://avatars.mds.yandex.net/get-pdb/49816/d9152cc6-bf48-4e44-b2d5-de73b2e94454/s800',
        },
        title: 'London',
    },
    {
        source: {
            uri:
                'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
        },
        title: 'Paris',
        width: 806,
        height: 720,
    },
];

class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0,
            isImageViewVisible: false,
        };

        this.renderFooter = this.renderFooter.bind(this);
    }

    componentWillMount() {
    }

    renderFooter({ title }) {
        const { likes } = this.state;

        return (
            <View style={styles.footer}>
                <Text style={styles.footerText}>{title}</Text>
                <TouchableOpacity
                    style={styles.footerButton}
                    onPress={() => {
                        const imageLikes = likes[title] + 1;
                    }}
                >
                    <Text style={styles.footerText}>♥</Text>
                    <Text style={[styles.footerText, { marginLeft: 7 }]}>
                        'likes[title]'
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {
        const { isImageViewVisible, imageIndex } = this.state;
        const images = images

        if (this.props.loading) {

            return (
                <View style={{ flexDirection: 'column', flex: 3, backgroundColor: colors.BACKGROUND }}>

                    <View style={{ flex: 0.5, justifyContent: 'center', alignSelf: 'center', }}>
                        <Text style={{ ...styles.textList, alignSelf: 'center', fontSize: 26 }}>Arig Glr</Text>
                    </View>

                    {/**  body  */}
                    <View style={{ flex: 2.5, borderTopLeftRadius: 20, paddingHorizontal: 14, borderTopRightRadius: 20, marginTop: 20, backgroundColor: 'white', flexDirection: 'column' }}>

                        <View style={{ ...styles.btn, backgroundColor: 'orange', right: 0, width: 120, height: 35, alignSelf: 'flex-end', marginTop: -20 }}>
                            <Text style={styles.textBtn}>Follow</Text>
                        </View>
                        <Image style={{ justifyContent: 'center', alignSelf: 'center', borderRadius: 20, resizeMode: 'contain', marginTop: -70, width: 130, height: 120 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>
                        <Text style={{ ...styles.textList, alignSelf: 'center', fontSize: 26, marginBottom: 5, marginTop: 5 }}>Arig Glr</Text>
                        <Text style={styles.textSubList}>Arig Glr</Text>

                        {/**  rank  */}
                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', marginRight: 14 }}>

                                <Text style={{ ...styles.textList, alignSelf: 'center', fontSize: 26, marginBottom: 5, marginTop: 5 }}>221</Text>
                                <Text style={styles.textLightDesc}>Takipçi Sayısı</Text>

                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', marginLeft: 14 }}>

                                <Text style={{ ...styles.textList, alignSelf: 'center', fontSize: 26, marginBottom: 5, marginTop: 5 }}>62</Text>
                                <Text style={styles.textLightDesc}>İşBaşı Sayısı</Text>

                            </View>
                        </View>
                        <LineFull />
                        {/**  header finish  */}

                        <ScrollView>

                            <Text style={{ ...styles.textList, color: 'black', fontSize: 24 }}>Fotoğraflar</Text>

                            <ScrollView indicatorStyle={'white'} autoscrollToTopThreshold={2} horizontal={true} style={{ marginLeft: 14, minHeight: 150, paddingBottom: 4, marginBottom: 20 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        alert(JSON.stringify(images)),
                                            this.setState({
                                                imageIndex: 0,
                                                isImageViewVisible: true,
                                            });
                                    }}
                                >
                                    <Image style={{ justifyContent: 'center', width: (width / 2.5), marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 240 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>

                                </TouchableOpacity>
                                <Image style={{ justifyContent: 'center', width: (width / 2.5), marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 240 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>
                                <Image style={{ justifyContent: 'center', width: (width / 2.5), marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 240 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>
                                <Image style={{ justifyContent: 'center', width: (width / 2.5), marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 240 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>

                            </ScrollView>

                            <ScrollView indicatorStyle={'white'} autoscrollToTopThreshold={2} horizontal={true} style={{ marginLeft: 14, minHeight: 150, paddingBottom: 4, marginBottom: 20 }}>


                                <Image style={{ justifyContent: 'center', width: 30, marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 30 }} source={require('./../../src/assets/img/icon.png')}></Image>
                                <Text style={{ ...styles.textLightDesc, justifyContent: 'center', alignSelf: 'center', marginRight: 30 }}>10 kişi {"\n"}sırada </Text>

                                <Image style={{ justifyContent: 'center', width: 60, marginRight: 10, alignSelf: 'center', borderRadius: 6, resizeMode: 'cover', height: 60 }} source={require('./../../src/assets/img/icon.png')}></Image>
                                <Image style={{ justifyContent: 'center', width: 60, marginRight: 10, alignSelf: 'center', borderRadius: 6, resizeMode: 'cover', height: 60 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>
                                <Image style={{ justifyContent: 'center', width: 60, marginRight: 10, alignSelf: 'center', borderRadius: 6, resizeMode: 'cover', height: 60 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>
                                <Image style={{ justifyContent: 'center', width: 60, marginRight: 10, alignSelf: 'center', borderRadius: 6, resizeMode: 'cover', height: 60 }} source={require('./../../src/assets/img/yemek.jpeg')}></Image>

                            </ScrollView>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf:'center',marginBottom: 5}}>
                                <Image style={{ justifyContent: 'center', width: 50, marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 50 }} source={require('./../../src/assets/img/icon.png')}></Image>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Buğra Tarçın</Text>
                                    <Text>Güzel eğlenceli bir etkinlikti</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems:'flex-end' }}>
                                    <Text>Puan</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '700', }}>7.9</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf:'center',marginBottom: 5}}>
                                <Image style={{ justifyContent: 'center', width: 50, marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 50 }} source={require('./../../src/assets/img/icon.png')}></Image>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Buğra Tarçın</Text>
                                    <Text>Güzel eğlenceli bir etkinlikti</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems:'flex-end' }}>
                                    <Text>Puan</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '700', }}>7.9</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf:'center',marginBottom: 5}}>
                                <Image style={{ justifyContent: 'center', width: 50, marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 50 }} source={require('./../../src/assets/img/icon.png')}></Image>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Buğra Tarçın</Text>
                                    <Text>Güzel eğlenceli bir etkinlikti</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems:'flex-end' }}>
                                    <Text>Puan</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '700', }}>7.9</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf:'center',marginBottom: 5}}>
                                <Image style={{ justifyContent: 'center', width: 50, marginRight: 10, alignSelf: 'center', borderRadius: 20, resizeMode: 'cover', height: 50 }} source={require('./../../src/assets/img/icon.png')}></Image>
                                <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 16, fontWeight: '700' }}>Buğra Tarçın</Text>
                                    <Text>Güzel eğlenceli bir etkinlikti</Text>
                                </View>
                                <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems:'flex-end' }}>
                                    <Text>Puan</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '700', }}>7.9</Text>
                                </View>
                            </View>

                        </ScrollView>

                        <ImageView
                            glideAlways
                            images={images}
                            imageIndex={imageIndex}
                            animationType="fade"
                            isVisible={isImageViewVisible}
                            renderFooter={this.renderFooter}
                            onClose={() => this.setState({ isImageViewVisible: false })}
                            onImageChange={index => {
                                console.log(index);
                            }}
                        />
                    </View>

                </View >
            )
        } else {
            return (
                <Snipper />
            )
        }
    }
}

const mapStateToProps = ({ categoryResponse }) => {

    return {
        loading: categoryResponse.loading, categoryData: categoryResponse.categoryData, userList: categoryResponse.categoryData
    }
}

export default connect(mapStateToProps, { categoryList })(ProfileScreen)

