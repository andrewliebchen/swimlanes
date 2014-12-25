Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {

  Template.projects.helpers({
    project: function() {
      return Projects.find({});
    }
  });

  Template.projectShow.helpers({
    project: function() {
      return Projects.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('projects', function() {
    return Projects.find({});
  });

  Meteor.publish('projectShow', function(id) {
    return Projects.find(id);
  });
}
