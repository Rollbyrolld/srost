Router.map(function() {               // карта сайта
  this.route('home', {path: '/'});
  this.route('guestbook');
  this.route('otvetstvenno');
  this.route('myMessages');
  this.route('userlist');
  this.route('privateMessagePanel',{
    path: '/users/:_id',
    data: function() {return Meteor.users.findOne(this.params._id);}
  });
});

Router.configure({             // обьявление главного шаблона
  layout: 'layout',
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});