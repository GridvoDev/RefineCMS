var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * PrivacyPolicy Model
 * =============
 */

var PrivacyPolicy = new keystone.List('PrivacyPolicy', {
	label: '隐私政策',
	map: { name: 'title' },
	singular: 'Privacy Policy',
	plural: 'Privacy Policies',
	nocreate: true,
	nodelete: true,
});

PrivacyPolicy.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

PrivacyPolicy.defaultSort = '-updatedAt';
PrivacyPolicy.searchFields = 'title content updatedAt';
PrivacyPolicy.defaultColumns = 'title, content|60%, updatedAt';
PrivacyPolicy.register();
