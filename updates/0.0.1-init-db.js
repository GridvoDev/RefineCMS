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
			'address': '请初始化数据...',
			'tel': '请初始化数据...',
			'email': 'sample@refine.com',
			'wechatAccount': '请初始化数据...',
			'postcode': '请初始化数据...',
			'fax': '请初始化数据...'
		}
	],
	Introduction: [
		{
			'title': '公司简介',
			'content': {
				'brief': '请初始化数据...',
				'extended': '请初始化数据...'
			},
			'updatedAt': Date.now
		}
	],
	LawState: [
		{
			'title': '法律声明',
			'content': '请初始化数据...',
			'updatedAt': Date.now
		}
	],
	PrivacyPolicy: [
		{
			'title': '隐私政策',
			'content': '请初始化数据...',
			'updatedAt': Date.now
		}
	],
	Vision: [
		{
			'title': '企业愿景',
			'content': '请初始化数据...',
			'updatedAt': Date.now
		}
	],
	Course: [
		{
			'title': '隐私政策',
			'content': '请初始化数据...',
			'updatedAt': Date.now
		}
	],
	CarouselPicture: [
		{
			'name': '请初始化数据...',
			'location': 1,
			'heroImage': {},
			'publishedDate': Date.now
		},
		{
			'name': '请初始化数据...',
			'location': 2,
			'heroImage': {},
			'publishedDate': Date.now
		},
		{
			'name': '请初始化数据...',
			'location': 3,
			'heroImage': {},
			'publishedDate': Date.now
		},
		{
			'name': '请初始化数据...',
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
