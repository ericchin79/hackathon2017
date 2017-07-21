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

hackApp.controller("resourceDashboardCtrl", function($scope) {
    // $http.get('http://rest-service.guides.spring.io/greeting').
    //     then(function(response) {
    //         $scope.teamsByOwner = response.data;
    //         $scope.owner = response.data;
    //     });
    $scope.teamsByOwner = teamsByOwner;
    $scope.owner = mockOwner;
});
hackApp.controller("ownerDashboardCtrl", function($scope) {
    // $http.get('http://rest-service.guides.spring.io/greeting').
    //     then(function(response) {
    //         $scope.teamsByOwner = response.data;
    //         $scope.owner = response.data;
    //     });
    $scope.teamsByOwner = teamsByOwner;
    $scope.owner = mockOwner;
});

hackApp.controller("resourceCtrl", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=7').
         then(function(response) {
             $scope.resource = response.data;
             $scope.name = response.data.Name;
		 $scope.team = response.data.TeamName;
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("teamCtrl", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/teams/getbyid?id=2').
         then(function(response) {
             $scope.resource = response.data;
             $scope.positions = response.data.Positions;
		 	$scope.engagementHistory = response.data.EngagementHistory;
			$scope.owners = response.data.Owners;
			$scope.workload = response.Workload;
			$scope.teamName = response.data.TeamName;
			         });
});

			
hackApp.controller("resourceCtrl7", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=7').
         then(function(response) {
             $scope.resource = response.data;
             $scope.name = response.data.Name;
		 $scope.team = "Mantis";
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("resourceCtrl6", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=6').
         then(function(response) {
             $scope.resource = response.data;
             $scope.name = response.data.Name;
		 $scope.team = response.data.TeamName;
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("resourceCtrl10", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=10').
         then(function(response) {
             $scope.resource = response.data;
             $scope.name = response.data.Name;
		 $scope.team = response.data.TeamName;
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("resourceCtrl11", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=11').
         then(function(response) {
         $scope.resource = response.data;
         $scope.name = response.data.Name;
		 $scope.team = response.data.TeamName;
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("resourceCtrl14", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=14').
         then(function(response) {
         $scope.resource = response.data;
         $scope.name = response.data.Name;
		 $scope.team = response.data.TeamName;
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("resourceCtrl15", function($scope,$http) {
     $http.get('http://nwaline.azurewebsites.net/api/resources/getByID?id=15').
         then(function(response) {
         $scope.resource = response.data;
         $scope.name = response.data.Name;
		 $scope.team = response.data.TeamName;
		 $scope.email = response.data.EmailAddress;
		 $scope.jobName = response.data.JobName;
         });
});

hackApp.controller("dataTableCtrl", function($scope) {
    $scope.message = '';            
    
    $scope.myCallback = function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {            
        $('td:eq(2)', nRow).bind('click', function() {
            $scope.$apply(function() {
                $scope.someClickHandler(aData);
            });
        });
        return nRow;
    };

    $scope.someClickHandler = function(info) {
        $scope.message = 'clicked: '+ info.price;
    };

    $scope.columnDefs = resourceColumnDefs;
    $scope.overrideOptions = {
        "bStateSave": true,
        "iCookieDuration": 2419200, /* 1 month */
        "bJQueryUI": true,
        "bPaginate": true,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": true,
        "bDestroy": true
    };
    $scope.sampleResources = sampleResources;

});

hackApp.directive('resourceTable', function() {
        return function(scope, element, attrs) {

            // apply DataTable options, use defaults if none specified by user
            var options = {};
            if (attrs.resourceTable.length > 0) {
                options = scope.$eval(attrs.resourceTable);
            } 
            else {
                options = {
                    "bStateSave": true,
                    "iCookieDuration": 2419200, /* 1 month */
                    "bJQueryUI": true,
                    "bPaginate": true,
                    "bLengthChange": false,
                    "bFilter": false,
                    "bInfo": false,
                    "bDestroy": true
                };
            }

            // Tell the dataTables plugin what columns to use
            // We can either derive them from the dom, or use setup from the controller           
            var explicitColumns = [];
            element.find('th').each(function(index, elem) {
                explicitColumns.push($(elem).text());
            });
            if (explicitColumns.length > 0) {
                options["aoColumns"] = explicitColumns;
            } 
            else if (attrs.aoColumns) {
                options["aoColumns"] = scope.$eval(attrs.aoColumns);
            }

            // aoColumnDefs is dataTables way of providing fine control over column config
            if (attrs.aoColumnDefs) {
                options["aoColumnDefs"] = scope.$eval(attrs.aoColumnDefs);
            }
            
            if (attrs.fnRowCallback) {
                options["fnRowCallback"] = scope.$eval(attrs.fnRowCallback);
            }

            // apply the plugin
            var dataTable = element.dataTable(options);           
            
            // watch for any changes to our data, rebuild the DataTable
            scope.$watch(attrs.aaData, function(value) {
                var val = value || null;
                if (val) {
                    dataTable.fnClearTable();
                    dataTable.fnAddData(scope.$eval(attrs.aaData));
                }
            });
        };
    });

hackApp.component('alineHeader', {
  templateUrl: '../headerTemplate.htm'
});

hackApp.controller('alineHeaderCtrl', function($scope, $http){
    this.data = {
        ownerId: 5
    }

});



// hackApp.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "index.htm"
//     })
//     .when("/ownerDashboard", {
//         templateUrl : "owner-dashboard.htm"
//     })
//     .when("/resourseDashboard", {
//         templateUrl : "resourse-dashboard.htm"
//     })
//     .when("/blue", {
//         templateUrl : "blue.htm"
//     });




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

let sampleProductCategories = [

              {
                "name": "1948 Porsche 356-A Roadster",
                "price": 53.9,
                  "category": "Classic Cars",
                  "action":"x"
              },
              {
                "name": "1948 Porsche Type 356 Roadster",
                "price": 62.16,
            "category": "Classic Cars",
                  "action":"x"
              },
              {
                "name": "1949 Jaguar XK 120",
                "price": 47.25,
            "category": "Classic Cars",
                  "action":"x"
              }
              ,
              {
                "name": "1936 Harley Davidson El Knucklehead",
                "price": 24.23,
            "category": "Motorcycles",
                  "action":"x"
              },
              {
                "name": "1957 Vespa GS150",
                "price": 32.95,
            "category": "Motorcycles",
                  "action":"x"
              },
              {
                "name": "1960 BSA Gold Star DBD34",
                "price": 37.32,
            "category": "Motorcycles",
                  "action":"x"
              }
           ,
              {
                "name": "1900s Vintage Bi-Plane",
                "price": 34.25,
            "category": "Planes",
                  "action":"x"
              },
              {
                "name": "1900s Vintage Tri-Plane",
                "price": 36.23,
            "category": "Planes",
                  "action":"x"
              },
              {
                "name": "1928 British Royal Navy Airplane",
                "price": 66.74,
            "category": "Planes",
                  "action":"x"
              },
              {
                "name": "1980s Black Hawk Helicopter",
                "price": 77.27,
            "category": "Planes",
                  "action":"x"
              },
              {
                "name": "ATA: B757-300",
                "price": 59.33,
            "category": "Planes",
                  "action":"x"
              }
          
        ];

let columnDefs = [ 
            { "mDataProp": "category", "aTargets":[0]},
            { "mDataProp": "name", "aTargets":[1] },
            { "mDataProp": "price", "aTargets":[2] }
        ];
let sampleResources = [
    {
    "Name": '<a href="resource11.htm">Eric Chin</a>',
    "Skill Name": "AngularJS",
    "Skill Level": 3,
    "Interest Name":"JAVA EE",
    "Interest Level":5
    },
    {
    "Name": '<a href="resource7.htm">Tyler Sams</a>',
    "Skill Name": "Test Automation",
    "Skill Level": 5,
    "Interest Name": "JAVA",
    "Interest Level":2
    },
    {
    "Name": '<a href="resource14.htm">Jordan McMillan</a>',
    "Skill Name": "Guidewire",
    "Skill Level": 5,
    "Interest Name": "AngularJS",
    "Interest Level":3
    },
    {
    "Name": '<a href="resource15.htm">Dan Baker</a>',
    "Skill Name": "AngularJS",
    "Skill Level": 5,
    "Interest Name": "Guidewire",
    "Interest Level":5
    },
    {
    "Name": '<a href="resource10.htm">Jillian Bendt</a>',
    "Skill Name": ".net",
    "Skill Level": 5,
    "Interest Name": ".net",
    "Interest Level":5
    },
    {
    "Name": '<a href="resource6.htm">Ryan Carroll</a>',
    "Skill Name": "ETL",
    "Skill Level": 5,
    "Interest Name": "ETL",
    "Interest Level":5
    }
];

let resourceColumnDefs = [
    { "mDataProp": "Name", "aTargets":[0]},
    { "mDataProp": "Skill Name", "aTargets":[1] },
    { "mDataProp": "Skill Level", "aTargets":[2] },
    { "mDataProp": "Interest Name", "aTargets":[3] },
    { "mDataProp": "Interest Level", "aTargets":[4] }
];
