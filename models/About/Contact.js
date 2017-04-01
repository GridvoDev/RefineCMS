<<<<<<< HEAD
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
	label: '联系我们',
	map: { name: 'title' },
	singular: 'Contact',
	plural: 'Contacts',
	nocreate: true,
	nodelete: true,
});

Contact.add({
	title: { type: String, required: true },
	address: { type: String, required: true },
	tel: { type: String, required: true },
	email: { type: Types.Email, required: true },
	wechatAccount: { type: String, required: true },
	postcode: { type: String, required: true },
	fax: { type: String, required: true },
});

Contact.searchFields = 'address tel email wechat postcode fax';
Contact.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Contact.register();
=======
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
	label: '联系我们',
	map: { name: 'title' },
	singular: 'Contact',
	plural: 'Contacts',
	nocreate: true,
	nodelete: true,
});

Contact.add({
	title: { type: String, required: true },
	address: { type: String, required: true },
	tel: { type: String, required: true },
	email: { type: Types.Email, required: true },
	wechatAccount: { type: String, required: true },
	postcode: { type: String, required: true },
	fax: { type: String, required: true },
});

Contact.searchFields = 'address tel email wechat postcode fax';
Contact.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Contact.register();
>>>>>>> b0eb7369478abac56cd444606cf895bb4ced42e0
