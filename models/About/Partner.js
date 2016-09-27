var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Partner Model
 * =============
 */

var Partner = new keystone.List('Partner', {
	label: '合作伙伴',
	singular: 'Partner',
	plural: 'Partners',
	map: { name: 'name' },
	autokey: { from: 'name', path: 'key', unique: true },
});

Partner.add({
	name: { type: String, required: true },
	logoImage: {
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
	profile: { type: Types.Textarea, height: 300 },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Partner.defaultSort = '-updatedAt';
Partner.searchFields = 'name profile updatedAt';
Partner.defaultColumns = 'name, logoImage.originalname, profile, updatedAt';
Partner.register();
