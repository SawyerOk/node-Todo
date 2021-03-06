var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI);

module.exports = {mongoose};

// // mongoose 4.3.x
// var mongoose = require('mongoose');

// /* 
//  * Mongoose by default sets the auto_reconnect option to true.
//  * We recommend setting socket options at both the server and replica set level.
//  * We recommend a 30 second connection timeout because it allows for 
//  * plenty of time in most operating environments.
//  */
// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
//                 replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       

// var mongodbUri = 'mongodb://SLink:S123L@ds151014.mlab.com:51014/mydb';

// mongoose.connect(mongodbUri, options);
// var conn = mongoose.connection;             

// conn.on('error', console.error.bind(console, 'connection error:'));  

// conn.once('open', function() {
//   // Wait for the database connection to establish, then start the app.                         
// });

// module.exports = {mongoose};