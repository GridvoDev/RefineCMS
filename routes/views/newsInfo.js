<<<<<<< HEAD
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'news';
	locals.filters = {
		newsInfo: req.params.newsInfo,
	};
	locals.data = {
		newsInfo: null,
		newsInfos: [],
	};

	// Load the current newsInfo
	view.on('init', function (next) {

		keystone.list('NewsInfo').model.findOne({
			state: 'published',
			slug: locals.filters.newsInfo,
		}).populate('categories').exec(function (err, result) {
			locals.data.newsInfo = result;
			next(err);
		});

	});

	// Load other newsInfos
	view.on('init', function (next) {

		keystone.list('NewsInfo').model.find().where('state', 'published').sort('-publishedDate').limit('4').exec(function (err, results) {
			locals.data.newsInfos = results;
			next(err);
		});

	});

	// Render the view
	view.render('news-info');
};
=======
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'news';
	locals.filters = {
		newsInfo: req.params.newsInfo,
	};
	locals.data = {
		newsInfo: null,
		newsInfos: [],
	};

	// Load the current newsInfo
	view.on('init', function (next) {

		keystone.list('NewsInfo').model.findOne({
			state: 'published',
			slug: locals.filters.newsInfo,
		}).populate('categories').exec(function (err, result) {
			locals.data.newsInfo = result;
			next(err);
		});

	});

	// Load other newsInfos
	view.on('init', function (next) {

		keystone.list('NewsInfo').model.find().where('state', 'published').sort('-publishedDate').limit('4').exec(function (err, results) {
			locals.data.newsInfos = results;
			next(err);
		});

	});

	// Render the view
	view.render('news-info');
};
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
