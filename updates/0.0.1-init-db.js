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
			'title': '联系我们',
			'address': '',
			'tel': '',
			'email': '',
			'wechatAccount': '',
			'postcode': '',
			'fax': ''
		}
	],
	Introduction: [
		{
			'title': '公司简介',
			'content': {
				'brief': '',
				'extended': ''
			},
			'updatedAt': Date.now
		}
	],
	LawState: [
		{
			'title': '法律声明',
			'content': '',
			'updatedAt': Date.now
		}
	],
	PrivacyPolicy: [
		{
			'title': '隐私政策',
			'content': '',
			'updatedAt': Date.now
		}
	],
	CarouselPicture: [
		{
			'name': '',
			'location': 1,
			'heroImage': {},
			'publishedDate': Date.now
		},
		{
			'name': '',
			'location': 2,
			'heroImage': {},
			'publishedDate': Date.now
		},
		{
			'name': '',
			'location': 3,
			'heroImage': {},
			'publishedDate': Date.now
		},
		{
			'name': '',
			'location': 4,
			'heroImage': {},
			'publishedDate': Date.now
		}
	],
	SiteMap: [
		{
			'title': '网站地图',
			'content': '<?xml version="1.0" ?><note><to>George</to><from>John</from><heading>Reminder</heading><body>Don\'t forget the meeting!</body></note>',
			'updatedAt': Date.now
		}
	]
};
