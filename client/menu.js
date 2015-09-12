Template.header.events({
  'click #open': function () {
    $("#my-menu").trigger("open.mm");
  }
});

Template.header.rendered = function() {
  $("#my-menu").mmenu({
    classes: "mm-light",
    header: false,
    buttonbar: "Buttonbar",
    counters: true,
    offCanvas: {
      position  : "left",
      zposition : "front"
    },
    onClick: {
      blockUI: true,
      close: true,
      preventDefault: false,
      setSelected: true
    }
  },
  {
    transitionDuration: 400
  });
};