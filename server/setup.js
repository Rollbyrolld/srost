Meteor.startup(function(){
  var thisTime = function(id, doc){
    doc.created_on = new Date().getTime(); return true; 
  }
  Posts.allow({ insert: thisTime});
  Messages.allow({ insert: thisTime});
});

