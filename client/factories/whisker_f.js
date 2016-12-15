app.factory('whiskerFactory', function($http){
    let factory = {};

    factory.add_thread = function(new_thread, cb){
        $http.post('/add_thread',new_thread).then(function(output){
            cb()
        })
    }
    factory.show_threads = function(cb){
        $http.get('/show_threads').then(function(output){ 
            cb(output.data)
        })
    }

    return factory;
})
