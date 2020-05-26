import React from 'react';

import { View, SafeAreaView, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { withPreventDoubleClick, Snipper } from '../../src/util/Container';
import { CheckBox } from 'react-native-elements'
import { colors } from '../../src/util/Color';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import { USERID, USERNAME, TOKEN, EMAIL, FIREBASE_START, FIREBASE_SUCCESS, FIREBASE_FAIL } from '../../src/actions/types';
import { connect } from 'react-redux';
import { isLogin } from '../../src/functions/Firebase';


const TouchableHighlightEx = withPreventDoubleClick(TouchableOpacity);

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: 'arif.glr@hotmail.com',
            pass: '',
            checked: false
        }
    }

    async componentWillMount() {

        const mail = await AsyncStorage.getItem('EMAIL')
        const isRemember = await AsyncStorage.getItem('REMEMBER')
        const token = await AsyncStorage.getItem('TOKEN')

        if (isRemember) {
            this.setState(mail)
        }

        console.log('ikinci gelişim önmli', token)

    }

    componentDidMount() {
        isLogin(this.onAuthStateChanged)
    }



    async componentWillUnmount() {
        await AsyncStorage.setItem('TOKEN', TOKEN.data)
    }


    //#region control

    onAuthStateChanged = (user) => {

        if (user !== null) {

            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;

            USERID.data = uid
            EMAIL.data = email
            USERNAME.data = displayName
            TOKEN.data = user.refreshToken

            Actions.home()
        }

    }




    control = (token) => {

        var errorCode = '';

        firebase.auth().signInWithCustomToken(token)
            .then(function (user) {

                console.log('signInWithCustomToken', user)
                Actions.home()

            })
            .catch(function (error) {
                // Handle Errors here.
                errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

    }



    //#endregion

    loginUser() {

        const { mail, pass } = this.state

        try {

            if (this.state.pass.length < 6) {
                alert('En az 6 karakterli şifre belirleyiniz')
            }

            firebase.auth().signInWithEmailAndPassword(mail, pass)
                .then((user) => {

                    console.log(user)

                    if (user) {

                        var displayName = user.user.displayName;
                        var email = user.user.email;
                        var uid = user.user.uid;

                        USERID.data = uid
                        EMAIL.data = email
                        USERNAME.data = displayName
                        TOKEN.data = user.refreshToken

                        //dispatch({ type: FIREBASE_SUCCESS })

                    } else {
                        // User is signed out.
                        // ...
                    }
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);

                    //dispatch({ type: FIREBASE_FAIL })

                });

        } catch (error) {
            alert(error.toString())
        }

    };

    singUpUser() {

        const { mail, pass } = this.state

        try {

            if (this.state.pass.length < 6) {
                alert('En az 6 karakterli şifre belirleyiniz')
            }

            firebase.auth().createUserWithEmailAndPassword(mail, pass)

        } catch (error) {

            alert(error.toString())

        }

    };


    signMailControl() {
        var user = firebase.auth().currentUser;
        user.updateEmail(this.state.mail).then(function () {
            // Update successful.
            alert('ok')
        }).catch(function (error) {
            // An error happened.
            alert()
        });
    }


    signOut() {

        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            console.log('User Logged Out!');
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }

    handlerCheck = async check => {

        console.log('checked', !this.state.checked)

        if (!this.state.checked == true) {
            await AsyncStorage.setItem('EMAIL', this.state.email)
        }

        this.setState({ checked: check })
        await AsyncStorage.setItem('REMEMBER', check.toString())

    }

    render() {
        const isOkey = this.props.loading !== null ? true : false

        if (isOkey && !this.props.loading) {
            return (
                <SafeAreaView style={styles.container}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ ...styles.headerText, marginTop: 20 }}>Giriş Yap</Text>
                    </View>

                    <View style={styles.header}>

                        <TextInput
                            style={{ ...styles.textInput, height: 45 }}
                            placeholder="E-posta"
                            onChangeText={(mail) => this.setState({ mail })}
                            underlineColorAndroid='transparent'
                            value={this.state.mail}
                        />

                        <TextInput
                            style={{ ...styles.textInput, height: 45 }}
                            placeholder="Şifre"
                            onChangeText={(pass) => this.setState({ pass })}
                            underlineColorAndroid='transparent'
                        />

                        <View style={{ flexDirection: 'row' }}>

                            <CheckBox
                                titleStyle={{ color: colors.TEXTCOLOR, fontWeight: '500', }}
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                title='Beni Hatırla'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                                checked={this.state.checked}
                                checkedColor={colors.MAINCOLOR}
                                onPress={() => this.handlerCheck()}
                            />

                        </View>


                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.loginUser()}>

                            <Text style={{ ...styles.text, fontWeight: 'bold', color: colors.WHITE }}>Giriş Yap</Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{ alignItems: 'center', width: '100%', bottom: 30, position: 'absolute' }}>

                        <Text style={{ ...styles.headerTextDesc, fontSize: 12, color: colors.TEXTLIGHT, marginTop: 20 }}>Kayıt yapmış değilseniz lütfen öncelikle kayıt olun. </Text>

                        <TouchableHighlightEx
                            style={{ ...styles.button, shadowColor: 'grey', marginHorizontal: 30, height: 35, padding: 8, backgroundColor: colors.main_color_accent }}
                            onPress={() => this.singUpUser()}>

                            <Text style={{ ...styles.text, fontWeight: 'bold', color: colors.WHITE }}>Kayıt Ol</Text>

                        </TouchableHighlightEx>
                    </View>


                </SafeAreaView >
            )
        } else {
            return (
                <Snipper />
            )
        }
    }
}


const mapStateToProps = ({ userResponse }) => {

    return {
        loading: userResponse.loading
    }
}

export default connect(mapStateToProps, {})(LoginScreen)





// loginUser() {

//     const { mail, pass } = this.state

//     try {

//         if (this.state.pass.length < 6) {
//             alert('En az 6 karakterli şifre belirleyiniz')
//         }

//         return (dispatch) => {

//             dispatch({ type: FIREBASE_START })

//             firebase.auth().signInWithEmailAndPassword(mail, pass)
//                 .then((user) => {

//                     console.log(user)

//                     if (user) {

//                         var displayName = user.user.displayName;
//                         var email = user.user.email;
//                         var uid = user.user.uid;

//                         USERID.data = uid
//                         EMAIL.data = email
//                         USERNAME.data = displayName
//                         TOKEN.data = user.refreshToken

//                         dispatch({ type: FIREBASE_SUCCESS })

//                     } else {
//                         // User is signed out.
//                         // ...
//                     }
//                 })
//                 .catch(function (error) {
//                     // Handle Errors here.
//                     var errorCode = error.code;
//                     var errorMessage = error.message;
//                     if (errorCode === 'auth/wrong-password') {
//                         alert('Wrong password.');
//                     } else {
//                         alert(errorMessage);
//                     }
//                     console.log(error);

//                     dispatch({ type: FIREBASE_FAIL })

//                 });
//         }

//     } catch (error) {
//         alert(error.toString())
//     }

// };