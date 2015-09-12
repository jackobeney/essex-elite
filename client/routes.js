Router.route('/', function () {
  this.render('about');
});

Router.route('/coaching', function () {
  this.render('what-we-offer');
});

Router.route('/timetable', function () {
  this.render('timetable');
});

Router.route('/contact', function () {
  this.render('contact');
});