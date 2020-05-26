import React from 'react'
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './../../screen/Home/HomeScreen'
import SplashScreen from './../../screen/Splash/Splash'
import EmptyScreen from './../../screen/Empty/EmptyScreen'
import ErrorScreen from './../../screen/Empty/ErrorScreen'
import CategoryScreen from '../../screen/Deneme/ChooseCategoryScreen'
import StoreScreen from './../../screen/Kullanilmayan/StoreScreen'
import NewStoreScreen from './../../screen/Deneme/NewStoreScreen'
import CategoryListcreen from '../../screen/Deneme/CategoryListScreenAktuel'
import UserListScreen from '../../screen/Deneme/UserListScreen'
import ProductScreen from './../../screen/Kullanilmayan/ProductScreen'
import NewProductScreen from './../../screen/Deneme/NewProductScreen'
import CreateRentScreen from './../../screen/Create/CreateRent'
import LoginScreen from './../../screen/Login/LoginScreen'
import ListScreen from '../../screen/List/ListScreen';
import DetailScreen from '../../screen/List/DetailScreen';


const Routers = () => {
    return (
        <Router navBarButtonColor='#222' backButtonTextStyle={{ color: '#222' }} >
            <Scene key="root" >

                <Scene
                    initial
                    hideNavBar
                    key="splash"
                    component={SplashScreen}
                />

                <Scene
                    key="login"
                    hideNavBar
                    component={LoginScreen}
                />

                <Scene
                    key="home"
                    title="Anasayfa"
                    component={HomeScreen}
                />

                <Scene
                    key="empty"
                    title="Veri Yok"
                    component={EmptyScreen}
                />

                <Scene
                    key="newProduct"
                    title="Veri Yok"
                    component={NewProductScreen}
                />

                <Scene
                    key="error"
                    title="Error"
                    component={ErrorScreen}
                />

                <Scene
                    key="category"
                    title="Error"
                    component={CategoryScreen}
                />
                <Scene
                    key="categorylist"
                    title="Error"
                    component={CategoryListcreen}
                />
                <Scene
                    key="createRent"
                    title="Error"
                    component={CreateRentScreen}
                />

                <Scene
                    key="userList"
                    component={UserListScreen}
                />

                <Scene
                    key="list"
                    component={ListScreen}
                />
                <Scene
                    key="listDetail"
                    component={DetailScreen}
                />

                <Scene
                    key="store"
                    title="Error"
                    component={StoreScreen}
                />

                <Scene
                    key="newStore"
                    title="Error"
                    component={NewStoreScreen}
                />

                <Scene
                    key="product"
                    title="Ürünler"
                    component={ProductScreen}
                />

            </Scene>
        </Router>
    )
}

export default Routers


