Router.route('/', function () {
  this.render('about');
});

Router.route('/timetable', function () {
  this.render('timetable');
});

Router.route('/contact', function () {
  this.render('contact');
});