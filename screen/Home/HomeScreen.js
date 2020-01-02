import React from 'react';

import { View, SafeAreaView, Text } from 'react-native';
import styles from './sHome';
import { connect } from 'react-redux';
//import MapView from 'react-native-maps';

class HomeScreen extends React.Component {


    render() {
        return (

            <SafeAreaView>
                <View>
                </View>
            </SafeAreaView>
        )
    }
}




const mapStateToProps = ({ homeResponse }) => {

    return {
        //loading: homeResponse.loading, payrollsData: homeResponse.payrollsData
    }
}

export default connect(mapStateToProps, {})(HomeScreen)

