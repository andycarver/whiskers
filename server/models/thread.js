let mongoose = require('mongoose'),
    threadSchema = mongoose.Schema({
        title: String,
        desc: String,
        category: String,
        _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        _postz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
    });

mongoose.model('Thread', threadSchema)
