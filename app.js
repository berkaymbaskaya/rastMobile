(function () {

    'use strict';
    angular
        .module('app', ['ui.router', 'ngCookies'])
        .config(config)
        .controller('AppController', AppController)
        .run(run);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
    ];

    function config(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
    ) {

        $stateProvider
            .state('anasayfa', {
                url: '/anasayfa',
                templateUrl: 'app/anasayfa/anasayfa.html',
                controller: 'AnasayfaController'
            })
        $urlRouterProvider.otherwise('/anasayfa');
        $locationProvider.hashPrefix('');
    }
    function AppController($scope, $state, $rootScope) {

    }
    run.$inject = ['$rootScope', '$location', '$state'];

    function run($rootScope, $location, $state) {

    }


})();
