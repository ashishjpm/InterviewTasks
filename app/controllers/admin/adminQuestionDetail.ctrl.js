/**
* @ngdoc function
* @name falcon.controller.QuestionDetailCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('QuestionDetailCtrl', ['$scope', 'CommonService',
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
