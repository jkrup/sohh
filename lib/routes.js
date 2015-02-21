Questions = new Meteor.Collection("questions");
Router.configure( {layoutTemplate: "layout" })
Router.route('/', function () {
    //this.render('login');
    this.render('questions');
});
Router.route('/ask', function () {
    this.render('newQuestionForm');
});

Router.route('/question/:_id', function () {
  var question = 
  this.render('showQuestion', {
    data: function() {
      return Questions.findOne({_id: this.params._id});
    }
  });
});

