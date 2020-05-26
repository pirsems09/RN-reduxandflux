import { Button, Overlay, Text } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';


export function ReturnJson(title, address, city, county, type, feet, princing, isSale) {

    const a = {
        'title': title,
        'adress': address,
        'feet': feet,
        'city': city,
        'county': county,
        'type': type,
        'princing': princing,
        'isSale': isSale
    }

    return a;

}

export const ReturnTypes = [
    {
        value: '0',
        label: 'Açık Hava Deposu'
    },
    {
        value: '1',
        label: 'Kapalı Depo'
    },
    {
        value: '2',
        label: 'Soğuk Hava Deposu'
    },
    {
        value: '3',
        label: 'Geleneksel Depo'
    },
    {
        value: '3',
        label: 'Yüksek Yoğunluklu Depo'
    },
    {
        value: '4',
        label: 'Otomatik Depo'
    }
]

export async function ChooseFile() {

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

    return new Promise(async (res, rej) => {

        await ImagePicker.showImagePicker(options, response => {

            console.log('Response = ', response);

            if (response.didCancel) {
                rej(response.didCancel)
                console.log('User cancelled image picker');
            } else if (response.error) {
                rej(response.error)
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                rej(response.customButton)
                console.log('User tapped custom button: ', response.customButton);
            } else {
                res(response.uri)
            }

        });
    });
};

// export class Modal extends React.PureComponent {

//     state = {
//         visible: false
//     }

//     toggleOverlay = () => {
//         setVisible(!visible);
//     };

//     render() {

//         return (
//             <Overlay isVisible={this.props.visible} onBackdropPress={toggleOverlay}>
//                 <Text>{this.props.alert}</Text>
//                 <Button onPress={() => this.setState(!visible)}></Button>
//             </Overlay>
//         )
//     }

// }