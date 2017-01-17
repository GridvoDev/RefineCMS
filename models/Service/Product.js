var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * =============
 */

var Product = new keystone.List('Product', {
	label: '产品',
	map: { name: 'title' },
	singular: 'Product',
	plural: 'Products',
	 nocreate: true,
	 nodelete: true,
});

Product.add({
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

Product.searchFields = 'address tel email wechat postcode fax';
Product.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Product.register();
