import React from 'react';

import { View, FlatList, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styles from './sTrying';
import { connect } from 'react-redux';
import { colors } from '../../src/util/Color';
import { categoryList, userList } from '../../src/actions'
import Icon from 'react-native-vector-icons/Entypo';
import { withPreventDoubleClick, LineFull, Snipper } from '../../src/util/Container';
import { Actions } from 'react-native-router-flux';

const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);

class UserListScreen extends React.Component {


    componentWillMount() {
        this.props.userList()
    }

    render() {

        if (!this.props.loading) {

            return (
                <View style={{ flexDirection: 'column', flex: 3, backgroundColor: colors.BACKGROUND }}>

                    <Text style={{ ...styles.textList, marginTop: 20, marginLeft: 20 }}>Kategoriler</Text>

                    <ScrollView>

                        <FlatList
                            data={this.props.userList.data}
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
        loading: categoryResponse.loading, categoryData: categoryResponse.categoryData, userList: categoryResponse.categoryData
    }
}

export default connect(mapStateToProps, { categoryList, userList })(UserListScreen)

