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
	view.render('newsInfo');
};
