var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Partners Model
 * =============
 */

var Partners = new keystone.List('Partners', {
	label: '合作伙伴',
	autokey: { from: 'name', path: 'key', unique: true },
});

Partners.add({
	name: { type: String, required: true },
	logoUrl: { type: Types.Url, required: true},
	profile: { type: Types.Textarea, height: 300 },
	updatedAt: { type: Date, value: Date.now, noedit: true },
});

Partners.defaultSort = '-updatedAt';
Partners.searchFields = 'name, profile, updatedAt';
Partners.defaultColumns = 'name, logoUrl, profile, updatedAt';
Partners.register();
