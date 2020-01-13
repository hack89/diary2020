import * as firebase from 'firebase'


var config = {
    apiKey: "AIzaSyCKQWENk9SRbmK4lsUovjYoD5A-QhPCFg0",
    authDomain: "react-app-233610.firebaseapp.com",
    databaseURL: "https://react-app-233610.firebaseio.com",
    projectId: "react-app-233610",
    storageBucket: "react-app-233610.appspot.com",
    messagingSenderId: "339278308016",
    appId: "1:339278308016:web:42421842672cbebc37d175"
};

firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();