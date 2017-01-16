var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'centers';
	locals.data = {
		centers: [],
	};

	// Load the products
	view.on('init', function (next) {

		var q = keystone.list('Center').model.find().sort('-publishedDate').exec(function (err, results) {
			locals.data.centers = results;
			next(err);
		});
	});

	// Render the view
	view.render('centers');
};
