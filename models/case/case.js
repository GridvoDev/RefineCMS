<<<<<<< HEAD
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	label: '项目案例',
	singular: 'Case',
	plural: 'Cases',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Case.add({
	title: { type: String, required: true },
	overviewImage: {
		type: Types.LocalFile,
		dest: 'public/uploads/',
		// prefix: '/uploads/',
		// datePrefix: 'YYYY-MM-DD',
		allowedTypes: ['image/png', 'image/jpeg', 'image/bmp', 'image/gif'],
		filename: function(item, file) {
			return item.id + '.' + file.extension;
		},
		// format: function(item, file) {
		// 	console.log(item+"weimao3");
		// 	console.log(file+"weimao4");
		// 	return '<img src="/uploads/'+file.filename+'" style="max-width: 60%">';
		// },
		required: true,
		initial: false,
	},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	finishedDate: { type: Types.Date, index: true, initial: true, required: true },
});

Case.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Case.defaultSort = '-finishedDate';
Case.searchFields = 'title content.full finishedDate';
Case.defaultColumns = 'title|10%, overviewImage.originalname|25%, content.brief|50%, finishedDate|15%';
Case.register();
=======
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	label: '项目案例',
	singular: 'Case',
	plural: 'Cases',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Case.add({
	title: { type: String, required: true },
	overviewImage: {
		type: Types.LocalFile,
		dest: 'public/uploads/',
		// prefix: '/uploads/',
		// datePrefix: 'YYYY-MM-DD',
		allowedTypes: ['image/png', 'image/jpeg', 'image/bmp', 'image/gif'],
		filename: function(item, file) {
			return item.id + '.' + file.extension;
		},
		// format: function(item, file) {
		// 	console.log(item+"weimao3");
		// 	console.log(file+"weimao4");
		// 	return '<img src="/uploads/'+file.filename+'" style="max-width: 60%">';
		// },
		required: true,
		initial: false,
	},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	finishedDate: { type: Types.Date, index: true, initial: true, required: true },
});

Case.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Case.defaultSort = '-finishedDate';
Case.searchFields = 'title content.full finishedDate';
Case.defaultColumns = 'title|10%, overviewImage.originalname|25%, content.brief|50%, finishedDate|15%';
Case.register();
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
