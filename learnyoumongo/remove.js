var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var _id = process.argv[2]

mongo.connect(url, function(err, db) {
	var collection = db.collection('parrots')
	collection.remove({
		$set: {
			_id: +_id
		}
	}, callback).toArray(function(err, documents) {
		console.log(documents)
		db.close()
	})
})