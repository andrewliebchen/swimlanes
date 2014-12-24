if (Meteor.isClient) {
  Template.background.helpers({
    // Got to use a calender to calcuate month and quarter position
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
