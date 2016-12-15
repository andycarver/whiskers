let user = require('./../controllers/user_c')

module.exports = function(app) {
    app.post('/login', function(req, res) {
        user.login(req, res)
    })
}