/**
 * This script automatically initializes a default DB data for this site when an
 * empty database is used for the first time.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	Contact: [
		{
			'address': '',
			'tel': '',
			'email': 'sample@163.com',
			'wechat': '',
			'postcode': '',
			'fax': ''
		}
	],
	Introduction: [
		{
			'title': '',
			'content': {
				'brief': '',
				'extended': ''
			},
			'updatedAt': null
		}
	],
	PrivacyPolicy: [
		{
			'title': '',
			'content': '',
			'updatedAt': null
		}
	],
	CarouselPicture: [
		{
			'name': '',
			'location': 'first',
			'heroImageUrl': '',
			'publishedDate': null
		},
		{
			'name': '',
			'location': 'second',
			'heroImageUrl': '',
			'publishedDate': null
		},
		{
			'name': '',
			'location': 'third',
			'heroImageUrl': '',
			'publishedDate': null
		},
		{
			'name': '',
			'location': 'fourth',
			'heroImageUrl': '',
			'publishedDate': null
		}
	],
	SiteMap: [
		{
			'title': '',
			'content': '',
			'updatedAt': null
		}
	]
};
