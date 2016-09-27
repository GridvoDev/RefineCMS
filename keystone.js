// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var pkg = require('./package.json');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'REFINECMS',
	'brand': '绿华管理后台',

	'less': 'public',
	'static': 'public',
	'favicon': '/public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'emails': 'templates/emails',

	'auto update': true,
	'mongo': process.env.MONGO_URI || 'mongodb://localhost/' + pkg.name,
	
	'session': true,
	'session store': 'mongo',
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'refinecms',
	
	'logger': 'combined',
	
	'back url': '/',
	'signin url': '/keystone/signin',
	'signin redirect': '/keystone',
	'signout url': '/keystone/signout',
	'signout redirect': '/keystone',
	
	// 'wysiwyg images': true,
	// 'wysiwyg menubar': true,
	// 'wysiwyg importcss': '',
	'wysiwyg skin': 'lightgray',
	'wysiwyg additional buttons': 'image, table, insertdatetime, forecolor backcolor, searchreplace visualchars visualblocks, charmap nonbreaking pagebreak hr anchor paste, ltr rtl, emoticons media, preview print ',
	'wysiwyg additional plugins': 'advlist, anchor, autoresize, autosave, charmap, code, colorpicker, contextmenu, directionality, emoticons, fullscreen, hr, image, importcss, ' +
		'insertdatetime, link, lists, media, nonbreaking, pagebreak, paste, preview, print, searchreplace, tabfocus, table, textcolor, visualblocks, visualchars, wordcount, ' +
		'example', //autolink, imagetools, mentions, noneditable, powerpaste, save, spellchecker, tinymcespellchecker, template, textarea,
	'wysiwyg override toolbar': false,
	'wysiwyg additional options': {
		menubar: true,
		inline: false,
	},
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
keystone.set('email locals', {
	logo_src: '/images/logo-email.jpg',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7',
		},
	},
});

// Load your project's email test routes
keystone.set('email tests', require('./routes/emails'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	'公司设置': ['introductions', 'contacts', 'partners', 'law-states', 'privacy-policies'],
	'产品特色': 'products',
	'项目案例': 'cases',
	'新闻资讯': ['news-infos', 'news-info-categories'],
	'用户管理': 'users',
	'系统设置': ['carousel-pictures', 'feedback-consultations', 'site-maps'],
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
