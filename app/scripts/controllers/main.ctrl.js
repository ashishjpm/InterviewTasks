/**
 * @ngdoc function
 * @name interviewTasks.controller:MainCtrl
 * @description
 * # MainCtrl
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Controller of the interviewTasks
 */
angular.module('interviewTasks.controllers')
.controller('MainCtrl', ['$scope', 'MainService', function ($scope, MainService) {
    //Global variables

    function initCtrl() {
        //Init scope variables
        $scope.currentVideoLib;
        MainService.getVideoLib().then(function(response){
        	$scope.currentVideoLib = response.data;
	        $scope.videoList = Object.keys($scope.currentVideoLib);
	        $scope.currentVideo = 0;
	        $("source").attr("src",$scope.videoList[$scope.currentVideo]);
	        $scope.title = $scope.currentVideoLib[$scope.videoList[$scope.currentVideo]].title;

		    videoEl.load().then(function () {
		        return videoEl.play();
		    })
        },
        function(err){});

		var videoEl = document.getElementById("my-video");
	    var player = new YoutubeVideo({
	        el: videoEl
	    });

	    videoEl.addEventListener('ended', function () {
	    	delete player;
	    	
		    ($scope.currentVideo < $scope.videoList.length -1) ? $scope.currentVideo =+ 1 : alert('all done');
	        $("source").attr("src",$scope.videoList[$scope.currentVideo]);
	        $scope.title = $scope.currentVideoLib[$scope.videoList[$scope.currentVideo]].title;
	        $scope.$digest();
	        $('.video-wrapper').replaceWith(function() {
			 	return $('video', this);
			});
	        var player = new YoutubeVideo({
		        el: videoEl
		    });
	        videoEl.load().then(function () {
		        return videoEl.play();
		    })
	    });
    }

    $scope.changeVideo = function(newurl){
    	delete player;
    	
		var videoEl = document.getElementById("my-video");
        $("source").attr("src",newurl);
        $scope.title = $scope.currentVideoLib[newurl].title;
        $('.video-wrapper').replaceWith(function() {
		 	return $('video', this);
		});
        var player = new YoutubeVideo({
	        el: videoEl
	    });
        videoEl.load().then(function () {
	        return videoEl.play();
	    })
    }

    initCtrl();

}]);
