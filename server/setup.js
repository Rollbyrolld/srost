Meteor.startup(function(){
  Posts.allow({ insert: function(id, doc){
    doc.created_on = new Date().getTime(); return true; 
  }});
});

