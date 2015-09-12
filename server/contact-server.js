Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://app41290399@heroku.com:5s3pzdnn0689@smtp.sendgrid.net:587';
});

Meteor.methods({
  sendEmail : function(from, name, text) {
    Email.send({
      from: from,
      to: "jackobeney@googlemail.com",
      subject: "Essex Elite message from " + name,
      text: text
    })
  },

  sendPhonecallRequest : function(name, phonenumber) {
    Email.send({
      from: "no-reply@essexelite.co.uk",
      to: "jackobeney@googlemail.com",
      subject: "Callback request",
      text: name + " has requested a callback on the number " + phonenumber
    })
  }
});