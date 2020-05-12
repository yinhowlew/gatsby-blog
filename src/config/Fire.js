import firebase from 'firebase/app';
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvJNmJXsqCSmvOOej6omsjoQhr1yGou_M",
  databaseURL: "https://yinhow-blog.firebaseio.com", 
  storageBucket: 'yinhow-blog.appspot.com', 
  projectId: "yinhow-blog",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;