var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'product';
	locals.filters = {
		product: req.params.product,
	};
	locals.data = {
		product: {},
	};

	// Load the current product
	view.on('init', function (next) {

		keystone.list('Product').model.findOne({
			slug: locals.filters.product,
		}).exec(function (err, result) {
			locals.data.product = result;
			next(err);
		});

	});

	// Render the view
	view.render('productInfo0');
};
