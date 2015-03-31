angular
    .module('madLibs', [])
    .controller('mainController', ['$scope', function($scope) {
        $scope.placeholders = ['female name', 'job title', 'tedious task', 'dirty task', 
            'celebrity', 'useless skill', 'adjective', 'obnoxious celebrity', 'huge number', 'male name'];
        $scope.words = [];
    }]);
