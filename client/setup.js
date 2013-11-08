Router.map(function() {               // карта сайта
  this.route('home', {
    path: '/',
    renderTemplates: {
      'textarea': { to: 'topbar'}
    } 
  });

  this.route('guestbook', {
    renderTemplates: { 
      'userlist': { to: 'sidebar' },
      'textarea': { to: 'topbar'}
    }
  });

  this.route('otvetstvenno', {
    renderTemplates: { 
      'textarea': { to: 'topbar'}
    }
  });


  this.route('nothingNo', {
    renderTemplates: { 
      'userlist': { to: 'sidebar' }
    }
  });

  this.route('myMessages');

  //this.route('carousel');

  this.route('userlist');
  
  //this.route('imagewiever');

  //this.route('imageLoader');

  this.route('privateMessagePanel',{
    path: '/users/:_id',
    data: function() {return Meteor.users.findOne(this.params._id);},
    renderTemplates: { 
      'userlist': { to: 'sidebar' },
      'textarea': { to: 'topbar'}
    }
  });
});

Router.configure({             // обьявление главного шаблона сайта
  layout: 'layout',
  renderTemplates: { 
    'empty': { to: 'sidebar' }  
  }
});

Accounts.ui.config({                          // конфигурация регистрационной формы
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});



      //  path: '/'