jQuery.fn.simpleLightbox = function(_options){
	// defaults options	
	var _options = jQuery.extend({
		lightboxContentBlock: '.nonelight',
		faderOpacity: 0.3,
		faderBackground: '#000000',
		closeLink:'a.close, a.cancela',
		onShow: null,
		href:true,
		onClick: null
	},_options);

	return this.each(function(i, _this){
		var _this = jQuery(_this);
		if (!_options.href)
			_this.lightboxContentBlock = _options.lightboxContentBlock;
		else _this.lightboxContentBlock = _this.attr('href');
		if (_this.lightboxContentBlock != '' && _this.lightboxContentBlock.length > 1) {
			_this.faderOpacity = _options.faderOpacity;
			_this.faderBackground = _options.faderBackground;
			_this.closeLink = _options.closeLink;
			var _d = $.browser.msie ? 0 : 400;
			var _fader;
			var _lightbox = $(_this.lightboxContentBlock);
			if (!jQuery('div.lightbox-fader').length)
				_fader = $('body').append('<div class="lightbox-fader"></div>');
			
			_fader = jQuery('div.lightbox-fader');
			_lightbox.css('zIndex',999);
			_fader.css({
				opacity:_this.faderOpacity,
				backgroundColor:_this.faderBackground,
				display:'none',
				position:'absolute',
				top:0,
				left:0,
				zIndex:998,
				textIndent: -9999
			}).text('$nbsp');

			_lightbox.shownFlag = false;

			_this.click(function(){
				if (jQuery.isFunction(_options.onClick)) {
					_options.onClick.apply(_this);
				}
				if (_fader.is(":visible")){
					$(".lightbox").each(function(){
						$(this).css("display","none");
					});
					_lightbox.shownFlag = true;
					_lightbox.fadeIn(_d,function(){
						if (jQuery.isFunction(_options.onShow)) {
							_options.onShow.apply(_lightbox);
						}
					});
					jQuery.fn.simpleLightbox.positionLightbox(_lightbox);
				} else {
					_lightbox.shownFlag = true;
					_fader.shownFlag = true; 
					_fader.fadeIn(_d);
					_lightbox.fadeIn(_d,function(){
						if (jQuery.isFunction(_options.onShow)) {
							_options.onShow.apply(_lightbox);
						}
					});
					jQuery.fn.simpleLightbox.positionLightbox(_lightbox);
				}
				return false;
			});
			jQuery(_this.closeLink, _lightbox).click(function(){
				_lightbox.fadeOut(_d, function(){
					_fader.fadeOut(_d);
				});
				return false;
			});
			_fader.click(function(){
				_lightbox.fadeOut(_d, function(){
					_fader.fadeOut(_d);
				});
				return false;
			});

			jQuery.fn.simpleLightbox.positionLightbox = function (_lbox) {
				if(!_lbox.shownFlag) return false;
				var _height = 0;
				var _width = 0;
				var _minWidth = $('body > div:eq(0)').outerWidth();
				_minWidth = 1000;
				if (window.innerHeight) {
					_height = window.innerHeight;
					_width = window.innerWidth;
				} else {
					_height = document.documentElement.clientHeight;
					_width = document.documentElement.clientWidth;
				}
				var _thisHeight = _lbox.outerHeight();
				var _page = $('body > div:eq(0)');
				if (_lbox.length) {
					if (_height > _page.outerHeight(true)) _fader.css('height',_height); else _fader.css('height',_page.innerHeight());
					if (_width < _minWidth) {_fader.css('width',_minWidth);} else {_fader.css('width','100%');}
					if (_height > _thisHeight) {
						if (!window.innerHeight) {
							_lbox.css({
								position:'absolute',
								top: (document.documentElement.scrollTop + (_height - _thisHeight) / 2)+"px"
							});
						} else {
							_lbox.css({
								position:'fixed',
								top: ((_height - _lbox.outerHeight()) / 2)+"px"
							});
						}
					}
					else {
						_lbox.css({
							position:'absolute',
							top: 0
						});
						_fader.css({
							height:_thisHeight
						});
					}
					if (_width > _lbox.outerWidth()) _lbox.css({left:(_width - _lbox.outerWidth()) / 2 + "px"});
					else _lbox.css({position:'absolute',left: 0});
				}
			}
			
			jQuery(window).resize(function(){
				jQuery.fn.simpleLightbox.positionLightbox(_lightbox);
			});
			
			jQuery.fn.simpleLightbox.positionLightbox(_lightbox);
				$(document).keydown(function (e) {
				if (!e) evt = window.event;
				if (e.keyCode == 27) {
					_lightbox.fadeOut(_d, function(){
						_fader.fadeOut(_d);
					});
				}
			});
		}
	});
}
