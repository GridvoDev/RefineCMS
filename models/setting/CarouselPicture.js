var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * CarouselPicture Model
 * =============
 */

var CarouselPicture = new keystone.List('CarouselPicture', {
	label: '首页轮播图',
	nocreate: true,
	nodelete: true,
	autokey: { from: 'location', path: 'key', unique: true },
});

CarouselPicture.add({
	name: { type: String, required: true },
	location: { type: Types.Select, options: ['first', 'second', 'third', 'fourth'], emptyOption: false, required: true },
	heroImageUrl: { type: Types.Url, required: true },
	publishedDate: { type: Date, default: Date.now, noedit: true },
});

CarouselPicture.register();
