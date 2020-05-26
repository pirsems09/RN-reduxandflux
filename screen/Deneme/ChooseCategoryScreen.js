import React from 'react';

import { View, SafeAreaView, Text, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './sTrying';
import { connect } from 'react-redux';
import { categoryList } from '../../src/actions';
import { colors } from '../../src/util/Color';
import { withPreventDoubleClick, Snipper } from '../../src/util/Container';
import { Actions } from 'react-native-router-flux';

const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);
const width = Math.round(Dimensions.get('window').width);

class CategoryScreen extends React.Component {

    state = {
        checked: [
            { id: "1", case: false },
            { id: "2", case: false },
            { id: "3", case: false },
            { id: "4", case: false },
            { id: "5", case: false },
            { id: "6", case: false },
            { id: "7", case: false },
            { id: "8", case: false },
            { id: "9", case: false },
            { id: "10", case: false },
            { id: "11", case: false },
            { id: "12", case: false },
            { id: "13", case: false }
        ]
    }


    componentWillMount() {
        this.props.categoryList('false')
    }

    onChange(id) {

        /*
        
        const list = [];

        if (this.state.checked.length > 0) {

            this.state.checked.map((value) => {
                if (id == value.id) {
                    list.push({ id: id, case: !value.case })
                } else {
                    list.push({ id: value.id, case: value.case })
                }
            })
        }
        console.log(list)
        this.setState({ checked: list })

        */
    }


    returnItems = (item) => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.circleFrame, width: '100%', minHeight: 60 }}>
                    <TouchableHighlightEx onPress={() => { this.onChange(item.categoryID) }}>
                        <Text style={styles.textListDesc}>{item.categoryName}</Text>
                    </TouchableHighlightEx>
                </View>

            </View>
        )
    }


    render() {

        if (this.props.loading) {

            console.log('hey', this.props.loading)

            return (
                <Snipper />
            )
        }
        else {

            console.log('hey', this.props.categoryData)

            return (
                <SafeAreaView style={{ flexDirection: 'column', flex: 3, backgroundColor: colors.BACKGROUND }}>

                    <Text style={{ ...styles.textSubList, marginTop: 20, marginLeft: 20 }}>En çok hangilerini merak ediyorsun?</Text>

                    <ScrollView>

                        <FlatList
                            data={this.props.categoryData.data}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ flexGrow: 1, paddingLeft: 10, paddingRight: 10 }}
                            renderItem={({ item, index }) =>
                                <View style={{ flex: 1, flexDirection: 'column', marginTop: 20, marginRight: 10, marginLeft: 10, paddingBottom: 4 }}>
                                    {this.returnItems(item)}
                                </View>
                            }
                            numColumns={2}
                            keyExtractor={(item, index) => index}
                        />

                    </ScrollView>

                    <TouchableHighlightEx
                        style={styles.btn}
                        onPress={() => { Actions.home() }}>

                        <Text style={{ fontSize: 18, fontWeight: '900', color: colors.WHITE }}>Devam Et</Text>

                    </TouchableHighlightEx>

                </SafeAreaView >
            )
        }
    }
}

const mapStateToProps = ({ categoryResponse }) => {
    return {
        loading: categoryResponse.loading, categoryData: categoryResponse.categoryData
    }
}

export default connect(mapStateToProps, { categoryList })(CategoryScreen)

{


    /*

     <LinearGradient
                        height={100}
                        width={width}
                        colors={[colors.MAINCOLOR, colors.MAINCOLORDARK]}
                        rotation={45}
                        border={0}
                        style={{ justifyContent: 'center', alignItems: 'center' }} />

                    <View style={{ position: 'absolute', height: 90, width: '90%', alignSelf: 'center', marginTop: 40, flexDirection: 'row' }}>
                        <View style={{ ...styles.whiteFrame, flex: 1 }}>
                            <Text style={styles.textList}>Kategorilerini Belirle</Text>
                        </View>
                    </View>

    returnThreeItems = (name1, name2, name3) => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.circleFrame, minHeight: 60, marginLeft: '5%', marginRight: '2.5%', width: '100%', flex: 0.5 }}>
                    <TouchableHighlightEx onPress={() => { this.onChange(name1.id) }}>
                        <Text style={styles.textListDesc}>{name1.name}</Text>
                    </TouchableHighlightEx>
                </View>

                <View style={{ ...styles.circleFrame, minHeight: 60, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>

                    <TouchableHighlightEx onPress={() => { this.onChange(name2.id) }}>
                        <Text style={styles.textListDesc}>{name2.name}</Text>
                    </TouchableHighlightEx>
                </View>

                <View style={{ ...styles.circleFrame, minHeight: 60, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>
                    <TouchableHighlightEx onPress={() => { this.onChange(name3.id) }}>
                        <Text style={styles.textListDesc}>{name3.name}</Text>
                    </TouchableHighlightEx>
                </View>

            </View>
        )
    }

    returnTwoItems = (name1, name2) => {
        return (

            <View style={{ flex: 1, flexDirection: 'row' }}>

                <View style={{ ...styles.circleFrame, minHeight: 60, marginLeft: '5%', marginRight: '2.5%', width: '100%', flex: 0.5 }}>
                    <Text style={styles.textListDesc}>{name1.name}</Text>
                </View>

                <View style={{ ...styles.circleFrame, minHeight: 60, marginRight: '5%', marginLeft: '2.5%', width: '100%', flex: 0.5 }}>
                    <Text style={styles.textListDesc}>{name2.name}</Text>
                </View>

            </View>
        )
    }
    */
}