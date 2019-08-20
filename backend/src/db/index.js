const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest', { useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true });
//Original mongoose.connect('mongodb://localhost/noderest');

mongoose.Promise = global.Promise;

module.exports = mongoose;