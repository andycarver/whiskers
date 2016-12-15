app.controller('userController', function($scope, userFactory, $location, $routeParams) {
    $scope.curr_user = null;
    userFactory.getCurrUser(function(data){
        $scope.curr_user = data;
        if(!$scope.curr_user){
            $location.url('/login');
        }
    })
    $scope.login = function(){
        userFactory.login($scope.new_user,function(){
            userFactory.getCurrUser(function(data){
                $scope.curr_user = data;
            })
        });
    }
    userFactory.show_user($routeParams.id,function(user){    
        $scope.user = user;
    })
})
