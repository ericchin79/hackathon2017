var hackApp = angular.module('aline', []);

hackApp.controller('springCtrl', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});

hackApp.controller("groceryCtrl", function($scope) {
    $scope.products = ["Milk", "Bread", "Cheese"];
});

hackApp.component('alineHeader', {
  templateUrl: '../header.htm'
});

function popup() {
    alert("Hello World");
}