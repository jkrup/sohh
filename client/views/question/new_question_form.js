Template.newQuestionForm.events({
  'submit #newQuestionForm': function(event) {
    var title = $("#newQuestionTitle").val()
    var body = $("#newQuestionBody").val()
    Questions.insert({
      title: title,
      body: body
    })
    $("#newQuestionForm")[0].reset();
    event.preventDefault();
    return false
  }
})
