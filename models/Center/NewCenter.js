var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * NewCenter Model
 * =============
 */

var NewCenter = new keystone.List('NewCenter', {
	label: '新闻资讯',
	map: { name: 'title' },
	singular: 'New Center',
	plural: 'New Centers',
	nocreate: true,
	nodelete: true,
});

NewCenter.add({
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

NewCenter.searchFields = 'address tel email wechat postcode fax';
NewCenter.defaultColumns = 'address, tel, email, wechat, postcode, fax';
NewCenter.register();
