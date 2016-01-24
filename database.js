var sqlite = require('sqlite3').verbose();
var dbfile = 'database_mmo.db';
var db = new sqlite.Database(dbfile);

function getAllChunks() {



}

function createUserAccount(name, password) {
	db.serialize(function() {
	  db.get("SELECT * FROM users WHERE name = ?", [name], function(err, user) {

	  	if(user) {
	  		return false;
	  	} else {
	  		var stmt = db.run("INSERT INTO lorem VALUES (?, ?, -1)", [name, password], function(err, res) {
	  			return !err;
	  		});
	  	}

	  });

	});
	db.close();
}

function getUser() {



}

function saveChunk() {



}

function saveEvents() {



}

function saveUser(user) {




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