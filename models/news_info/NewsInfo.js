var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * NewsInfo Model
 * ==========
 */

var NewsInfo = new keystone.List('NewsInfo', {
	label: '新闻资讯',
	singular: 'News Information',
	plural: 'News Information',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

NewsInfo.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	imageUrl: { type: Types.Url },//initial: true, required: true
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'NewsInfoCategory', many: true },
});

NewsInfo.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

NewsInfo.defaultSort = '-publishedDate';
NewsInfo.searchFields = 'title, state, content.full, categories, publishedDate';
NewsInfo.defaultColumns = 'title, state|20%, publishedDate|20%';
NewsInfo.register();
