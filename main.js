
var connect = require('./connect');
var dbInterface  = require('./interface.js');
var assert = require('assert');

connect(function(error, conn) {
  if (error) {
    console.log(error);
  }
  db = conn;


  var doc = { title: 'Rogue One', year: 2016, director: 'Gareth Edwards' };

  dbInterface.insert(db, doc, function(error) {
    sleep(1000);
    db.collection('movies').count({ title: 'Rogue One' }, function(error, c) {
      assert.ifError(error);
      assert.equal(c, 1);
    });
    sleep(1000);
  });
});
