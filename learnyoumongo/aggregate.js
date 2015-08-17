var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var match = { $match: { size: process.argv[2] } };
var group = { $group: { _id: 'total', total: { $avg: '$price' } } };

mongo.connect(url, function(err, db) {
	if (err) throw err
	var collection = db.collection('prices')
	collection.aggregate([ match, group
		]).toArray(function(err, results) {
			var o = results[0]
			console.log(Number(o.total).toFixed(2))
			db.close()
		})
})
