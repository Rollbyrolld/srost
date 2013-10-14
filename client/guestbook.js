Session.set('thisUser', null)
Template.list.posts= function () {
  return Posts.find({}, {sort: {created_on:-1}})  // вывести сообщения в порядке, где последнее по дате выше
};

Template.userlist.users= function () {
  return Meteor.users.find();
};

/*Template.userlist.events({
  'click a' : function() {
    Session.set('thisUser', this)
  }
})*/

Template.buttonToGuestBook.events({
  'click button#buttonNew' : function () {
    if (!$('#textArea').val()) {}

    else { 
       var options = { ownPost: $("#textArea").val() };
      if (Meteor.user()) {
        options.name = Meteor.user().username   //Meteor.user().emails[0].address;
      }
      else {
        options.name = $('#firstName').val();
      }
      Posts.insert(options);
    };

    $('#textArea').val('');
    $('#firstName').val('');             
  }
});

/*Template.privateMessagePanel.username = function () {  // это называется хэлпер
  return Session.get('thisUser').username;
}*/

Template.privateMessagePanel.events({
  'click button#send' : function () {
    if (!$('#textArea').val()) {}

    else { 
       var options = { ownPost: $("#textArea").val(),
                       to_id : this._id
                       };
      if (Meteor.user()) {
        options.from_id = Meteor.user()._id;
        options.fromName = Meteor.user().username;
              }
      else {
        options.fromName = $('#firstName').val();
      }
      Messages.insert(options);
    };

    $('#textArea').val('');           
  }
});

Template.privateMessagePanel.messages= function () {
  return Messages.find({$or: [{to_id: Meteor.user()._id, from_id: this._id }, {to_id: this._id, from_id: Meteor.user()._id }]}, {sort: {created_on:-1}});  
}; 
//  {sort: {created_on:-1}}

Template.myMessages.messages= function () {
  return Messages.find({to_id: Meteor.user()._id}, {sort: {created_on:-1}});  
};