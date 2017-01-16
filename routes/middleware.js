/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: '首页', key: 'home', href: '/' },
		{ label: '关于绿华', key: 'abouts', href: '/abouts' },
		{ label: '产品与服务', key: 'products', href: '/products' },
		//{ label: '优秀案例', key: 'cases', href: '/cases' },
		// { label: '新闻资讯', key: 'news', href: '/news' },
		{ label: '新闻中心', key: 'centers', href: '/centers' },
		{ label: '绿华在身边', key: 'arounds', href: '/arounds' }
	];
	res.locals.user = req.user;
	next();
};

/**
 Inits the error handler functions into `res`
 */
exports.initErrorHandlers = function(req, res, next) {

	res.err = function(err, title, message) {
		res.status(500).render('errors/500', {
			err: err,
			errorTitle: title,
			errorMsg: message
		});
	};

	res.notfound = function(title, message) {
		res.status(404).render('errors/404', {
			errorTitle: title,
			errorMsg: message
		});
	};

	next();

};

/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
