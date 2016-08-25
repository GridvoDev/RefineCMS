var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * CarouselPicture Model
 * =============
 */

var CarouselPicture = new keystone.List('CarouselPicture', {
	autokey: { from: 'name', path: 'key', unique: true },
});

CarouselPicture.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

CarouselPicture.register();
