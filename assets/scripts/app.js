function unpack(input) {
    return input.split(/(?=[A-Z])/).join(' ').toLowerCase();
};

angular
    .module('madLibs', ['ngAnimate'])
    .controller('mainController', ['$scope', function($scope) {

        var words = {
            'name': 'name',
            'jobTitle': 'job title',
            'tediousTask': 'tediuous task',
            'dirtyTask': 'dirty task',
            'celebrity': 'celebrity',
            'uselessSkill': 'useless skill',
            'adjective': 'adjective',
            'obnoxiousCelebrity': 'obnoxious celebrity',
            'hugeNumber': 'huge number'
        };

        // http://goo.gl/fnsO2P
        var resetWords = JSON.parse(JSON.stringify(words));

        $scope.words = words;
        $scope.subjectPronoun = 'he/she';
        $scope.objectPronoun = 'his/her';

        $scope.submit = function(){
            if($scope.madLibForm.$valid) {
                $scope.isSubmitted = true;
            }
        };

        //better way to do reset?
        $scope.reset = function() {
            var object = resetWords;
            for (var property in object) {
                if(object.hasOwnProperty(property)){
                    $scope.words[property] = unpack(object[property]);
                }
            }
            $scope.isSubmitted = !$scope.isSubmitted;
        }

    }])
    .filter('unpack', function(){
        return function(input){
            return unpack(input);
        }
    });
