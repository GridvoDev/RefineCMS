var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'recruitment';
	locals.data = {
		recruitments:{},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Recruitment').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.recruitments = results[0];
			next(err);
		});

	});

	// Render the view
	view.render('recruitment');
};
