Session.setDefault('session', "");

Template.timetable.events({
  'click #session11' : function(evt, tmp) {
    Session.set('session', tmp.find("#session11").value);
  },
  'click #session12' : function(evt, tmp) {
    Session.set('session', tmp.find("#session12").value);
  },
  'click #session21' : function(evt, tmp) {
    Session.set('session', tmp.find("#session21").value);
  },
  'click #session22' : function(evt, tmp) {
    Session.set('session', tmp.find("#session22").value);
  },
  'click #session31' : function(evt, tmp) {
    Session.set('session', tmp.find("#session31").value);
  },
  'click #session32' : function(evt, tmp) {
    Session.set('session', tmp.find("#session32").value);
  }
});

  Template.sessionModal.helpers({
    'getSession' : function() {
      console.log(Session.get('session'));
      return Session.get('session');
    }
  });