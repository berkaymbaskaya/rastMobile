(function () {

    'use strict';

    angular
        .module('app')
        .directive('navbarBottom', navbarBottom)
        .directive('navbarTop', navbarTop);

    //navbartop
    function navbarTop() {
        return {
            templateUrl: 'app/navbar/navbar_top.html',
            controller: navbarTopController,
            controllerAs: 'vm',
            dataService: 'dataService'
            //resolve: {
            //    exams: function (authService) {
            //        return authService.isloginWithGuess()
            //            .then(function (response) { return response === true });
            //    }
            //},
        }
    }

    navbarTopController.$inject = ['$scope', '$rootScope', '$location', '$sce', '$timeout', '$state', '$window', 'filterFilter', 'dataService'];

    function navbarTopController($scope, $rootScope, $location, $sce, $timeout, $state, esriLoader, $window, filterFilter, dataService, authService) {

    }


    function navbarBottom() {
        return {
            templateUrl: 'app/navbar/navbar_bottom.html',
            controller: navbarBottomController,
            controllerAs: 'vm',
            dataService: 'dataService',
            resolve: {
                exams: function (dataService) {

                }
            },
        }
    }

    navbarBottomController.$inject = ['$scope', '$rootScope', '$timeout', '$state', 'esriLoader', '$window', 'filterFilter', 'dataService'];

    function navbarBottomController($scope, $rootScope, $timeout, $state, esriLoader, $window, filterFilter, dataService) {
    }





})();
