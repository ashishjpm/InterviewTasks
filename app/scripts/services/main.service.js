'use strict';

/**
 *services/auth.service.js
 * ===========
 * This service is created to use provide service to Index controller.
 *
 * @class interviewTasks.services.MainService
 * @memberOf interviewTasks.services
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */
angular.module('interviewTasks.services')
.factory('MainService', function ($http, Settings, $state) {
	function getVideoLib(){
		return $http.get('/readfile');
	}
	return {
		getVideoLib: getVideoLib
	}
});