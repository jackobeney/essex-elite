Template.contact.events ({
  'click .message-button' : function(e, t) {
    var from = t.find("#from").value;
    var name = t.find("#name").value;
    var text = t.find("#text").value;

    Meteor.call('sendEmail', from, name, text);
  },

  'click .phonecall-request-button' : function(e, t) {
    var name = t.find("#name").value;
    var phonenumber = t.find("#phonenumber").value;

    Meteor.call('sendPhonecallRequest', name, phonenumber);
  }
});