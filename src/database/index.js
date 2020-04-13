const mongoose = require('mongoose');

mongoose.connect('mongodb://eduardosantana01:endycsmu@mongodb.eduardosantanass.kinghost.net:27017/eduardosantana01', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
