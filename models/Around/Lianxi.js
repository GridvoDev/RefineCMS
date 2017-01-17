var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Lianxi Model
 * =============
 */

var Lianxi = new keystone.List('Lianxi', {
	label: '联系我们',
	map: { name: 'title' },
	singular: 'Lianxi',
	plural: 'Lianxis',
	nocreate: true,
	nodelete: true,
});

Lianxi.add({
	title: { type: String, required: true },
	address: { type: String, required: true },
	tel: { type: String, required: true },
	email: { type: Types.Email, required: true },
	wechatAccount: { type: String, required: true },
	postcode: { type: String, required: true },
	fax: { type: String, required: true },
});

Lianxi.searchFields = 'address tel email wechat postcode fax';
Lianxi.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Lianxi.register();
