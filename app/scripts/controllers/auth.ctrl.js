/**
 * @ngdoc function
 * @name interviewTasks.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('AuthCtrl', ['$scope', '$state', function ($scope, $state) {
    //Global variables

    function initCtrl() {
        //Init scope variables
        $scope.email;
    }

    initCtrl();

}]);