/**
* @ngdoc function
* @name falcon.controller.contestList
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('ContestListCtrl', ['$scope', 'CommonService',
    	function($scope, CommonService) {
    	$scope.contestList = {};

    	function init(){
    	}

        init();
    }]);
}());
