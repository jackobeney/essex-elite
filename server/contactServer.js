Meteor.startup(function () {
  process.env.MAIL_URL = //SMTP Server;
});

Meteor.methods({
  sendCallbackRequest: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.callback);

    this.unblock();

    Email.send({
        to: "essexelitefootball@gmail.com",
        from: "no-reply@essexelite.co.uk",
        subject: "Callback request",
        text: doc.name + " has requested a callback on the number " + doc.phonenumber
    });
  },

  sendMessage: function(doc) {
    // Important server-side check for security and data integrity
    check(doc, Schema.message);

    this.unblock();

    Email.send({
        to: "essexelitefootball@gmail.com",
        from: doc.email,
        subject: "Essex Elite message from " + doc.name,
        text: doc.message
    });
  },

  sendSessionEnquiry: function(name, from, session) {
    Email.send({
        to: "essexelitefootball@gmail.com",
        from: from,
        subject: "Training session enquirey",
        text: name + " has enquired about session: " + session
    });
  }
});
