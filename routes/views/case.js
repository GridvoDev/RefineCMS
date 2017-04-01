<<<<<<< HEAD
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
=======
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
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
