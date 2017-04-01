var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * LawState Model
 * =============
 */

var Legal = new keystone.List('Legal', {
	label: '法律声明',
	map: { name: 'title' },
	singular: 'Legal',
	plural: 'Legals',
	//nocreate: true,
	nodelete: true,
});

Legal.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Legal.defaultSort = '-updatedAt';
Legal.searchFields = 'title content updatedAt';
Legal.defaultColumns = 'title, content|75%, updatedAt';
Legal.register();
