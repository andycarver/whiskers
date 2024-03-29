let mongoose = require('mongoose'),
    fs = require('fs'),
    path = require('path'),
    models_path = path.join(__dirname + './../models');

mongoose.Promise = global.Promise// makes mongoose promise use JS native promises
mongoose.connect('mongodb://localhost/whiskers');

fs.readdirSync(models_path).forEach(function(file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
})
