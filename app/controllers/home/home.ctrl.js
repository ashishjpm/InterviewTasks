/**
* @ngdoc function
* @name falcon.controller.HomeCtrl
* @description controller for Root model
* @author Ashish Mishra <ashishjpm@gmail.com>
*/

;
(function() {
 falcon
    .controller('HomeCtrl', ['$scope', 'CommonService',
    	function($scope, CommonService) {
    	$scope.home = {};

    	function init(){
    		$scope.home.asdasd = 1412;
    	}

        init();
    }]);
}());
