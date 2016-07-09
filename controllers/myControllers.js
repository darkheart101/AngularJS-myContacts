
myContacts.controller('myController', function ($scope, $routeParams, $location, Contacts){
    $scope.contacts = Contacts.getContacts();
         
    $scope.addContact = function(){
        var emailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        try{
            if(typeof $scope.newContact.name === 'undefined' || typeof $scope.newContact.number === 'undefined'){
                $('#newName').html("<small>You must fill the name field</small>");
                $('#newNumber').html("<small>You must fill the number field</small>");
                $('#newEmail').html("<small>You must fill the email ex. xxx@xx.xx</small>");
            }
            else{
                if($scope.newContact.mail && emailPatt.test($scope.newContact.mail)){
                    if($scope.newContact.number && !isNaN($scope.newContact.number)){
                        var newID = $scope.contacts.length;
                        var addContactList = {
                            id: newID,
                            name: $scope.newContact.name,
                            number: $scope.newContact.number,
                            image: $scope.newContact.image,
                            mail: $scope.newContact.mail,
                            job: $scope.newContact.job
                        } 
                    
                        if(!$scope.newContact.image){
                            addContactList['image']= 'assets/images/nopicture.jpg';
                        }
                        $scope.contacts.push(addContactList);
                        $location.path("/home");    
                    } 
                }else{
                    $('#newName').html("<small>You must fill the name field</small>");
                    $('#newNumber').html("<small>You must fill the number field</small>");
                    $('#newEmail').html("<small>You must fill the email ex. xxx@xx.xx</small>");    
                }
                
            }
        }catch(err) {
            console.log(err);
            $('#newName').html("<small>You must fill the name field</small>");
            $('#newNumber').html("<small>You must fill the number field</small>");
            $('#newEmail').html("<small>You must fill the email ex. xxx@xx.xx</small>");
        }
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
    
    var emailPatt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    $scope.editContact = function(){
        if($scope.editContact.xname){
            $scope.contacts[index].name = $scope.editContact.xname;
        }
        if($scope.editContact.job){
            $scope.contacts[index].job = $scope.editContact.job;
        }
        if($scope.editContact.image){
            $scope.contacts[index].image = $scope.editContact.image;
        }
        if($scope.editContact.number){
            if(!isNaN($scope.editContact.number)){
                $scope.contacts[index].number = $scope.editContact.number;
            }
        }
        if($scope.editContact.mail && emailPatt.test($scope.editContact.mail)){
            $scope.contacts[index].mail = $scope.editContact.mail;
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



