const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://f11equadros:endycsmu@f11-w2cla.mongodb.net/f11?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
