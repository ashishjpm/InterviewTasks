/**
 * @ngdoc function
 * @name interviewTasks.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('AuthCtrl', ['$scope', '$timeout', '$state', 'AuthService', function ($scope, $timeout, $state, AuthService) {
    //Global variables

    function initCtrl() {
        //Init scope variables
        $scope.userData = {
        	username: "",
        	password: ""
        };
    }

    $scope.signin = function(){
    	AuthService.login($scope.userData.username, $scope.userData.password);
    }

    initCtrl();

}]);