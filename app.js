var myContacts = angular.module('myContacts', ['ngRoute']); 

myContacts.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/home', {
               templateUrl: 'views/home.html',
               controller: 'myController'
            }).
            when('/contact-info/:id', {
               templateUrl: 'views/contact-info.html',
               controller: 'contactInfoController'
            }).
            when('/editcontact/:editid', {
                templateUrl: 'views/editcontact.html',
                controller: 'contactEditController'
            }).
            when('/addcontact',{
                templateUrl: 'views/addcontact.html',
                controller: 'myController'
            }).
            otherwise({
               redirectTo: '/home'
            });
}]);