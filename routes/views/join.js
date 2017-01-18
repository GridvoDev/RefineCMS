var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'join';
	locals.data = {
		joins:{},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Join').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.joins = results[0];
			next(err);
		});

	});

	// Render the view
	view.render('join');
};
