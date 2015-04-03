angular
    .module('madLibs', [])
    .controller('mainController', ['$scope', function($scope) {

        $scope.words = {
            'name': 'female name',
            'jobTitle': 'job title',
            'tediousTask': 'tediuous task',
            'dirtyTask': 'dirty task',
            'celebrity': 'celebrity',
            'uselessSkill': 'useless skill',
            'adjective': 'adjective',
            'obnoxious': 'obnoxious celebrity',
            'hugeNumber': 'huge number'
        };

        $scope.$watch('gender', function(newvalue, oldvalue) {
            if (newvalue === 'female') {
                $scope.subjectPronoun = 'she';
                $scope.objectPronoun = 'her';
                $scope.words['name'] = 'female name';
            } else {
                $scope.subjectPronoun = 'he';
                $scope.objectPronoun = 'his';
                $scope.words['name'] = 'male name';
            }
        }, true);

    }]);
