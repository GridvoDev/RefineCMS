var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Case Model
 * ==========
 */

var Case = new keystone.List('Case', {
	label: '项目案例',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Case.add({
	title: { type: String, required: true },
	imageUrl: { type: Types.Url, required: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	finishedDate: { type: Types.Date, required: true, index: true },
});

Case.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Case.defaultSort = '-finishedDate';
Case.searchFields = 'title, content.full, finishedDate';
Case.defaultColumns = 'title, imageUrl, content.brief|60%, finishedDate|20%';
Case.register();
