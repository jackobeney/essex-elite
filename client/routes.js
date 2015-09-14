Router.route('/', function () {
  this.render('about');
});

Router.route('/timetable', function () {
  this.render('timetable');
});

Router.route('/coaching', function () {
  this.render('coaching');
});

Router.route('/contact', function () {
  this.render('contact');
});