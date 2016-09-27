var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'products';
	locals.data = {
		products: [],
	};

	// Load the products
	view.on('init', function (next) {

		var q = keystone.list('Product').model.find().sort('-publishedDate').exec(function (err, results) {
			locals.data.products = results;
			next(err);
		});
	});

	// Render the view
	view.render('products');
};
