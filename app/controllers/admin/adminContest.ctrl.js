/**
* @ngdoc function
* @name falcon.controller.AdminContestCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
  .controller('AdminContestCtrl', ['$scope', 'CommonService', 'AdminService',
    function($scope, CommonService, AdminService) {
    $scope.adminContest = {};

    function init(){
    	// $scope.root.admin.showAddContest = true;
    	$scope.adminContest.type = ['All', 'Ongoing', 'Finished', 'Draft'];
    	$scope.adminContest.typeSelected = 'All';
        $scope.adminContest.list = [];
        updateAdminContestList();
    }

    function updateAdminContestList(){
        $scope.adminContest.list
        AdminService.getContestList().then(
            function(response){
                $scope.adminContest.list = response.date;
            },
            function(err){
                console.log(err);
            }
        );
    }

    init();
    
  }]);
}());
