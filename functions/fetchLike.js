var firebase = require("firebase/app")
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDvJNmJXsqCSmvOOej6omsjoQhr1yGou_M",
  databaseURL: "https://yinhow-blog.firebaseio.com", 
  storageBucket: 'yinhow-blog.appspot.com', 
  projectId: "yinhow-blog",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

exports.handler = async function(event, context, callback) {

	// const original = post.fields.slug;
    // const slug = original.substring(1, original.length-1);
    const slug = event.queryStringParameters.slug
    const post = await firebase.firestore().collection('post').doc(slug).get()
    const count = await post.data().count

    const response = {
    	statusCode: 200,
    	headers: {
			"Access-Control-Allow-Origin": "*"
		},
    	body: count
    }

	callback(null, response);
}