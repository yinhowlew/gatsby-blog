var firebase = require("firebase/app")
require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  databaseURL: "https://yinhow-blog.firebaseio.com", 
  storageBucket: 'yinhow-blog.appspot.com', 
  projectId: "yinhow-blog",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

module.exports = firebase