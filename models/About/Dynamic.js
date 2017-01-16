var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Dynamic Model
 * =============
 */

var Dynamic = new keystone.List('Dynamic', {
	label: '宣传视频',
	map: { name: 'title' },
	singular: 'Dynamic',
	plural: 'Dynamics',
	nocreate: true,
	nodelete: true,
});

Dynamic.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Dynamic.defaultSort = '-updatedAt';
Dynamic.searchFields = 'title content updatedAt';
Dynamic.defaultColumns = 'title, content|60%, updatedAt';
Dynamic.register();
