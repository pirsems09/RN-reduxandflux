import React from 'react';

import { View, SafeAreaView, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import SecondStyle from './component/SecondStyle'
import { SearchBar } from 'react-native-elements';
import { withPreventDoubleClick, Snipper } from './../../src/util/Container';
import { GetItems, GetObjItems } from "../../src/functions/Firebase";
import { TOKEN } from '../../src/actions/types';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../../src/util/Color';
const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);


export default class ProductScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: null,
            loading: true
        }
    }

    async getList() {

        var list = null;

        list = await GetObjItems('Rents');

        if (list !== null) {
            this.setState({ data: list, loading: false })
        }

    }

    updateSearch = search => {
        this.setState({ search });
    };

    render() {

        const { search, data, loading } = this.state;

        if (this.state.data == null) {
            this.getList()
        }

        if (!loading) {
            return (
                <SafeAreaView style={styles.container}>

                    <ScrollView>


                        <View style={{ marginVertical: 20 }}>
                            <Text style={{ fontWeight: '100', color: colors.G_SECOND, fontSize: 27 }}> En </Text>
                            <Text style={{ fontWeight: '700', color: colors.G_FIRST, fontSize: 27 }}> Yeniler </Text>
                        </View>

                        <ScrollView>

                            <FlatList
                                data={data}
                                showsVerticalScrollIndicator={false}
                                contentContainerStyle={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10 }}
                                renderItem={({ item }) =>
                                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, marginRight: 10, marginLeft: 10 }}>

                                        <TouchableHighlightEx onPress={() => { Actions.newProduct({ categoryID: item.categoryID }) }}>

                                            <SecondStyle item={item} />

                                        </TouchableHighlightEx>

                                    </View>
                                }
                                numColumns={1}
                            />

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