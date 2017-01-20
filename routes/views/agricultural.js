var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals services:服务与产品;serves：服务
	locals.section = 'services';
	locals.data = {
		products:{},
		serves:{},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Product').model.findOne().exec(callback);
			},
			function (callback) {
				keystone.list('Serve').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.products = results[0];
			locals.data.serves = results[1];
			next(err);
		});

	});

	// Render the view
	view.render('agricultural');
};
