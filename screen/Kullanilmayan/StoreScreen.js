import React from 'react';

import { View, SafeAreaView, Text, Dimensions, ScrollView } from 'react-native';
import styles from '../Deneme/sTrying';
import { connect } from 'react-redux';
import { colors } from '../../src/util/Color';
//import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';
import { withPreventDoubleClick,LineFull } from '../../src/util/Container';

const width = Math.round(Dimensions.get('window').width);

class IEPPersonaScreen extends React.Component {

    returnStoreItem = () => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.whiteFrame, minHeight: 130, marginLeft: '5%', marginRight: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Text style={styles.textList}>Rasyotik</Text>
                    <Icon color={colors.G_THREE} onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30}  />
                </View>

                <View style={{ ...styles.whiteFrame, minHeight: 130, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Text style={styles.textList}>Rasyotik</Text>
                    <Icon color={colors.G_THREE} onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30}/>
                </View>

            </View>
        )
    }

    returnStoreItem2 = () => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.whiteFrame, minHeight: 130, marginLeft: '5%', marginRight: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Icon color={colors.G_THREE} onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30}  />
                    <LineFull />
                    <Text style={styles.textList}>Rasyotik</Text>
                </View>

                <View style={{ ...styles.whiteFrame, minHeight: 140, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>
                    <Icon onPress={() => Linking.openURL('https://www.facebook.com/rasyotek/')} style={{ margin: 5 }} name="facebook" size={30} color="grey" />
                    <Icon color={colors.G_THREE} onPress={() => { }} style={{ margin: 5 }} name="heart-outlined" size={30} />
                    <LineFull/>
                    <Text style={styles.textList}>Rasyotik</Text>
                </View>

            </View>
        )
    }


    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 3, backgroundColor: colors.WHITE }}>

                <Text style={{ ...styles.textList, marginTop: 20, marginLeft: 20 }}>Mağazalar</Text>

                <ScrollView>

                    {this.returnStoreItem2()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem()}
                    {this.returnStoreItem2()}
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

export default connect(mapStateToProps, {})(IEPPersonaScreen)

