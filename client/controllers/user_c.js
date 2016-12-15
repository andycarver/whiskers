app.controller('userController', function($scope, userFactory) {
    $scope.login = function() {
        userFactory.login($scope.new_user)
    }
})