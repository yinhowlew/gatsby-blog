var firebase = require("firebase/app")
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDvJNmJXsqCSmvOOej6omsjoQhr1yGou_M",
  databaseURL: "https://yinhow-blog.firebaseio.com", 
  storageBucket: 'yinhow-blog.appspot.com', 
  projectId: "yinhow-blog",
};

exports.handler = function(event, context, callback) {

	firebase.initializeApp(firebaseConfig);
	firebase.firestore();
	// const original = post.fields.slug;
    // const slug = original.substring(1, original.length-1);
    const slug = event.queryStringParameters.slug
    console.log("slug", slug)
    const post = firebase.firestore().collection('post').doc(slug).get()
    console.log("post", post)
    const count = post.data().count
	console.log("count", count)

    const response = {
    	statusCode: 200,
    	headers: {
			"Access-Control-Allow-Origin": "*"
		},
    	body: count
    }

	callback(null, response);
}