//importando firebase a mi proyecto
import firebase from 'firebase/app';

import "firebase/firestore";

const firebaseConfig = {
//credenciales obtenidas de firebase
  apiKey: "AIzaSyB6dPeXx5zArDoyo61VTFdCUFmc6ZpbZA4",

  authDomain: "my-app-9da22.firebaseapp.com",

  projectId: "my-app-9da22",

  storageBucket: "my-app-9da22.appspot.com",

  messagingSenderId: "768011777806",

  appId: "1:768011777806:web:dacb027d61be2772f3c95f"


};
//inicializo firebase
const app = firebase.initializeApp(firebaseConfig);

//trayendo referencia de firestore
export const firestore = firebase.firestore(app);