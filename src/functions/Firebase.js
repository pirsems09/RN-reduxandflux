import * as firebase from 'firebase'
import 'firebase/firestore';
import { USERID } from '../actions/types';

export function isLogin(authStateChanged) {

    firebase.auth().onAuthStateChanged((user) => {

        console.log(user);
        authStateChanged(user);

    });
}


export function AddItem(list, url, uid) {

    const { currentUser } = firebase.auth();

    var key = firebase.database().ref(url).push().key
    firebase.database().ref(url).child(key).set({ items: list })

}

export function AddItemObject(obj, tableName, addComplete) {

    //    const { currentUser } = firebase.auth();

    firebase.firestore()
        .collection(tableName)
        .add(obj)
        .then((snapshot) => snapshot.get())
        .then((rentdata) => addComplete(rentdata.data()))
        .catch((error) => console.log('AddItemObject  error => ', error))

}

export function GetItems(url) {

    var list = [];
    var items = firebase.database().ref(url);

    items.on('value', (snap) => {

        snap.forEach(child => {

            var item = child.val()

            list.push({ id: child.key, modal: item })

        })
    })

    return list

}

export async function GetObjItems(tableName) {

    var list = [];

    var snapshot = await firebase.firestore()
        .collection(tableName)
        // .orderBy('createAt')
        .get()

    snapshot.forEach((doc) => {
        list.push(doc.data())
    });

    console.log('LİSTE', list)

    return list

}

export async function GetItemImages(refID) {

    var list = [];

    let image = firebase.storage.ref('image.jpg').getDownloadURL();

    alert(image)

    return list

}
export async function UploadPhoto(uri) {

    const { currentUser } = firebase.auth()

    var path =  await ('photos/' + USERID.data + '/' + Date.now() + '.jpg');


    return new Promise(async (res, rej) => {

        const response = await fetch(uri);
        const file = await response.blob();
        var metadata = {
            contentType: 'image/jpeg',
        };
        let upload = firebase
            .storage()
            .ref(path)
            .put(file, metadata);

        upload.on(
            "state_changed",
            snapshot => { },
            err => {
                rej(err)
            },
            async () => {
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url);
            }
        )

    })

}


// export async function UploadPhoto(uri) {

//     const { currentUser } = firebase.auth()

//     const path = '';
//     path.concat('photos/', USERID.data, '/', Date.now(), '.jpg')


//     return new Promise(async (res, rej) => {

//         const response = await fetch(uri);
//         const file = await response.blob();
//         var metadata = {
//             contentType: 'image/jpeg',
//           };
//        firebase
//         .storageRef
//                 .child('images/mountains.jpg')
//         .put(file, metadata);


//     })

//     // var list = [];

//     // let image = firebase.storage.ref('image.jpg').getDownloadURL();

//     // alert(image)

//     // return list

// }


export function updateItem(list, url) {


}