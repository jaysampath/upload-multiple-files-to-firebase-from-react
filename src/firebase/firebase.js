import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5rRkY3yKmbEf8fqKxYPDunFEgXtC_3KA",
  authDomain: "fastmart-vendor-app-resources.firebaseapp.com",
  projectId: "fastmart-vendor-app-resources",
  storageBucket: "fastmart-vendor-app-resources.appspot.com",
  messagingSenderId: "118153537903",
  appId: "1:118153537903:web:7cc3a39c8572212b4c609a",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage;

