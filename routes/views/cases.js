var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'cases';
	locals.data = {
		cases: [],
	};

	// Load the cases
	view.on('init', function (next) {

		var q = keystone.list('Case').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 6,
		}).sort('-finishedDate').exec(function (err, results) {
			locals.data.cases = results;
			next(err);
		});
	});

	// Render the view
	view.render('cases');
};
