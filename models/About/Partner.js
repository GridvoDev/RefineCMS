var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Partner Model
 * =============
 */

var Partner = new keystone.List('Partner', {
	label: '合作伙伴',
	singular: 'Partner',
	plural: 'Partners',
	autokey: { from: 'name', path: 'key', unique: true },
});

Partner.add({
	name: { type: String, required: true },
	logoUrl: { type: Types.Url },//initial: true, required: true
	profile: { type: Types.Textarea, height: 300 },
	updatedAt: { type: Date, value: Date.now, noedit: true },
});

Partner.defaultSort = '-updatedAt';
Partner.searchFields = 'name, profile, updatedAt';
Partner.defaultColumns = 'name, logoUrl, profile, updatedAt';
Partner.register();
