import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filePath: {},
        };
    }
    chooseFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = response.uri

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });

            }
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image
                        source={{ uri: this.state.filePath }}
                        style={{ width: 250, height: 250 }}
                    />
                    <Text style={{ alignItems: 'center' }}>
                        {this.state.filePath}
                    </Text>
                    <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


// import ImagePicker from 'react-native-image-picker';

// // More info on all the options is below in the API Reference... just some common use cases shown here
// const options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images',
//   },
// };

// /**
//  * The first arg is the options object for customization (it can also be null or omitted for default options),
//  * The second arg is the callback which sends object: response (more info in the API Reference)
//  */
// ImagePicker.showImagePicker(options, (response) => {
//   console.log('Response = ', response);

//   if (response.didCancel) {
//     console.log('User cancelled image picker');
//   } else if (response.error) {
//     console.log('ImagePicker Error: ', response.error);
//   } else if (response.customButton) {
//     console.log('User tapped custom button: ', response.customButton);
//   } else {
//     const source = { uri: response.uri };

//     // You can also display the image using data:
//     // const source = { uri: 'data:image/jpeg;base64,' + response.data };

//     this.setState({
//       avatarSource: source,
//     });
//   }
// });