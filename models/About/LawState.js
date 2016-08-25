var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * LawState Model
 * =============
 */

var LawState = new keystone.List('LawState', {
	label: '法律声明',
	nocreate: true,
	nodelete: true,
	autokey: { from: 'title', path: 'key', unique: true },
});

LawState.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, value: Date.now, noedit: true },
});

LawState.defaultSort = '-updatedAt';
LawState.searchFields = 'title, content, updatedAt';
LawState.defaultColumns = 'title, content|75%, updatedAt';
LawState.register();
