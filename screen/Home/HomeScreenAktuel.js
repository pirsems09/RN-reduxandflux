import React from 'react';

import { View } from 'react-native';
import styles from './sHome';
import { connect } from 'react-redux';
import TabBar from "@mindinventory/react-native-tab-bar-interaction";
import AllScreen from '../Kullanilmayan/AllScreen';
import NewStoreScreen from '../Deneme/NewStoreScreen';
import CategoryListScreen from '../Deneme/CategoryListScreen';
import { USERID, CATEGORYID } from '../../src/actions/types';

class HomeScreen extends React.Component {

    componentDidMount() {
        //USERID.data = 'ECA05FEF-9660-4938-9E86-E9F0CBE51C94'
       // CATEGORYID.data = '1EAF4D0C-9404-431B-BBCA-E9607448A290'
    }

    render() {

        return (

            <TabBar>
                <TabBar.Item
                    icon={require('./../../src/assets/icons/store.png')}
                    selectedIcon={require('./../../src/assets/icons/store.png')}
                    title="Tab3"
                    screenBackgroundColor={{ backgroundColor: 'white' }}
                >
                    <View style={{ ...styles.container, marginBottom: 100 }}>
                        <NewStoreScreen />
                    </View>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('./../../src/assets/icons/home.png')}
                    selectedIcon={require('./../../src/assets/icons/home.png')}
                    title="Tab1"
                    screenBackgroundColor={{ backgroundColor: 'white' }}
                >
                    <View style={{ ...styles.container, marginBottom: 100 }}>
                        <AllScreen />
                    </View>
                </TabBar.Item>
                <TabBar.Item
                    icon={require('./../../src/assets/icons/brochure.png')}
                    selectedIcon={require('./../../src/assets/icons/brochure.png')}
                    title="Tab3"
                    screenBackgroundColor={{ backgroundColor: 'white' }}
                >
                    <View style={{ ...styles.container, marginBottom: 120 }}>
                        <CategoryListScreen />
                    </View>
                </TabBar.Item>
            </TabBar>
        );
    }
}




const mapStateToProps = ({ homeResponse }) => {

    return {
        loading: homeResponse.loading
    }
}

export default connect(mapStateToProps, {})(HomeScreen)

