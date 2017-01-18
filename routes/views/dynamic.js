var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'dynamic';
	locals.data = {
		dynamics:{},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Dynamic').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.dynamics = results[0];
			next(err);
		});

	});

	// Render the view
	view.render('dynamic');
};
