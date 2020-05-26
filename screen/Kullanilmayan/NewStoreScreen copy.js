import React from 'react';

import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import styles from './sTrying';
import { connect } from 'react-redux';
import { marketList } from './../../src/actions'
import { colors } from '../../src/util/Color';
import Icon from 'react-native-vector-icons/Entypo';
import { ENTRIES1 } from './../../src/util/entries';
import { LineFull } from '../../src/util/Container';

class NewStoreScreen extends React.Component {


    componentDidMount() {
        this.props.marketList()
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

    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: colors.BACKGROUND }}>

                <Text style={{ ...styles.textList, marginTop: 20, marginLeft: 30 }}>Paste ve Süt Ürünleri</Text>

                <FlatList
                    data={ENTRIES1}
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

            </View >
        )
    }
}

const mapStateToProps = ({ marketResponse }) => {

    return {
        loading: marketResponse.loading, marketData: marketResponse.marketData
    }
}

export default connect(mapStateToProps, { marketList })(NewStoreScreen)

