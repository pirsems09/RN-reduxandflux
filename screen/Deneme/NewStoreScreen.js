import React from 'react';

import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './sTrying';
import { connect } from 'react-redux';
import { marketList, marketList_demo } from './../../src/actions'
import { colors } from '../../src/util/Color';
import Icon from 'react-native-vector-icons/Entypo';
import { ENTRIES1 } from './../../src/util/entries';
import { LineFull, Snipper, withPreventDoubleClick, } from '../../src/util/Container';
import { Actions } from 'react-native-router-flux';
const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);

class NewStoreScreen extends React.Component {


    componentWillMount() {
        //this.props.marketList_demo()
        this.props.marketList()
    }

    render() {

        console.log(this.props.loading)

        if (!this.props.loading) {

            console.log('newstore', this.props.marketData)

            return (
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: colors.BACKGROUND }}>

                    <Text style={{ ...styles.textList, marginTop: 20, marginLeft: 30 }}>Marketler</Text>

                    <FlatList
                        data={this.props.marketData.data}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10 }}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, marginRight: 10, marginLeft: 10 }}>
                                <TouchableHighlightEx onPress={() => { Actions.newProduct({marketID: item.marketID})}}>
                                    <View style={{ ...styles.whiteFrame, width: '100%', flex: 0.5 }}>
                                        <Image style={{ width: '95%', height: 100, resizeMode: 'contain' }} source={{ uri: item.marketLogo }} />
                                        <LineFull />
                                        <Text style={styles.textListDesc}>{item.marketName}</Text>
                                    </View>
                                </TouchableHighlightEx>
                            </View>
                        }
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />

                </View >
            )
        } else {
            return (
                <Snipper />
            )
        }
    }
}

const mapStateToProps = ({ marketResponse }) => {

    return {
        loading: marketResponse.loading, marketData: marketResponse.marketData
    }
}

export default connect(mapStateToProps, { marketList, marketList_demo })(NewStoreScreen)

