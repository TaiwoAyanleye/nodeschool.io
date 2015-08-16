var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	var collection = db.collection('users')
	collection.update({
		$set: {
			age: 40
		}
	}, callback).toArray(function(err, documents) {
		console.log(documents)
		db.close()
	})
})