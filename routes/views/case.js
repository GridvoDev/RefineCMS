var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'cases';
	locals.filters = {
		case: req.params.case,
	};
	locals.data = {
		case: {},
	};

	view.on('init', function (next) {

		keystone.list('Case').model.findOne({
			slug: locals.filters.case,
		}).exec(function (err, result) {
			locals.data.case = result;
			next(err);
		});

	});

	// Render the view
	view.render('case');
};
