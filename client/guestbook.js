Session.set('thisUser', null)
Template.list.posts= function () {
  return Posts.find({}, {sort: {created_on:-1}})  // вывести сообщения в порядке, где последнее по дате выше
};

Template.userlist.users= function () {
  return Meteor.users.find();
};

Template.userlist.events({
  'click a' : function() {
    Session.set('thisUser', this)
  }
})

Template.form.events({
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

Template.privateMessagePanel.username = function () {  // это называется хэлпер
  return Session.get('thisUser').username;
}

Template.privateMessagePanel.events({
  'click button#send' : function () {
    if (!$('#messageArea').val()) {}

    else { 
       var options = { ownPost: $("#messageArea").val(),
                       to_id : Session.get('thisUser')._id
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

    $('#messageArea').val('');           
  }
});

Template.myMessages.messages= function () {
  return Messages.find({to_id: Meteor.user()._id}, {sort: {created_on:-1}});  
};