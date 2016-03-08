myContacts.factory('Contacts', function(){
    var factory = {};
    
    var contactList = [
        { id:"0", name: 'Han Solo', number: '6978954125', job: 'rebel', mail: 'hansolo@mfalcon.com', image: 'assets/images/han.solo.jpg'},
        { id:"1", name: 'Princess Leia', number: '6987451479', job: 'princess', mail: 'leia@rebels.com', image: 'assets/images/leia.jpg'},
        { id:"2", name: 'Luke Skywalker', number: '6921456398', job: 'rebel', mail: 'luke@force.com', image: 'assets/images/luke.skywalker.jpg'},
        { id:"3", name: 'Bruce Wayne', number: '6987547824', job: 'crime fighter', mail: 'wayne@batcave.com', image: 'assets/images/bruce.wayne.jpg'},
        { id:"4", name: 'Barry Allen', number: '6987456214', job: 'crime fighter', mail: 'ballen@ftl.com', image: 'assets/images/barry.allen.jpg'}
    ]
    
    factory.getContacts = function(){
        return contactList;
    };
    
    return factory;
    
});