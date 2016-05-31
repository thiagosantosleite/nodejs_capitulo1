var mongodb = require('mongodb');
//var uri = "mongodb://root:mongodb@192.168.217.41:27001,192.168.217.41:27002,192.168.217.41:27003/movies_c1?authSource=admin&readPreference=secondary&poolSize=30&auto_reconnect=true";
var uri = 'mongodb://@54.183.185.216:27020/testedb?authSource=admin&poolSize=30&auto_reconnect=true';

module.exports = function(callback) {
  mongodb.MongoClient.connect(uri, callback);
};
