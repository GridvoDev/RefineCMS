var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * CarouselPicture Model
 * =============
 */

var CarouselPicture = new keystone.List('CarouselPicture', {
	label: '首页轮播图',
	singular: 'CarouselPicture',
	plural: 'CarouselPictures',
	nocreate: true,
	nodelete: true,
	autokey: { from: 'location', path: 'key', unique: true },
});

CarouselPicture.add({
	name: { type: String, required: true },
	// location: { type: Types.Select, options: [1, 2, 3, 4], emptyOption: false, required: true },
	heroImage: {
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
	publishedDate: { type: Date, watch: true, value: Date.now, noedit: true },
});

CarouselPicture.defaultColumns = 'name, location, publishedDate';
CarouselPicture.register();
