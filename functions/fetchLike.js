// var firebase = require("firebase/app")
// require("firebase/firestore");
var firebase = require("./serverlessConfig")

// const firebaseConfig = {
//   apiKey: "AIzaSyDvJNmJXsqCSmvOOej6omsjoQhr1yGou_M",
//   databaseURL: "https://yinhow-blog.firebaseio.com", 
//   storageBucket: 'yinhow-blog.appspot.com', 
//   projectId: "yinhow-blog",
// };

exports.handler = async function(event, context, callback) {

	// firebase.initializeApp(firebaseConfig);
	// firebase.firestore();
	// const original = post.fields.slug;
    // const slug = original.substring(1, original.length-1);
    const slug = event.queryStringParameters.slug

    const count = await firebase.firestore().collection('post').doc(slug).get()
    .then(function(post) {
    	// console.log("post", post.data())
    	return post.data().count
    })
    console.log(count) // this fetches the right data
    // but somehow lambda function time out
    // OMG below fixes it..
    // context.callbackWaitsForEmptyEventLoop = false;

    return {
    	statusCode: 200,
    	headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json"
		},
    	body: JSON.stringify({
    		message: "success",
    		input: count
    	})
    }

	// callback(null, response);
}