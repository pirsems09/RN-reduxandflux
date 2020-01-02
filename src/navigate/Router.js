import React from 'react'
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './../../screen/Home/HomeScreen'
import SplashScreen from './../../screen/Splash/Splash'
import EmptyScreen from './../../screen/Empty/EmptyScreen'
import ErrorScreen from './../../screen/Empty/ErrorScreen'


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
                    key="error"
                    title="Error"
                    component={ErrorScreen}
                />

            </Scene>
        </Router>
    )
}

export default Routers


