var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'abouts';
	locals.data = {
		introduction: {},
		//contact: {},
		//partners: [],
		//lawStates: {},
		//privacyPolicies: {},
		////Pro_chen:愿景、历程、动态、招聘
		//visions: {},
		//courses:{},
		//dynamics:{},
		//recruitments:{},
	};

	view.on('init', function (next) {

		async.parallel([
			function (callback) {
				keystone.list('Introduction').model.findOne().exec(callback);
			},
			//function (callback) {
			//	keystone.list('Contact').model.findOne().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('Partner').model.find().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('LawState').model.findOne().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('PrivacyPolicy').model.findOne().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('Vision').model.findOne().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('Course').model.findOne().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('Dynamic').model.findOne().exec(callback);
			//},
			//function (callback) {
			//	keystone.list('Recruitment').model.findOne().exec(callback);
			//},
		], function (err, results) {
			locals.data.introduction = results[0];
			//locals.data.contact = results[1];
			//locals.data.partners = results[2];
			//locals.data.lawStates = results[3];
			//locals.data.privacyPolicies = results[4];
			//locals.data.visions = results[5];
			//locals.data.courses = results[6];
			//locals.data.dynamics = results[7];
			//locals.data.recruitments = results[8];
			next(err);
		});

	});

	// Render the view
	view.render('abouts');
};
