'use strict';

/**
 *services/auth.service.js
 * ===========
 * This service is created to use provide service to Index controller.
 *
 * @class interviewTasks.services.AuthService
 * @memberOf interviewTasks.services
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */
angular.module('interviewTasks.services')
.factory('AuthService', function ($http, Settings, $state) {
	function login(uname, password){
		$state.go('main');
	}
	return {
		login: login
	}
});