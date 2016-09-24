var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'case';
	locals.data = {
		cases: [],
	};

	// Load the cases
	view.on('init', function (next) {

		var q = keystone.list('Case').model.find().sort('-finishedDate').exec(function (err, results) {
			locals.data.cases = results;
			next(err);
		});
	});

	// Render the view
	view.render('caseS');
};
