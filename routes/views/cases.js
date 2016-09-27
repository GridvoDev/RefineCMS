var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'cases';
	locals.filters = {
		searchContent: null,
	};
	locals.data = {
		cases: [],
	};

	view.on('init', function (next) {

		var q = keystone.list('Case').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 6,
		});
		if (req.query.searchContent && req.query.searchContent.length > 0) {
			locals.filters.searchContent = req.query.searchContent;
			var qs = new RegExp(req.query.searchContent);
			q = q.where('title', qs);
		}
		q.sort('-finishedDate').exec(function (err, results) {
			locals.data.cases = results;
			next(err);
		});
	});

	// Render the view
	view.render('cases');
};
