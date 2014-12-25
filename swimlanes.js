Projects = new Meteor.Collection('projects');

if (Meteor.isClient) {
  Session.setDefault('currentProject', null);

  // Swimlanes
  Template.swimlane.helpers({
    project: function() {
      return Projects.find({});
    }
  });

  Template.swimlane.events({
    'click .mtr_project-details': function() {
      Session.set('currentProject', this._id);
    }
  });

  // Panels
  Template.panel.helpers({
    showPanel: function() {
      return Session.get('currentProject');
    },

    project: function() {
      return Projects.find({_id: Session.get('currentProject')});
    }
  });

  Template.panel.events({
    'click .mtr_close-panel': function() {
      Session.set('currentProject', null);
    }
  });
}

if (Meteor.isServer) {

}
