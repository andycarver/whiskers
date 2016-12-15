let mongoose = require('mongoose'),
    userSchema = mongoose.Schema({
        name: String,
    });

mongoose.model('User', userSchema)