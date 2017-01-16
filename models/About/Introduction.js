var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Introduction Model
 * =============
 */

var Introduction = new keystone.List('Introduction', {
	label: '关于我们',
	map: { name: 'title' },
	singular: 'Introduction',
	plural: 'Introductions',
	nocreate: true,
	nodelete: true,
});

Introduction.add({
	title: { type: String, required: true },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Introduction.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Introduction.defaultSort = '-updatedAt';
Introduction.searchFields = 'title updatedAt';
Introduction.defaultColumns = 'title|10%, content.brief|70%, updatedAt|20%';
Introduction.register();
