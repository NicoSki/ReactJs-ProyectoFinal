import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDeKPvoZKrNWJ1sith0jhvLi0AiLJJ84rE",
  authDomain: "rym-burgers.firebaseapp.com",
  projectId: "rym-burgers",
  storageBucket: "rym-burgers.appspot.com",
  messagingSenderId: "256025848377",
  appId: "1:256025848377:web:c19e74b3c67fab9d51bbe8",
};


const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore(){
    return firebase.firestore(app)
}
