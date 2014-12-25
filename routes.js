Router.configure({
  layoutTemplate: 'application',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('projects');
    },
    data: function() {
      return Projects.find({});
    }
  });

  this.route('projectShow', {
    path: '/projects/:_id',
    waitOn: function() {
      return Meteor.subscribe('projectShow', this.params._id);
    },
    data: function() {
      return Projects.findOne(this.params._id);
    }
  });
});
