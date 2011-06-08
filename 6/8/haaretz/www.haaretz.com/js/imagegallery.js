
(function(jQuery){

	jQuery.fn.htzImageGallery = function(settings) {

		settings = jQuery.extend({
			imageBtnPrev	:'/images/btn/btn_gallery_arr_prev.png',			// (string)
																				// Path
																				// and
																				// the
																				// name
																				// of
																				// the
																				// prev
																				// button
																				// image
			imageBtnNext	:'/images/btn/btn_gallery_arr_next.png',			// (string)
																				// Path
																				// and
																				// the
																				// name
																				// of
																				// the
																				// next
																				// button
																				// image
			// imageBtnClose: 'public/images/lightbox/lightbox-btn-close.gif',
			// // (string) Path and the name of the close btn
			prefix			:'',	// (string) Specify image numeration prefix
			separator		:'/',		// (string) Specify text "of"
			// Don´t alter these variables in any way
			imageArray		:[], // total images
			activeImage		:0,
			galleryId		:0, // contentId of gallery element
			galleryWidth	:0 // default gallery width, set from the widest
								// image in the gallery
		},settings);
		var galleryInfo = this; // This, in this context, refer to jQuery object

		/**
		 * Read the data from the page and save in local variable 'settings'.
		 * (This function is called at the end of the object)
		 */
		function initialize () {
			// Unset total images in imageArray
			settings.imageArray.length = 0;
			// Unset image active information
			settings.activeImage = 0;

			// Add an Array (as many as we have), with href and title attributes
			for ( var i = 0; i < galleryInfo.length; i++ ) {
				var href = galleryInfo[i].getAttribute('href');
				var title = galleryInfo[i].getAttribute('title');
				var credit = galleryInfo[i].getAttribute('credit');
				var width = galleryInfo[i].getAttribute('width');
				var height = galleryInfo[i].getAttribute('height');

				if (href && href != ""){
					settings.imageArray.push(new Array( href, title, credit, width, height));
					if (width && width > settings.galleryWidth){
						settings.galleryWidth = width;
					}
				}
			}
			setGalleryWidth();
			// show the first gallery item (settings.activeImage == 0)
			setImageToView();
			setNavigation();
			// display the gallery
			jQuery("#galleryContainer"+settings.galleryId).show();
		};



		/** display 'activeImage' image */
		function setImageToView(){
			var gallery = jQuery("#galleryContainer"+settings.galleryId);
			if (settings.imageArray[settings.activeImage]){
				var href = settings.imageArray[settings.activeImage][0];
				var info = settings.imageArray[settings.activeImage][1];
				var credit = settings.imageArray[settings.activeImage][2];
				var width = settings.imageArray[settings.activeImage][3];
				var height = settings.imageArray[settings.activeImage][4];
				jQuery("#galleryImage", gallery).attr({
							src: href,
							alt: info,
							title: info
				});
				if (width){
					jQuery("#galleryImage", gallery).attr('width', width);
				}else{
					jQuery("#galleryImage", gallery).removeAttr('width');
				}
				if (height){
					jQuery("#galleryImage", gallery).attr('height', height);
				}else{
					jQuery("#galleryImage", gallery).removeAttr('height');
				}
				jQuery("#caption", gallery).html(info);
				if(credit && credit != ""){
					jQuery("<span>", {
						id: "credit",
						css: {
							fontStyle: "italic",
							fontSize: "10px",
							paddingLeft: "5px"
						},
						text: credit
					}).appendTo(jQuery(".caption #caption"));
				}
				jQuery("#currentNumber", gallery).html(settings.prefix + (settings.activeImage+1) + settings.separator + settings.imageArray.length);
				preloadNeighborImages();
			}
		};
		/** bind click events to navigation buttons */
		function setNavigation(){
			var gallery = jQuery("#galleryContainer"+settings.galleryId);
			jQuery("#galleryNavBtnPrev", gallery)
					.bind('click',function() {
						// Show the prev button, if not the first image in set
						if ( settings.activeImage != 0 ){
							settings.activeImage = settings.activeImage - 1;
						}else{
							// show the last image
							settings.activeImage = settings.imageArray.length - 1;
						}
						setImageToView();
						return false;
					});
			jQuery("#galleryNavBtnNext", gallery)
			.bind('click',function() {
				// Show the next button, if not the last image in set
				if ( settings.activeImage != ( settings.imageArray.length -1 ) ) {
					settings.activeImage = settings.activeImage + 1;
				}else{
					// show the first image
					settings.activeImage = 0;
				}
				setImageToView();
				return false;
			});
		};
		function setGalleryWidth(){
			if (settings.galleryWidth > 0){
				jQuery("#galleryContainer"+settings.galleryId).css("width", settings.galleryWidth+"px");
			}
		};

		/** Preload prev and next images being showed */
		function preloadNeighborImages() {
			if ( (settings.imageArray.length -1) > settings.activeImage ) {
				objNext = new Image();
				objNext.src = settings.imageArray[settings.activeImage + 1][0];
			}
			if ( settings.activeImage > 0 ) {
				objPrev = new Image();
				objPrev.src = settings.imageArray[settings.activeImage -1][0];
			}
		};

		initialize();
	};
})(jQuery); // Call and execute the function immediately passing the jQuery
			// object

