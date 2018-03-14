import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB9HVSjI6z9CgrY9wQbXrEXBVneTPu7_8I",
    authDomain: "joe-admin-panel.firebaseapp.com",
    databaseURL: "https://joe-admin-panel.firebaseio.com",
    projectId: "joe-admin-panel",
    storageBucket: "joe-admin-panel.appspot.com",
    messagingSenderId: "947823560209"
  };
  firebase.initializeApp(config);

export default firebase;
