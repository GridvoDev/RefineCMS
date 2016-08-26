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
	imageUrl: { type: Types.Url, initial: true, required: true },
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
Case.searchFields = 'title, content.full, finishedDate';
Case.defaultColumns = 'title, imageUrl, content.brief|60%, finishedDate|20%';
Case.register();
