function parentProject(){
  var parentProject = Projects.insert({
    name: "Data Manager",
    tagline: "Improved uploaders which ultimately enable self-service for customers",
    description: "An underserved area of our platform today is how we manage data. Building more user-friendly data ingestion tools lead to a better onboarding experience and ultimately the ability to turn on these tools as self-service. As one of our major themes of 2015, our efforts in pursuing Self-Service could result in allowing customers to have free trials and really get up and running on our platform quickly. The major goal here is to build out a team focused on managing data from our customers. This data includes General Ledgers, Transactions, and Chart of Accounts.",
    size: "Large",
    priority: "High",
    start: 4,
    duration: 24,
    parent: false
  });
  return parentProject;
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Projects.remove({});
    if(Projects.find().count() === 0) {
      var parentProjectId = parentProject();

      Projects.insert({
        name: "Unified uploader",
        tagline: "Deprecate existing upload wizards and move to a unified, generic and customizable uploader",
        description: "Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad.",
        size: "Large",
        priority: "High",
        start: 4,
        duration: 4,
        parent: parentProjectId
      });
    }
  });
}
