import React from 'react';

import { View, FlatList, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styles from './sTrying';
import { connect } from 'react-redux';
import { colors } from '../../src/util/Color';
import { categoryList } from '../../src/actions'
import Icon from 'react-native-vector-icons/Entypo';
import { withPreventDoubleClick, LineFull, Snipper } from '../../src/util/Container';
import { Actions } from 'react-native-router-flux';

const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);

class CategoryListcreen extends React.Component {


    componentWillMount() {
        this.props.categoryList('false')
    }

    returnStoreItem2 = (item) => {
        return (


            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.whiteFrame, flexDirection: 'column', flex: 1, minHeight: 100, width: '100%' }}>
                    <Text style={{ ...styles.textSubList, alignContent: 'center' }}>{item.categoryName}</Text>
                    <View style={{ height: 40, justifyContent: 'flex-end' }}>
                        <View
                            style={{
                                height: 3,
                                width: "100%",
                                backgroundColor: "#CED0CE",
                            }}
                        />
                        <Icon color={colors.G_THREE} onPress={() => { }} name="heart-outlined" size={25} />
                    </View>
                </View>

            </View >
        )
    }


    render() {

        if (!this.props.loading) {

            return (
                <View style={{ flexDirection: 'column', flex: 3, backgroundColor: colors.BACKGROUND }}>

                    <Text style={{ ...styles.textList, marginTop: 20, marginLeft: 20 }}>Kategoriler</Text>

                    <ScrollView>

                        <FlatList
                            data={this.props.categoryData.data}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10 }}
                            renderItem={({ item }) =>
                                <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, marginRight: 10, marginLeft: 10 }}>
                                    <TouchableHighlightEx onPress={() => { Actions.newProduct({categoryID: item.categoryID}) }}>
                                        {this.returnStoreItem2(item)}
                                    </TouchableHighlightEx>
                                </View>
                            }
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />

                    </ScrollView>

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
        loading: categoryResponse.loading, categoryData: categoryResponse.categoryData
    }
}

export default connect(mapStateToProps, { categoryList })(CategoryListcreen)

