/**
* @ngdoc function
* @name falcon.controller.QuestionCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('QuestionCtrl', ['$scope', 'CommonService',
        function($scope, CommonService) {
        $scope.adminQuestion = {};

        function init(){
        	$scope.root.admin.showAddBtn = true;
        	$scope.root.adminSelected = "My Questions";
        	$scope.adminQuestion.type = ['All', 'MCQ', 'SCQ', 'Coding'];
        	$scope.adminQuestion.typeSelected = 'All';
        }
        init();
    }]);
}());
