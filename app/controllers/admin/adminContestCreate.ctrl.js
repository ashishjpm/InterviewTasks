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
    $scope.adminContestCreateCtrl = {};

    function init(){
    	$scope.adminContestCreateCtrl.asd = "asdasd";
    }

    $scope.adminContestCreateCtrl.backToList = function(){
    	$state.go('admin.contest');
    }

    init();
    
  }]);
}());
