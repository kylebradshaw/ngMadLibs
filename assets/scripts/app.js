angular
    .module('madLibs', [])
    .controller('mainController', ['$scope', function($scope) {
        $scope.words = ['male name', 'Dirty task', 'Obnoxious celebrity', 'Job title', 'Celebrity', 'Huge number', 'Tedious task', 'Useless skill', 'Adjective']
    }]);
