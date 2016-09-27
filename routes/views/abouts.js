var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'abouts';
	locals.data = {
		introduction: {},
		contact: {},
		partners: [],
		lawStates: {},
		privacyPolicies: {},
	};

	// Load the current about TODO 注释规范下
	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Introduction').model.findOne().exec(callback);
			},
			function (callback) {
				keystone.list('Contact').model.findOne().exec(callback);
			},
			function (callback) {
				keystone.list('Partner').model.find().exec(callback);
			},
			function (callback) {
				keystone.list('LawState').model.findOne().exec(callback);
			},
			function (callback) {
				keystone.list('PrivacyPolicy').model.findOne().exec(callback);
			},
		], function (err, results) {
			locals.data.introduction = results[0];
			locals.data.contact = results[1];
			locals.data.partners = results[2];
			locals.data.lawStates = results[3];
			locals.data.privacyPolicies = results[4];
			next(err);
		});

	});

	// Render the view
	view.render('abouts');
};
