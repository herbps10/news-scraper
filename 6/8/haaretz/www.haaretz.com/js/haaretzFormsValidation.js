jQuery(document)
		.ready(function() {
			// validate newsletter registration form and submit
				jQuery("#nl_registration")
						.validate(
								{
									// debug: true,
									errorContainer : "#messageBox",
									errorLabelContainer : "#messageBox",
									errorClass : "error",
									rules : {
										nlIdn : {
											required : function(element) {
												return !(jQuery(
														'#nl_registration #daily')
														.is(':checked') || jQuery(
														'#nl_registration #weekend')
														.is(':checked'));
											}
										},
										commercial : {
											required : true
										},
										txtEmail : {
											required : true,
											email : true
										}
									},
									messages : {
										nlIdn : {
											required : "Please choose a newsletter"
										},
										commercial : {
											required : "To receive the Newsletter, click the box above to confirm you are willing to receive email updates"
										},
										txtEmail : {
											required : "Email field is mandatory",
											email : "Please enter your email"
										}
									}
								});// end form validation
				jQuery('#nl_submitter').submit(function() {
					return jQuery('#nl_registration').valid();
				});
				// validate contact us form and submit
				jQuery("#contactUsFrm")
						.validate(
								{
									errorContainer : "#contactMessageBox",
									errorLabelContainer : "#contactMessageBox",
									rules : {
										email : {
											required : true,
											email : true
										},
										reason : {
											required : function() {
												return !(jQuery('#reason').val());
											}
										}
									},
									messages : {
										email : {
											required : "Please enter your email",
											email : "Please enter a valid email address"
										},
										reason : {
											required : "Please choose a reason from the list"
										}
									}
								});// end form validation
				jQuery('#contactUsSubmitter').submit(function() {
					return jQuery('#contactUsFrm').valid();
				});
			});