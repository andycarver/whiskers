app.controller('thread_c', function($scope,whiskerFactory){
    //shows all threads
    whiskerFactory.show_threads(function(threads){
        $scope.all_threads = threads;
    });
    //create a new thread
    $scope.add_thread = function(){
        whiskerFactory.add_thread($scope.thread, function(){
            $scope.thread = {};
            whiskerFactory.show_threads(function(threads){
                $scope.all_threads = threads;
            });
        })
    }
})
