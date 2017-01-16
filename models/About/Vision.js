var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Introduction Model
 * =============
 */

var Vision = new keystone.List('Vision', {
	label: '企业愿景',
	map: { name: 'title' },
	singular: 'Vision',
	plural: 'Visions',
	nocreate: true,
	nodelete: true,
});

Vision.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});
// Vision.add({
// 	title: { type: String, required: true },
// 	content: {
// 		brief: { type: Types.Html, wysiwyg: true, height: 150 },
// 		extended: { type: Types.Html, wysiwyg: true, height: 400 },
// 	},
// 	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
// });
//
// Vision.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

Vision.defaultSort = '-updatedAt';
Vision.searchFields = 'title content updatedAt';
Vision.defaultColumns = 'title, content|60%, updatedAt';
Vision.register();
