import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLWFMWxCjK2FwAcuNz4E3oG52YI-rda4k",
  authDomain: "bidu-resource-ecommerce.firebaseapp.com",
  projectId: "bidu-resource-ecommerce",
  storageBucket: "bidu-resource-ecommerce.appspot.com",
  messagingSenderId: "241736788945",
  appId: "1:241736788945:web:88f2fc7db1db6b587ccef0",
  measurementId: "G-VNFLD94F8M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)