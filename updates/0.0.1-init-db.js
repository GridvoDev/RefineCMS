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
			'address': '福州市晋安区坂中路6号五四北泰合广场3号楼22层',
			'tel': '+86-0591-8792 2086',
			'email': 'hr@gridvo.com',
			'wechat': '福建格物科技有限公司',
			'postcode': '350012',
			'fax': '+86-0591-8792 2086'
		}
	],
	Introduction: [
		{
			'title': '公司简介',
			'content': {
				'brief': '福建格物科技有限公司于2012年在福建省福州市福州软件园注册成立，注册资本金5000万元。 公司主营业务为软件产品的开发与销售、计算机系统集成及技术支持与服务，主要服务于智能电网、自动化和信息化领域及其细分市场客户。',
				'extended': '福建格物科技有限公司于2012年在福建省福州市福州软件园注册成立，注册资本金5000万元。 公司主营业务为软件产品的开发与销售、计算机系统集成及技术支持与服务，主要服务于智能电网、自动化和信息化领域及其细分市场客户。 公司以“格物、致知、诚意、正心”为核心价值观。打造具有科学发展观和持续学习能力的团队，不断推进软件“行业化、产品化、服务化”经营布局。在互联网、大数据、云计算等科技不断发展的背景下，公司对新能源市场、用户、产品及其科研、企业价值链乃至整个商业生态进行研究，将大数据分析技术、物联网、云计算、智能管控等技术和传统工业融合，与行业伙伴携手拓展互联网技术在能源领域的应用，共筑基于能源互联网的未来能源生态系统。'
			},
			'updatedAt': Date.now
		}
	],
	PrivacyPolicy: [
		{
			'title': '隐私政策',
			'content': '可能需要：\n个人资料：如姓名、性别、年龄、出生日期、身份证号码、电话、通信地址、住址、电子邮件地址等情况；\n个人背景： 职业、教育程度、收入状况、婚姻、家庭状况。\n注意，本网站只会将您参加本网站之特定活动所提供的资料用于包括但不限于提供给第三方平台！\n',
			'updatedAt': Date.now
		}
	],
	CarouselPicture: [
		{
			'name': '唯美摄影',
			'location': 'first',
			'heroImageUrl': 'http://img2.3lian.com/2014/f6/173/d/51.jpg',
			'publishedDate': Date.now
		},
		{
			'name': '宠物',
			'location': 'second',
			'heroImageUrl': 'http://p3.16lao.com/images/zh_CN/editpage/img/70531472086446317.jpg',
			'publishedDate': Date.now
		},
		{
			'name': '动漫',
			'location': 'third',
			'heroImageUrl': 'http://www.bz55.com/uploads/allimg/120915/1-120915094151.jpg',
			'publishedDate': Date.now
		},
		{
			'name': '薰衣草',
			'location': 'fourth',
			'heroImageUrl': 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1608/02/c0/25027140_1470123832837_800x600.jpg',
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
