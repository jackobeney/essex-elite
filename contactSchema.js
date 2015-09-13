Schema = {};
  Schema.callback = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 50
  },
  phonenumber: {
    type: String,
    label: "Phone number",
    max: 11
  }
});

Schema.message = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 50
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "E-mail"
  },
  message: {
    type: String,
    label: "Message",
    max: 1000
  }
});