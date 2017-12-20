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
        $scope.contestCreate.stepOne = {
            name: "QUESTION",
            description: "QUESTION",
            startDate: "2017-12-20T09:40:36.216Z",
            endDate: "2017-12-20T09:40:36.216Z",
            openContest: true,
            status: "DRAFT",
            duration: 30,
            type: "FIXED",
            maxTeamSize: 1
        };
    }

    $scope.create = function(){
        console.log('calling api', $scope.contestCreate.stepOne);
        AdminService.completeFirstStep($scope.contestCreate.stepOne).then(
        function(response){
            console.log(response);
            $scope.contestCreate.currentState += 1;
        });
    }

    $scope.contestCreate.backToList = function(){
    	$state.go('admin.contest');
    }

    init();
  }]);
}());
