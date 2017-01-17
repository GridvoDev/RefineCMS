var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Serve Model
 * =============
 */

var Serve = new keystone.List('Serve', {
	label: '服务',
	map: { name: 'title' },
	singular: 'Serve',
	plural: 'Serves',
	// nocreate: true,
	// nodelete: true,
});

Serve.add({
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
	content: { type: Types.Html, wysiwyg: true, required: false },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Serve.searchFields = 'address tel email wechat postcode fax';
Serve.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Serve.register();
