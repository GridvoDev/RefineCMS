var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * =============
 */

var Course = new keystone.List('Course', {
	label: '发展历程',
	map: { name: 'title' },
	singular: 'Course',
	plural: 'Courses',
	nocreate: true,
	nodelete: true,
});

Course.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, required: true },
	updatedAt: { type: Date, watch: true, value: Date.now, noedit: true },
});

Course.defaultSort = '-updatedAt';
Course.searchFields = 'title content updatedAt';
Course.defaultColumns = 'title, content|60%, updatedAt';
Course.register();
