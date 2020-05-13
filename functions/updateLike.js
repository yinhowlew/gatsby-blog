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
    const slug = event.multiValueQueryStringParameters.slug
    const like = event.multiValueQueryStringParameters.like

    await firebase.firestore().collection("post").doc(slug).set({
      count: Number(like) + 1
    })

    context.callbackWaitsForEmptyEventLoop = false;

    const response = {
    	statusCode: 200,
    	headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json"
		},
    	body: JSON.stringify({
    		message: "update success!!",
    	})
    }

	callback(null, response);
}