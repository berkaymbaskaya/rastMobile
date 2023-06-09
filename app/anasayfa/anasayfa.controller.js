(function () {

    'use strict';

    angular
        .module('app')
        .controller('AnasayfaController', AnasayfaController);

    AnasayfaController.$inject = ['$scope', '$rootScope', '$stateParams', '$state', '$location', '$window', '$timeout', '$http', '$interval', 'dataService'];

    function AnasayfaController($scope, $rootScope, $stateParams, $state, $location, $window, $timeout, $http, $interval, dataService) {
        //Call LocalStorage if exist assign variable
        if(JSON.parse(localStorage.getItem('localData'))){
            var existData = JSON.parse(localStorage.getItem('localData'));
        }
        // Call Local JSON Data from dataService
        dataService.getSocialMedia().then((res) => {
            var data = res.data;
            if (existData) {
                angular.forEach(existData, (item) => {
                    data.push(item);

                })
                console.log(data)
            }
            //Create Table
            const table = $('#myTable').DataTable({
                data: data,
                responsive: true,
                columns: [
                    { data: 'link' },
                    { data: 'ad' },
                    { data: 'aciklama' },
                ],
                language: {
                    lengthMenu: 'Sayfa başına _MENU_ kayıt gösteriliyor',
                    zeroRecords: 'EŞLEŞME BULUNAMADI',
                    info: 'Sayfa: _PAGE_/_PAGES_',
                    infoEmpty: 'Kayıt Bulunamadı',
                    infoFiltered: '(_MAX_ Toplam kayıt arasından uygun eşleşme bulunamadı)',
                    searchPlaceholder: ' Arama Yapınız...',
                    search: ''
                },
                dom: 'B<"clear">rfrtip',
                buttons: [
                    {
                        text: ' <i class="bi bi-plus-lg"></i> Yeni Hesap Ekle',
                        className: 'primary',
                        action: function () {
                            $('#myModal').modal('show');

                        }
                    }
                ]
            });
            // Add New Data
            $scope.newMedia = {link:'',ad:'',aciklama:''}
            $scope.saveData = () => {
                if($scope.newMedia.link ==  ''  || $scope.newMedia.ad  == '' || $scope.newMedia.aciklama == '' ){
                    console.log($scope.newMedia.link,$scope.newMedia.ad,$scope.newMedia.aciklama)
                    $('#toast_addFeatures_fail').toast('show')
                    return;
                }
                table.row.add({
                    "link": $scope.newMedia.link,
                    "ad": $scope.newMedia.ad,
                    "aciklama": $scope.newMedia.aciklama
                },
                ).draw()
                // Save New Data to LocalStorage
                console.log(existData)
                if (existData) {
                    console.log(existData)
                    existData.push($scope.newMedia)
                    localStorage.setItem('localData', JSON.stringify(existData));
                }
                if (!existData) {
                    existData=[];
                    existData.push($scope.newMedia);
                    console.log(existData)
                    localStorage.setItem('localData', JSON.stringify(existData));
                };

                // Clear Object
                $scope.newMedia = {link:'',ad:'',aciklama:''}
            }
        })

        $scope.closeModal = () => {
            $('#myModal').modal('hide');
        }

    }
})();
