Template.contact.helpers({
  callbackFormSchema: function() {
    return Schema.callback;
  },

  messageFormSchema: function() {
    return Schema.message;
  }
});

Template.sessionModal.events({
  'click #send' : function (evt, tmp) {
    evt.preventDefault();
    var name = tmp.find('#inputName').value;
    var from = tmp.find('#inputEmail').value;
    var session = tmp.find('#send').value;

    Meteor.call('sendSessionEnquiry', name, from, session);
  }
});