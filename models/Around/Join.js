var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Join Model
 * =============
 */

var Join = new keystone.List('Join', {
	label: '加入我们',
	map: { name: 'title' },
	singular: 'Join',
	plural: 'Joins',
	nocreate: true,
	nodelete: true,
});

Join.add({
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

Join.searchFields = 'address tel email wechat postcode fax';
Join.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Join.register();
