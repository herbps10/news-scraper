jQuery(document)
		.ready(
				function() {
					jQuery.validator
							.addMethod(
									"wellFormatedDate",
									function(value, element) {
										// Date dd/mm/yyyy 01/01/1900 through
										// 31/12/2099.
										return (value.length == 0 || (value
												.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)[0-9]{2}$/) != null));
									},
									"Please enter a date in the format dd/mm/yyyy");
					jQuery.validator.addMethod("dateBiggerThan", function(
							value, element, param) {
						var paramVal = jQuery(param).val();
						if (value && paramVal) {
							return Date.parse(value, 'dd/MM/yyyy').compareTo(
									Date.parse(jQuery(param).val(),
											'dd/MM/yyyy')) >= 0;
						} else {
							return true;
						}
					}, "Please enter a bigger date");
					jQuery.validator
							.addMethod("oneOfaPair", function(value, element,
									param) {
								// alert(value.length + " | " +
								// jQuery(param).val().length +
									// "|" + param);
									return (value.length == 0 && jQuery(param)
											.val().length == 0)
											|| (value.length > 0 && jQuery(
													param).val().length > 0);
								}, "This date is paired");
					// validate search form on and submit
					jQuery("#searchForm")
							.validate(
									{
										rules : {
											startDate : {
												wellFormatedDate : true,
												oneOfaPair : "#endDate"
											},
											endDate : {
												wellFormatedDate : true,
												dateBiggerThan : "#startDate",
												oneOfaPair : "#startDate"
											}
										},
										messages : {
											startDate : {
												oneOfaPair : "Please enter the end date too"
											},
											endDate : {
												dateBiggerThan : "To date must be bigger or equal than From date",
												oneOfaPair : "Please enter the start date too"
											}
										}
									});// end form validation

					jQuery("#submitBtn").submit(function() {
						var doSubmit = jQuery("#searchForm").valid();
						return doSumbit;
					});

					jQuery.datepicker.setDefaults( {
						//changeMonth 	: true,
						//changeYear 		: true,
						dateFormat 		: 'dd/mm/yy',
						maxDate			: new Date(),
						//showButtonPanel	:true,
						closeText 		: 'x',
						showOn			: 'both',
						buttonText 		: 'Choose a date',
						buttonImage 	: '/images/btn/btn-calendar-blue.gif',
						buttonImageOnly : true
					});

					jQuery("#searchHeaderStartDate").datepicker( {});
					jQuery("#searchHeaderEndDate").datepicker( {});
					jQuery("#searchRightColumnStartDate").datepicker( {});
					jQuery("#searchRightColumnEndDate").datepicker( {});
					jQuery("#headlineDatePicker")
							.datepicker( {showOn: 'both', maxDate: new Date()})
							.addClass("embed")
							.change(function() {
								var date = (jQuery(this).val()) ? (jQuery(this).val()) : '';
								jQuery('#dateChooserForm').submit();
							});

					jQuery('#ui-datepicker-div').css("z-index", 150);

					// determine the submit type in search results page
					jQuery('#wide-submit').click( function() {
						// both keywords and author search
						if(jQuery('#authorSelectWide').val() && jQuery('#keywords').val()) {
							jQuery('#wide-submit').val('mixSearch');
						}
						// only article search
						else if(jQuery('#authorSelectWide').val()) {
							jQuery('#wide-submit').val('Search');
						}
						// text search (keywords)
						else{
							jQuery('#wide-submit').val('textSearch');
						}
					});
				});


if(jQuery('#haaretz-com2').attr('checked') && jQuery('#thisPar').val() === 'author'){
	jQuery('#authorSelect').attr('disabled', true);
}

function checkAuthorOptions(onlythis){
	if (onlythis == '1'){
		if(jQuery('#thisPar').val() === 'author'){
			jQuery('#authorSelect').attr('disabled', true);
		}
	} else {
		if(jQuery('#thisPar').val() === 'author'){
			jQuery('#authorSelect').attr('disabled', false);
		}
	}
}
