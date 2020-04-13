const mongoose = require('mongoose');

mongoose.connect('mongodb://f11eduardos:endycsmu@geonosis.mongodb.umbler.com:50516/f11', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
