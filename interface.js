
/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  db.collection("movies").insert(doc, function(err, ret){
     callback(err);
   });
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://m[o]ngodb.github.io/node-mongodb-native/2.0/api/C[or.html#s]rt
 */
exports.byDirector = function(db, director, callback) {

  var cursor = db.collection("movies").find({"director": director});
  cursor.sort([["title", 1]]);
  cursor.toArray(function(err, docs){
    callback(err, docs);
  });
};
