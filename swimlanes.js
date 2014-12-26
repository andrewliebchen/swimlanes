Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {

  Template.projects.helpers({
    project: function() {
      return Projects.find({parent: false});
    },

    childProjects: function() {
      return Projects.find({parent: Session.get('currentProject')});
    }
  });

  Template.projects.events({
    'click .mtr_show-children': function() {
      Session.set('currentProject', this._id);
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
