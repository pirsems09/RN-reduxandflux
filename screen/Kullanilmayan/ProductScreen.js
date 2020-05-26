import React from 'react';

import { View, SafeAreaView, Text, Dimensions, ScrollView, Image } from 'react-native';
import styles from '../Deneme/sTrying';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux';
import { colors } from '../../src/util/Color';
import Icon from 'react-native-vector-icons/Entypo';
import { withPreventDoubleClick, LineFull } from '../../src/util/Container';
const width = Math.round(Dimensions.get('window').width);

class ProductScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            price: '20 TL'
        }
    }

    returnStoreItem = () => {
        
        return (

            <View style={{marginLeft: '2.5%', marginRight: '2.5%'}}>
                <View style={{ flex: 1, flexDirection: 'row', }}>

                    <View style={{ flex: 0.4 }}>
                        <Image style={{ marginLeft: 10, width: '95%', height: '100%', resizeMode: 'contain' }} source={require('./../../src/assets/img/icon.png')} />
                    </View>

                    <View style={{ minHeight: 150, marginRight: '5%', marginLeft: '5%', width: '100%', flex: 0.6 }}>

                        <Text style={styles.textList}>Rasyotik</Text>

                        <View style={{ flexDirection: 'row' }} >
                            <Icon name="star" size={20} color={colors.G_THREE} />
                            <Icon name="star-outlined" size={20} color={colors.G_THREE} />
                            <Icon name="star-outlined" size={20} color={colors.G_THREE} />
                            <Icon name="star-outlined" size={20} color={colors.G_THREE} />
                            <Icon name="star-outlined" size={20} color={colors.G_THREE} />
                        </View>

                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.textListTitle}>Fiyat : </Text>
                            <Text style={styles.textListPrice}>{this.state.price}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }} >
                            <Text>İndirim oranı : </Text>
                        </View>

                    </View>

                    <View style={{ position: 'relative', height: '100%', marginTop: 10 }}>
                        <View style={{ backgroundColor: colors.EXTRA_LIGHT_GRAY, borderRadius: 10, padding: 5 }}>
                            <Icon name="star-outlined" size={20} color={colors.G_THREE} />
                        </View>
                    </View>


                </View>

                <LineFull />

            </View>

        )
    }


    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 3, backgroundColor: colors.WHITE }}>

                <Text style={{ ...styles.textList, marginTop: 20, marginLeft: 20 }}>Ürünler</Text>

                <ScrollView>

                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}

                </ScrollView>

            </View >
        )
    }
}

const mapStateToProps = ({ homeResponse }) => {

    return {
        loading: homeResponse.loading
    }
}

export default connect(mapStateToProps, {})(ProductScreen)

