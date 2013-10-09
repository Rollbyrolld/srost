Template.list.posts= function () {
  return Posts.find({}, {sort: {created_on:-1}})  // вывести сообщения в порядке, где последнее по дате выше
};

Template.userlist.users= function () {
  return Meteor.users.find();
};

Template.userlist.events({
  'click' : function () {
    //alert("id этого юзера " + this._id);
    //prompt("Написать " + this.username)
    return Meteor.user();
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
