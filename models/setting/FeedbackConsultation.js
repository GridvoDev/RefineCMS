var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * FeedbackConsultation Model
 * =============
 */

var FeedbackConsultation = new keystone.List('FeedbackConsultation', {
	label: '反馈咨询',
	singular: 'Feedback And Consultation',
	plural: 'Feedback And Consultations',
	nocreate: true,
	noedit: true,
});

FeedbackConsultation.add({
	title: { type: String },
	email: { type: Types.Email, required: true },
	enquiryType: { type: Types.Select, options: [
		{ value: 'message', label: '发消息' },
		{ value: 'question', label: '提问题' },
		{ value: 'other', label: '其它...' },
	], default: 'message', index: true, required: true },
	message: { type: Types.Markdown, required: true },
	createdAt: { type: Date, default: Date.now, noedit: true },
});

FeedbackConsultation.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	next();
});

FeedbackConsultation.schema.post('save', function () {
	if (this.wasNew) {
		// this.sendNotificationEmail();TODO 发邮件提醒网站管理员
	}
});

FeedbackConsultation.schema.methods.sendNotificationEmail = function (callback) {
	if (typeof callback !== 'function') {
		callback = function () {};
	}
	var enquiry = this;
	keystone.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
		if (err) return callback(err);
		new keystone.Email({
			templateName: 'enquiry-notification',
		}).send({
			to: admins,
			from: {
				name: 'keystone test',//
				email: 'contact@keystone-test.com',//
			},
			subject: 'New Enquiry for keystone test',
			enquiry: enquiry,
		}, callback);
	});
};

FeedbackConsultation.defaultSort = '-createdAt';
FeedbackConsultation.defaultColumns = 'nickName, email, enquiryType, createdAt';
FeedbackConsultation.register();
