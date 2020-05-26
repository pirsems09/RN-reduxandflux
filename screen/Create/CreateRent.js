import React from 'react';

import { View, SafeAreaView, Text, ScrollView, TextInput, TouchableOpacity, Alert, Image, Button } from 'react-native';
import styles from './style';
import { withPreventDoubleClick, Snipper } from './../../src/util/Container';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from './../../src/util/Color';
import { ReturnJson, ReturnTypes, ChooseFile } from "../../src/functions/CreateFunction";
import { AddItemObject, UploadPhoto } from "../../src/functions/Firebase";

const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);

export default class ProductScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            rentTitle: '',
            holderType: '',
            search: '',
            jsonObject: '',
            title: '',
            feet: '',
            county: '',
            city: '',
            address: '',
            isSale: false,
            pricing: '',
            filePath: []
        }
    }

    handlerHoldType = holderType => {
        this.setState({ holderType });
    };

    onRentAdded = (rent) => {

        console.log('eklendi: ', rent)

        this.setState({ loading: false })

        Alert.alert(
            'Bilgilendirme',
            'İlanınız başarılı bir şekilde eklenmiştir',
            [
                { text: 'Tamam', onPress: () => null }
            ]
        )
    }

    createObject = () => {

        UploadPhoto(this.state.filePath[0])

        const { title, feet, county, city, address, pricing, holderType, isSale } = this.state;

        if (title !== '' && feet !== '' && county !== '' && city !== '' && address !== '' && pricing !== '') {

            this.setState({ loading: true })

            //AddItem(ReturnJson(title, address, city, county, holderType, feet, pricing, isSale), '/rentItems')
            AddItemObject(ReturnJson(title, address, city, county, holderType, feet, pricing, isSale), 'Rents', this.onRentAdded)


        } else {

            alert('Boş değer görmek istemiyorum!');

        }

    }

    openPickerImage = async () => {

        const a = this.state.filePath;
        a.push( await ChooseFile() )

        console.log( '->', a )

        this.setState({ filePath: a })

    }

    render() {

        const { loading } = this.state

        if (!loading) {
            return (
                <SafeAreaView style={styles.container}>

                    <View style={{ alignItems: 'center' }}>

                        <Text style={{ ...styles.headerText, marginTop: 20 }}>Bölgesel Depo</Text>
                        <Text style={{ ...styles.headerTextDesc, marginTop: 20 }}>Bölgesel Depo</Text>

                    </View>

                    <ScrollView style={styles.header}>

                        <TextInput
                            style={styles.textInput}
                            placeholder="İlan başlığı"
                            onChangeText={(title) => this.setState({ title })}
                            underlineColorAndroid='transparent'
                        />

                        <TextInput
                            style={styles.textInput}
                            placeholder="Metrekare"
                            onChangeText={(feet) => this.setState({ feet })}
                            underlineColorAndroid='transparent'
                        />

                        <View style={{ flexDirection: 'row' }}>

                            <TextInput
                                style={{ ...styles.textInput, flex: 1, marginRight: 5 }}
                                placeholder="İl"
                                onChangeText={(city) => this.setState({ city })}
                                underlineColorAndroid='transparent'
                            />

                            <TextInput
                                style={{ ...styles.textInput, flex: 1 }}
                                placeholder="İlçe"
                                onChangeText={(county) => this.setState({ county })}
                                underlineColorAndroid='transparent'
                            />

                        </View>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Adres"
                            onChangeText={(address) => this.setState({ address })}
                            underlineColorAndroid='transparent'
                        />

                        <View style={styles.textInput}>

                            <RNPickerSelect
                                placeholder={{
                                    label: 'Depo tipi',
                                    value: null,
                                    color: 'red',
                                }}
                                textInputProps={{ backgroundColor: 'fefefe' }}
                                onValueChange={(value) => this.handlerHoldType(value)}
                                items={ReturnTypes}

                            />
                        </View>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Kiralama ücreti"
                            onChangeText={(pricing) => this.setState({ pricing })}
                            underlineColorAndroid='transparent'
                        />

                        <View style={{ flexDirection: 'row' }}>


                            <TouchableHighlightEx
                                style={styles.textInput}
                                onPress={() => this.setState({ isSale: true })}>

                                <Text style={styles.text}>Pazarlık Var</Text>

                            </TouchableHighlightEx>

                            <TouchableHighlightEx
                                style={styles.textInput}
                                onPress={() => this.setState({ isSale: false })}>

                                <Text style={styles.text}>Pazarlık Yok</Text>

                            </TouchableHighlightEx>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            
                            <Image
                                source={{ uri: this.state.filePath[0] }}
                                style={{ width: 250, height: 250 }}
                            />

                            <Text style={{ alignItems: 'center' }}>
                                {this.state.filePath[0]}
                            </Text>

                            <Button title="Choose File" onPress={this.openPickerImage} />

                        </View>

                        <TouchableHighlightEx
                            style={styles.button}
                            onPress={() => this.createObject()}>

                            <Text style={{ ...styles.text, fontWeight: 'bold', color: colors.WHITE }}>Kayıt Et</Text>

                        </TouchableHighlightEx>

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
}