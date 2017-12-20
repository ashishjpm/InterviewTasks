/**
 * Main router for the applications
 * @namespace falcon
 * @author Ashish Mishra <ashishjpm@gmail.com>
 */
falcon
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //$urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/partials/login/login.html',
            controller: 'LoginCtrl'
        })

    //=========  Home routes  =========    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/partials/home/home.html',
            abstract: true
        })
    $stateProvider
        .state('home.contestList', {
            url: '/contestList',
            templateUrl: 'app/partials/home/contestList/contestList.html',
            controller: 'ContestListCtrl'
        })
    $stateProvider
        .state('home.contestDetail', {
            url: '/contestDetail',
            templateUrl: 'app/partials/home/contestDetail/contestDetail.html',
            controller: 'ContestDetailCtrl'
        })

    //=========  Admin routes  =========
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/partials/admin/admin.html',
            abstract: true
        })
    $stateProvider
        .state('admin.contest', {
            url: '/contest',
            templateUrl: 'app/partials/admin/contest/contest.html',
            controller: 'AdminContestCtrl'
        })
    $stateProvider
        .state('admin.contestCreate', {
            url: '/contestCreate',
            templateUrl: 'app/partials/admin/contestCreate/contestCreate.html',
            controller: 'AdminContestCreateCtrl'
        })
    $stateProvider
        .state('admin.question', {
            url: '/question',
            templateUrl: 'app/partials/admin/question/question.html',
            controller: 'QuestionCtrl'
        })
});
