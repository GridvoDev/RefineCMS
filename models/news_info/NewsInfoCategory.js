<<<<<<< HEAD
var keystone = require('keystone');

/**
 * NewsInfoCategory Model
 * ==================
 */

var NewsInfoCategory = new keystone.List('NewsInfoCategory', {
	label: '新闻资讯分类',
	singular: 'News Information Category',
	plural: 'News Information Categories',
	map: { name: 'name' },
	autokey: { from: 'name', path: 'key', unique: true },
});

NewsInfoCategory.add({
	name: { type: String, required: true },
});

NewsInfoCategory.relationship({ ref: 'NewsInfo', path: 'categories' });

NewsInfoCategory.register();
=======
var keystone = require('keystone');

/**
 * NewsInfoCategory Model
 * ==================
 */

var NewsInfoCategory = new keystone.List('NewsInfoCategory', {
	label: '新闻资讯分类',
	singular: 'News Information Category',
	plural: 'News Information Categories',
	map: { name: 'name' },
	autokey: { from: 'name', path: 'key', unique: true },
});

NewsInfoCategory.add({
	name: { type: String, required: true },
});

NewsInfoCategory.relationship({ ref: 'NewsInfo', path: 'categories' });

NewsInfoCategory.register();
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
