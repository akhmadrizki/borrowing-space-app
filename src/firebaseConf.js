import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCHzjyWXaI6x2pdUD_PGwc_3_8LY8gq95k",
  authDomain: "rn-auth-c61d9.firebaseapp.com",
  projectId: "rn-auth-c61d9",
  storageBucket: "rn-auth-c61d9.appspot.com",
  messagingSenderId: "392912327497",
  appId: "1:392912327497:web:319186445a258fb0fec098"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export default firebase;