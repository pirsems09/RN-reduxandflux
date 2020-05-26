import React from 'react';

import { View, SafeAreaView, Text, ScrollView, Image,TouchableOpacity, Dimensions } from 'react-native';
import styles from './style';
import { Snipper } from '../../src/util/Container';
import { ReturnTypes } from '../../src/functions/CreateFunction';
import { colors } from '../../src/util/Color';

const width = Math.round(Dimensions.get('window').width);

export default class DetailScreen extends React.Component {


    render() {

        const isLoading = this.props.item !== undefined ? true : false

        const item = this.props.item

        const type = ReturnTypes

        if (isLoading) {

            return (
                <SafeAreaView style={styles.container}>

                    <ScrollView style={{marginTop:20, marginLeft:20}}>

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


                        <ScrollView>

                            <Text style={styles.textTitle}> {item.title} </Text>
                            <Text style={styles.textSub}> {type[item.type].label} </Text>

                            <View style={styles.row}>

                                <View style={styles.boxOne}>

                                    <Text style={{ fontWeight: '800', fontSize: 27 }}> {item.feet} </Text>
                                    <Text style={{ fontWeight: '100', fontSize: 27 }}> Metrekare </Text>

                                </View>

                                <View style={styles.boxOne}>

                                    <Text style={{ fontWeight: '800', fontSize: 27 }}> {item.princing} </Text>
                                    <Text style={{ fontWeight: '100', fontSize: 27 }}> Fiyat </Text>

                                </View>

                            </View>


                            <View style={{ ...styles.boxOne, paddingVertical:10, flexDirection:'row', marginLeft:20, marginVertical:20, right:-5, flex:1 }}>

                                <View style={{ flex:1 }}>

                                    <Text style={{ fontWeight: '800', fontSize: 21, alignSelf:'flex-start' }}> {item.city} </Text>

                                </View>

                                <View style={{ flex:2.5}}>

                                    <Text style={{ fontSize: 16 }}> {item.adress} </Text>

                                </View>
                                
                            </View>

                            <TouchableOpacity style={styles.saveDark}>
                                <Text style={{alignSelf:'center', color:'white', fontSize: 16}}>
                                    Talep Et
                                </Text>
                            </TouchableOpacity>


                            <Text style={styles.textSub}> Haritada Göster {'>'} </Text>


                        </ScrollView>

                    </ScrollView>

                </SafeAreaView >
            )
        } else {
            return (
                <View>
                    <Snipper />
                </View>
            )
        }

    }

    onRowClick = () => {



    }

}