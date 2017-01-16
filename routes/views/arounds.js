var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'arounds';
	locals.data = {
		lianxis:{},
		joins:{},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Lianxi').model.findOne().exec(callback);
			},
			function (callback) {
				keystone.list('Join').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.lianxis = results[0];
			locals.data.joins = results[1];
			next(err);
		});

	});

	// Render the view
	view.render('arounds');
};
