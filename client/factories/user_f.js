app.factory('userFactory', function($http, $location) {
    let factory = {};
    factory.getCurrUser = function(cb){
        $http.get('/getCurrUser').then(function(output){
            cb(output.data);
        })
    }

    factory.login = function(new_user, cb){
        $http.post('/login', new_user).then(function(output){
            if (output.data.status) {
                $location.url('/dash')
            }
            cb()
        })
    }
    factory.show_user = function(id,cb){

        $http.get('/show_user/'+ id).then(function(output){
            cb(output.data)
        })
    }
    return factory;
})
