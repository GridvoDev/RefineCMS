/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Handle 404 errors
keystone.set('404', function(req, res, next) {
	res.notfound();
});
// Handle other errors
keystone.set('500', function(err, req, res, next) {
	var title, message;
	if (err instanceof Error) {
		message = err.message;
		err = err.stack;
	}
	res.err(err, title, message);
});

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
<<<<<<< HEAD
	app.get('/about_Introduce', routes.views.abouts);
	app.get('/development_History', routes.views.course);
	// app.get('/abouts/dynamic', routes.views.dynamic);
	app.get('/abouts/recruitment', routes.views.recruitment);
	app.get('/legal', routes.views.legalStatement);
	
	
	//app.get('/services',routes.views.services);
	//未写后台管理的三个
	app.get('/surface_Photovoltaic',routes.views.surface);
	app.get('/agricultural_Photovoltaicl',routes.views.agricultural);
	app.get('/roof_Photovoltaic',routes.views.roof);
=======
	app.get('/abouts', routes.views.abouts);
	app.get('/abouts/course', routes.views.course);
	app.get('/abouts/dynamic', routes.views.dynamic);
	app.get('/abouts/recruitment', routes.views.recruitment);
	//app.get('/services',routes.views.services);
	//未写后台管理的三个
	app.get('/services/surface',routes.views.surface);
	app.get('/services/agricultural',routes.views.agricultural);
	app.get('/services/roof',routes.views.roof);
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
	
	app.get('/arounds', routes.views.arounds);
	app.get('/arounds/join', routes.views.join);
	app.get('/centers',routes.views.centers);
	//暂时摘除产品案例、新闻资讯等一些模块
	//app.get('/products', routes.views.products);
	// app.get('/products/:product', routes.views.productInfo);
	// app.get('/cases', routes.views.cases);
	// app.get('/cases/:case', routes.views.case);
<<<<<<< HEAD
	app.get('/news/:category?', routes.views.news);
	app.get('/news/information/:newsInfo', routes.views.newsInfo);
=======
	// app.get('/news/:category?', routes.views.news);
	// app.get('/news/information/:newsInfo', routes.views.newsInfo);
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
	// app.all('/feedback', routes.views.feedbackAndConsultation);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
