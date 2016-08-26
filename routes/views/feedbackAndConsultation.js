var keystone = require('keystone');
var FeedbackConsultation = keystone.list('FeedbackConsultation');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'feedback';
	locals.enquiryTypes = FeedbackConsultation.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;

	// On POST requests, add the FeedbackConsultation item to the database
	view.on('post', function (next) {

		var newFeedbackConsultation = new FeedbackConsultation.model();
		var updater = newFeedbackConsultation.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true,
			fields: 'nickName, email, enquiryType, message',
			errorMessage: 'There was a problem submitting your enquiry:',
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.enquirySubmitted = true;
			}
			next();
		});
	});

	view.render('feedbackAndConsultation');
};
