/**
* @ngdoc function
* @name falcon.controller.AdminContestCreateCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
  .controller('AdminContestCreateCtrl', ['$scope', '$state', 'CommonService', 'AdminService',
    function($scope, $state, CommonService, AdminService) {
    $scope.contestCreate = {};

    function init(){
        $scope.root.admin.showAddBtn = false;
    	$scope.contestCreate.currentState = 1;
    }

    $scope.contestCreate.backToList = function(){
    	$state.go('admin.contest');
    }

    init();
    
  }]);
}());
