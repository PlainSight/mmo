var sqlite = require('sqlite3').verbose();
var dbfile = 'database_mmo.db';
var db = new sqlite.Database(dbfile);

exports.getAllChunks = function () {



}

exports.createUserAccount = function(name, password) {
	db.serialize(function() {
	  db.get("SELECT * FROM users WHERE name = ?", [name], function(err, user) {

	  		console.log(err);
	  		console.log(user);

	  	if(user) {
	  		return false;
	  	} else {
	  		db.run("INSERT INTO users VALUES (?, ?, -1)", [name, password], function(err2, res) {
  				console.log(err2);
  				console.log(res);
  				return !err;
	  		});
	  	}

	  });

	});
}

exports.getUser = function() {



}

exports.saveChunk = function() {



}

exports.saveEvents = function() {



}

exports.saveUser = function(user) {




}

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();