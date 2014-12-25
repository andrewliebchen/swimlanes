if (Meteor.isServer) {
  Meteor.startup(function () {
    Projects.remove({});

    if(Projects.find().count() === 0) {
      Projects.insert({
        name: "Data Manager",
        description: "Improved uploaders which ultimately enable self-service for customers",
        size: "large",
        priority: "high",
        start: 4,
        duration: 24
      });
    }
  });
}
