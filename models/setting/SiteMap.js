var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
	label: '产品特色',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Product.add({
	title: { type: String, required: true },
	imageUrl: { type: Types.Url, required: true},
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	publishedDate: { type: Types.Date, required: true, index: true },
});

Product.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Product.defaultSort = '-publishedDate';
Product.searchFields = 'title, content.full, publishedDate';
Product.defaultColumns = 'title, imageUrl, content.brief|60%, publishedDate|20%';
Product.register();
