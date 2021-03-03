import firebase from 'firebase/app';
import "@firebase/firestore";

var app = firebase.initializeApp ({
    apiKey: "AIzaSyBCyyiDqioo5s_oBpL9M0xc_uqfu52XVKE",
    authDomain: "ecommerce-practica.firebaseapp.com",
    projectId: "ecommerce-practica",
    storageBucket: "ecommerce-practica.appspot.com",
    messagingSenderId: "615614765170",
    appId: "1:615614765170:web:f80a17ee4c121401498aeb"
  });
 
  export const getFirebase = () => {
      return app; 
  }

  export const getFirestore = () => {
      return firebase.firestore(app);
  }