let user = require('./../controllers/user_c'),
    thread = require('./../controllers/thread_c');

module.exports = function(app) {
    app.post('/login', function(req, res) {
        user.login(req, res)
    })
    app.get('/getCurrUser', function(req, res) {
        user.getCurrUser(req, res);
    })
    app.get('/show_user/:id', function(req, res) {
        console.log(req.params)
        user.show_user(req, res);
    })
    //create thread
    app.post('/add_thread', function(req, res){
        thread.add_thread(req, res);
    })
    app.get('/show_threads', function(req, res){
        thread.show_threads(req, res);
    })
    app.get('/logout', function(req, res){
        user.logout(req, res);
    })
}
