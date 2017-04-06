/**
 * @name interviewTasks
 * @description
 * # interviewTasks
 * @author Ashish Mishra <ashishjpm@gmail.com>
 * Main router of the application.
 */

angular.module('interviewTasks.router', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise("/login");
    
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "app/views/login.html",
      title:'Login',
      controller:"AuthCtrl"
    })
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "app/views/main.html",
      title:'Main',
      controller:"MainCtrl"
    })
});