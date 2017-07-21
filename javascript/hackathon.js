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

hackApp.controller("ownerDashboard", function($scope) {
    $scope.teamsByOwner = teamsByOwner;
    $scope.owner = mockOwner;
});

hackApp.component('alineHeader', {
  templateUrl: '../headerTemplate.html'
  

});

hackApp.controller('alineHeaderCtrl', function($scope, $http){
    this.data = {
        ownerId: 5,
    
    }

});

function popup() {
    alert("Hello World");
}

//Example of the Object on the Owner Dashboard Page
let teamsByOwner = {

    teams: [
        { 
            teamId: 1,
            teamName: 'Mantis',
            owners:[
                {
                    ownerId: 22,
                    name: 'Richard Simmons',
                    emailAddress: 'simmon@gmail.com',
                    type: 'ADL'
                }
            ],
            projects: [],
            resources: [],
            engagementRating:[
                {
                    score: 1,
                    teamId: 1
                },
                {
                    score: 3,
                    teamId: 1
                },
                {
                    score: 5,
                    teamId: 1
                }         
            ]
        },
        { 
            teamId: 2,
            teamName: 'Nights Watch',
            owners:[
                {
                    ownerId: 22,
                    name: 'Richard Simmons',
                    emailAddress: 'simmon@gmail.com',
                    type: 'ADL'
                }
            ],
            projects: [],
            resources: [],
            engagementRating:[
                {
                    score: 5,
                    teamId: 1
                },
                {
                    score: 3,
                    teamId: 1
                },
                {
                    score: 2,
                    teamId: 1
                }         
            ]
        }  

    ]

};

let mockOwner = {
    ownerId: 200,
    name: "Saul Hudson",
    type: 'ADL',
    emailAddress: 'slash@slashonline.com'
};
