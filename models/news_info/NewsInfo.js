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
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true, required: true },
	publishedDate: { type: Types.Date, dependsOn: { state: 'published' }, watch: { state: 'published' }, value: Date.now, noedit: true },
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
	categories: { type: Types.Relationship, ref: 'NewsInfoCategory', many: true, initial: true, required: true },
});

NewsInfo.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

NewsInfo.defaultSort = '-publishedDate';
NewsInfo.searchFields = 'title state content.full categories publishedDate';
NewsInfo.defaultColumns = 'title, state|20%, publishedDate|20%';
NewsInfo.register();
