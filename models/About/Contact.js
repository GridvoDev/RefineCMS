var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
	label: '联系我们',
	singular: 'Contact',
	plural: 'Contacts',
	nocreate: true,
	nodelete: true,
});

Contact.add({
	address: { type: String, required: true },
	tel: { type: String, required: true },
	email: { type: Types.Email, required: true },
	wechat: { type: String, required: true },
	postcode: { type: String, required: true },
	fax: { type: String, required: true },
});

Contact.searchFields = 'address, tel, email, wechat, postcode, fax';
Contact.defaultColumns = 'address, tel, email, wechat, postcode, fax';
Contact.register();
