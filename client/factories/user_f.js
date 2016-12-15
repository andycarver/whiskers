app.factory('userFactory', function($http, $location) {
    let factory = {};

    factory.login = function(new_user) {
        $http.post('/login', new_user).then(function(output) {
            if (output.data.status) {
                $location.url('/dash')
            }
        })
    }

    return factory;
})