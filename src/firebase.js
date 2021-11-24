//importando firebase a mi proyecto
import firebase from 'firebase/app';

import "firebase/firestore";

const firebaseConfig = {
//credenciales obtenidas de firebase
  apiKey: process.env.REACT_APP_apiKey,

  authDomain: process.env.REACT_APP_authDomain,

  projectId: process.env.REACT_APP_projectId,

  storageBucket: process.env.REACT_APP_storageBucket,

  messagingSenderId: process.env.REACT_APP_messagingSenderId,

  appId: process.env.REACT_APP_appId


};
//inicializo firebase
const app = firebase.initializeApp(firebaseConfig);

//trayendo referencia de firestore
export const firestore = firebase.firestore(app);