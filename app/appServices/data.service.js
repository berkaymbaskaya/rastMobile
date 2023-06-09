(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];
    
    function dataService($http) {
        var dataService = {};
        dataService.getSocialMedia = function () {
            return $http.get("../app/data/data.json")
        }
        return dataService;
    }
})();
