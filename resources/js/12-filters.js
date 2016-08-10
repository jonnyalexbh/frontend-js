angular.module('myApp', []).controller('personCtrl', function ($scope) {
    $scope.firstName = "Jonny",
            $scope.lastName = "Lopez",
            $scope.fullName = function () {
                return $scope.firstName + " " + $scope.lastName;
            }
});

var app = angular.module('myApp', []);
app.controller('costCtrl', function ($scope) {
    $scope.quantity = 2;
    $scope.price = 2.200;
});



angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Hege', country: 'Sweden'},
        {name: 'Kai', country: 'Denmark'}
    ];
});
