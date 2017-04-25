var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	console.log("首页路由跑起来了")
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = '';
	locals.data = {
		carouselPictures: [],
		// introduction: {},
		// products: [],
		// centers:[],
		// arounds:[],
		// cases: [],
		// newsInfos: [],
		// partners: [],
		// vision: {},
	};

	// Load all data
	view.on('init', function (next) {
		async.parallel([
			function (callback) {
				keystone.list('CarouselPicture').model.find().sort('-location').exec(callback);
			},
			// function (callback) {
			// 	keystone.list('Introduction').model.findOne().exec(callback);
			// },
			// function (callback) {
			// 	keystone.list('Product').model.find().limit(2).exec(callback);
			// },
			// function (callback) {
			// 	keystone.list('Center').model.find().limit(2).exec(callback);
			// },
			// function (callback) {
			// 	keystone.list('Case').model.find().limit(4).exec(callback);
			// },
			// function (callback) {
			// 	keystone.list('NewsInfo').model.find().populate('categories').limit(3).exec(callback);
			// },
			// function (callback) {
			// 	keystone.list('Partner').model.find().exec(callback);
			// },
			// //添加企业愿景（Pro_chen）
			// function (callback) {
			// 	keystone.list('Vision').model.findOne().exec(callback);
			// },
		], function (err, results) {
			locals.data.carouselPictures = results[0];
			// locals.data.introduction = results[1];
			// locals.data.products = results[2];
			// locals.data.cases = results[3];
			// locals.data.newsInfos = results[4];
			// locals.data.partners = results[5];
			// locals.data.centers = results[6];
			// //添加企业愿景（Pro_chen）
			// locals.data.vision = results[6];
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
