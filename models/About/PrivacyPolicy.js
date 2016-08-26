var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PrivacyPolicy Model
 * =============
 */

var PrivacyPolicy = new keystone.List('PrivacyPolicy', {
	label: '隐私保护',
	singular: 'Privacy Policy',
	plural: 'Privacy Policies',
	nocreate: true,
	nodelete: true,
	autokey: { from: 'title', path: 'key', unique: true },
});

PrivacyPolicy.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, value: Date.now, noedit: true },
});

PrivacyPolicy.defaultSort = '-updatedAt';
PrivacyPolicy.searchFields = 'title, content, updatedAt';
PrivacyPolicy.defaultColumns = 'title, content|75%, updatedAt';
PrivacyPolicy.register();
