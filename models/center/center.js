var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Center = new keystone.List('Center', {
	label: '新闻中心',
	singular: 'Center',
	plural: 'Centers',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Center.add({
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
	// content: {
	// 	brief: { type: Types.Html, wysiwyg: true, height: 150 },
	// 	extended: { type: Types.Html, wysiwyg: true, height: 400 },
	// },
	publishedDate: { type: Types.Date, initial: true, required: true },
});

Center.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Center.defaultSort = '-publishedDate';
Center.searchFields = 'title content.full publishedDate';
Center.defaultColumns = 'title|10%, overviewImage.originalname|25%, content.brief|50%, publishedDate|15%';
Center.register();
