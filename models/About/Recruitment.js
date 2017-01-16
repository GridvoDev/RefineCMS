var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dynamic Model
 * =============
 */

var Recruitment = new keystone.List('Recruitment', {
	label: '媒体报道',
	map: { name: 'title' },
	singular: 'Recruitment',
	plural: 'Recruitments',
	autokey: { path: 'slug', from: 'title', unique: true },
	nocreate: true,
	nodelete: true,
});

Recruitment.add({
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
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Recruitment.defaultSort = '-updatedAt';
Recruitment.searchFields = 'title content updatedAt';
Recruitment.defaultColumns = 'title, content|60%, updatedAt';
Recruitment.register();
