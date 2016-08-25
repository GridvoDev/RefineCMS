var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SiteMap Model
 * ==========
 */

var SiteMap = new keystone.List('SiteMap', {
	label: '网站地图',
	nocreate: true,
	nodelete: true,
});

SiteMap.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, value: Date.now, noedit: true },
});


SiteMap.defaultSort = '-updatedAt';
SiteMap.searchFields = 'title, content, updatedAt';
SiteMap.defaultColumns = 'title, content|60%, updatedAt|20%';
SiteMap.register();
