var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var firstName = process.argv[2];
var lastName = process.argv[3];


MongoClient.connect(url, function(err, db) {
	if (err) throw err
	var users = db.collection('users');
	users.insert({
		firstName: firstName
		, lastName: lastName
	},function(err, docs) {
		if (err) throw err
			console.log(JSON.stringify( {
				firstName: firstName
				, lastName: lastName
			}))
			db.close()
	})
})