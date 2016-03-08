myContacts.controller('myController', function ($scope, $routeParams, $location, Contacts){
    $scope.contacts = Contacts.getContacts();
         
    $scope.addContact = function(){
        
        if($scope.newContact.name){
            if($scope.newContact.number){
                if(!isNaN($scope.newContact.number)){
                    var newID = $scope.contacts.length;
                    $scope.contacts.push({
                        id: newID,
                        name: $scope.newContact.name,
                        number: $scope.newContact.number,
                        image: $scope.newContact.image,
                        mail: $scope.newContact.mail,
                        job: $scope.newContact.job
                    });
                }
            }   
        }
        $location.path("/home");
    };
    
    $scope.back = function() { 
        window.history.back();
    };
    
    $scope.deleteContact = function(index){
        $scope.contacts.splice(index,1);
        console.log($scope.contacts.id);
        var i;
        for(i = 0;i<$scope.contacts.length;i++){
            $scope.contacts[i].id = i;
        };
        $location.path("/home");
    };
});

myContacts.controller('contactInfoController',  function ($scope, $routeParams, Contacts){
    var index = $routeParams.id;
    $scope.contacts = Contacts.getContacts(); 
    $scope.currentContact = $scope.contacts[index];
    
    $scope.back = function() { 
        window.history.back();
    };

});

myContacts.controller('contactEditController',  function ($scope, $routeParams, $location, Contacts){
    var index = $routeParams.editid;
    $scope.contacts = Contacts.getContacts(); 
    $scope.currentContact = $scope.contacts[index];
    
    $scope.editContact = function(){
        if($scope.editContact.xname){
            $scope.contacts[index].name = $scope.editContact.xname;
        }
        
        if($scope.editContact.number){
            if(!isNaN($scope.editContact.number)){
                $scope.contacts[index].number = $scope.editContact.number;
            }
        }
        
        if($scope.editContact.mail){
            $scope.contacts[index].mail = $scope.editContact.mail
        }
        
        if($scope.editContact.job){
            $scope.contacts[index].job = $scope.editContact.job
        }
        $location.path("/home");
    };
    
    $scope.deleteContact = function(){
        $scope.contacts.splice(index,1);
        var i;
        for(i = 0;i<$scope.contacts.length;i++){
            $scope.contacts[i].id = i;
        };
        $location.path("/home");
    };
    
    $scope.back = function() { 
        window.history.back();
    };
});



