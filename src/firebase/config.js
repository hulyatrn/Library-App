import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1-6qFlhRzugzqXJVa41SCb4r6_6ns39g",
    authDomain: "books-bd8f0.firebaseapp.com",
    projectId: "books-bd8f0",
    storageBucket: "books-bd8f0.appspot.com",
    messagingSenderId: "472431325771",
    appId: "1:472431325771:web:c4d3b9bfc66e468862d3ce"
  };

  initializeApp (firebaseConfig);

  const db=getFirestore();
const auth=getAuth();

  export{db,auth};