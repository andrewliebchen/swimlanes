Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {

  // Swimlanes
  Template.swimlane.helpers({
    project: function() {
      return Projects.find({});
    }
  });

  Template.swimlane.events({

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
