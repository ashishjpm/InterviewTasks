/**
 * @name viatask
 * @description UI Router
 * Main router of the application.
 */

viatask
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/list');
    $stateProvider
    	.state('list', {
    		url: '/list',
    		templateUrl: 'app/partials/flight-list.html',
    		controller: 'ListCtrl'
    	})
});