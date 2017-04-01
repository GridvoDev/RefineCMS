var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'legal';
	locals.data = {
		legals: {},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Legal').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.legals = results[0];
			next(err);
		});

	});

	// Render the view
	view.render('legal');
};
