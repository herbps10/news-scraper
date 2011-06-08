jQuery(document).ready(function() {
	initPage();
	hideNoJSViewCommentDiv();
	if(typeof($().simpleLightbox) =='function'){
		$('a.open-popup').simpleLightbox({
			faderOpacity: 0,
			closeLink:'a.close, a.btn-close, a.close01',
			onShow: function(){
				var _this = $(this);
				var _blocks = $('.popup-block', _this);
				var _form = $('form.validate', _blocks.eq(0));
				var _close = $('form input.close', _blocks);

				_close.click(function(){
					$('a.btn-close:eq(0)', _this).trigger('click');
					var _lb = $(_this).parents('.send-friend:eq(0)');
					var _blocks = $('.popup-block', _lb);
					_blocks.show().eq(1).hide();
					return false;
				});
			}
		});
	}
});

var _serviceInstanceId;
var _selectedHeaderTopTabObj;

function initPage()
{
	/* have been moved to navigation.vm
	initAutoScalingNav({
		menuId: "nav",
		sideClasses: true,
		liHovering: true,
		spacing: 3,
		constant: 2,
		minPaddings: 10
	});
	*/
	initNewsTicker();
	initAdvancedSearch();
	initValidate();
	initFirstChild();
	initTopStories();
	initTabs("ul.tabset");
	initNav();
	miscInit();
	initNavSubpages();
}

function hideNoJSViewCommentDiv(){
	var _viewDiv = $('.viewCommentNoJS');
	_viewDiv.each(function(){
		$(this).hide();
	});
}

function initServiceInstanceId(id){
	_serviceInstanceId = id;
	if (document.getElementById("link_addr"))
		document.getElementById("link_addr").value = location.href ;
}

function initValidate(){

	var _form = $('.validate');
	_form.each(function(){
		var _this = this;
		var _submit = $('.btn-submit', $(this));
		var _required = $('.required', $(this));
		_required.each(function(){
			$(this).attr('def', $(this).attr('value'));
			$(this).focus(function(){
				if($(this).attr('value')==$(this).attr('def')) $(this).attr('value','');
			}).blur(function(){
				if($(this).attr('value')=='') $(this).attr('value',$(this).attr('def'));
			})
		})
		var _emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		_submit.click(function(){
			var step = true;
			var eror = false;
			var erorType ;
			_required.each(function(){
				if ($(this).val()==0 || $(this).val()==$(this).attr('def') && step) {
					step = false;
					eror = true;
					erorType = 'mand' ;
					$(this).parents('div:eq(0)').addClass('error');
				} else {
				$(this).parents('div:eq(0)').removeClass('error');
				if ($(this).hasClass('email') && step){
						if (!_emailReg.test($(this).val())){
							eror = true;
							erorType = 'email' ;
							step = false;
							$(this).parents('div:eq(0)').addClass('error');
						}
					};
				}
			});
			step=true;
			if (eror) {
				$('div.msg-error').css({
					visibility: 'visible'
				});

				if (erorType == 'email') {
					document.getElementById("error-txt").innerHTML = 'Email Address Is Not Legal' ;
				}
				if (erorType == 'mand') {
					document.getElementById("error-txt").innerHTML = 'Field Cannot Be Empty' ;
				}

				return false;
			}
			else {
				if($(_this).parents('.send-friend').length){
					var _data = $(_this).serialize();
					$.ajax({
						data: { ajax : "send_friend",
								recipient: jQuery("#recipient-email").val(),
								sender: jQuery("#sender-email").val(),
								message: jQuery("#message").val(),
								copy:  jQuery("#copy").attr("checked"),
								link_addr: jQuery("#link_addr").val()
								},
						error	: showError,
						success: function(){
							var _lb = $(_this).parents('.send-friend:eq(0)');
							var _blocks = $('.popup-block', _lb);
							_blocks.hide().eq(1).show();
						},
						url: "/cmlink/" + _serviceInstanceId
					});
				}
			}

			return false;
		});
	})
}

function showError(){

	var error = '';
	for (i=0;i<arguments.length;i++){
		error += '\n' + arguments[i];
	}

}

function initTabs(h_list)
{
	$(h_list).each(function(_ind, _el)
	{
		var btn_h = $(_el);
		var _btn = $(_el).find("a.tab");
		var _a = 0;
		_btn.each(function(_ind, _el)
		{
			this._box = $('#'+_el.href.substr(_el.href.indexOf("#") + 1));
			if($(_el).hasClass('active'))
			{
				this._box.show();
				_a = _ind;
			}
			else {
				this._box.hide();
			}
			_el.onclick = function()
			{
				if(!$(this).hasClass('active'))
				{
					_btn.get(_a)._box.hide();
					_btn.eq(_a).removeClass('active');
					this._box.show();
					$(this).addClass('active');
					_a = _ind;
				}
				return false;
			}
		});
	});
}
function initTopStories()
{
	var stories = $(".stories");
	$(stories).find(".h2").click(function()
	{
		$(stories).find(".today-top-stories").slideToggle();
		return false;
	});
	$(stories).find(".close").click(function()
	{
		$(stories).find(".today-top-stories").slideToggle();
		return false;
	});
}
function initFirstChild()
{
	var footer = document.getElementById("footer");
	if(footer)
	{
		var uls = footer.getElementsByTagName("ul");
		for (var i=0; i<uls.length; i++)
		{
			var li = uls[i].getElementsByTagName("li").item(0);
			li.className += " first-child";
		}
	}
}
function initNewsTicker()
{
	$(".news-ticker ul").cycle({
		fx: "fade",
		speed: 500,
		timeout: 4000,
		pause: true
	});
}
function initAdvancedSearch()
{
	var form = $(".form-search");
	$(form).find(".advanced").click(function()
	{
		$(form).toggleClass("form-search-opened");
		return false;
	});
}
function initAutoScalingNav(o)
{
	try{
		if (!o.menuId) o.menuId = "main-nav";
		if (!o.tag) o.tag = "a";
		if (!o.spacing) o.spacing = 0;
		if (!o.constant) o.constant = 0;
		if (!o.minPaddings) o.minPaddings = 0;
		if (!o.liHovering) o.liHovering = false;
		if (!o.sideClasses) o.sideClasses = false;
		var nav = document.getElementById(o.menuId);
		if(nav)
		{
			var lis = nav.getElementsByTagName("li");
			var asFl = [];
			var lisFl = [];
			for (var i=0, j=0; i<lis.length; i++)
			{
				if(lis[i].parentNode == nav)
				{
					var t = lis[i].getElementsByTagName(o.tag).item(0);
					asFl.push(t);
					asFl[j++].width = t.offsetWidth;
					lisFl.push(lis[i]);
				}

				if(o.liHovering)
				{
					lis[i].onmouseover = function(){
						if (_selectedHeaderTopTabObj && _selectedHeaderTopTabObj.className){
							_selectedHeaderTopTabObj.className = _selectedHeaderTopTabObj.className.replace("hover", "");
						}
						this.className += " hover";
						_selectedHeaderTopTabObj = this;
					}
					/*
					lis[i].onmouseout = function()
					{
						this.className = this.className.replace("hover", "");
					}
					*/
				}

				if(lis[i].getElementsByTagName("li").length > 0)
				{
					var lisChild = lis[i].getElementsByTagName("li").item(0);
					lisChild.className += " first-child";
				}
			}
			var menuWidth = nav.clientWidth - asFl.length*o.spacing - o.constant;
			if(getItemsWidth(asFl) < menuWidth)
			{
				for (var i=0; getItemsWidth(asFl) < menuWidth; i++)
				{
					asFl[i].width++;
					if(i >= asFl.length-1) i=-1;
				}
				for (var i=0; i<asFl.length; i++)
				{
					asFl[i].style.width = asFl[i].width + "px";
				}
			}
			else if(o.minPaddings > 0)
			{
				for (var i=0; i<asFl.length; i++)
				{
					asFl[i].style.width = asFl[i].width + o.minPaddings*2 + "px";
				}
			}
		}
	}catch(e){
		logError("initAutoScalingNav: Error in during navigation autoscalling", e);
	}
	function getItemsWidth(a)
	{
		var w = 0;
		for(var q=0; q<a.length; q++)
		{
			w += a[q].width;
		}
		return w;
	}
	if(o.sideClasses)
	{
		lisFl[0].className += " first-child";
		lisFl[lisFl.length-1].className += " last-child";
	}
}
function initNav()
{
	var nav = document.getElementById("nav");
	if(nav)
	{
		var lis = nav.getElementsByTagName("li");
		for (var i=0; i<lis.length; i++)
		{
			lis[i].onmouseover = function()
			{
				for (var j=0; j<lis.length; j++)
				{
					if(lis[j].className.indexOf("active") != -1 && lis[j].className.indexOf("hide") == -1)
						lis[j].className += " hide";
				}
				if (_selectedHeaderTopTabObj && _selectedHeaderTopTabObj.className){
					_selectedHeaderTopTabObj.className =_selectedHeaderTopTabObj.className.replace("hover", "");
				}
				this.className += " hover";
				_selectedHeaderTopTabObj = this;
			}
			/*
			lis[i].onmouseout = function()
			{
				for (var j=0; j<lis.length; j++)
				{
					lis[j].className = lis[j].className.replace("hide", "");
				}
				this.className = this.className.replace("hover", "");
			}
			*/
		}
	}
}
function initNavSubpages(){
	// Get first item left
	if (jQuery("#nav").length > 0){
		var initialLeft = jQuery("#nav").offset().left;
		var maxRight = jQuery("#nav").width();
	
		// Center:
		// Get item (left + item Width/2) - width/2
	
		jQuery("#nav li").each(
			function(){
				var m = maxRight;
				var li = jQuery( this );
			    var li_left = jQuery( this ).offset().left;
			    var li_width = jQuery( this ).width();
			    var ul_width =  jQuery( 'ul:first' , this ).width();
				var ul_left = li_left - initialLeft + (li_width / 2) - (ul_width / 2);
	
	
				if (ul_left < 0){
					jQuery( 'ul:first' , this ).css({"left"  : 0});
				}else if (ul_left + ul_width > m ){
					jQuery( 'ul:first' , this ).css({"left"  : m - ul_width - 5});
				}else{
					jQuery( 'ul:first' , this ).css({"left"  : ul_left});
				}
			}
		);
	}
}

function miscInit()
{
	// set download buttons in "Downloads" page
	jQuery( '#download-button' ).hover(
				function(){ jQuery( this ).attr({ 'src':'/images/btn/btn-download-dark.jpg' });},
				function(){ jQuery( this ).attr({ 'src':'/images/btn/btn-download-light.jpg' });}
		  );
	jQuery( '#dnow-button' ).hover(
			function(){ jQuery( this ).attr({ 'src':'/images/btn/btn-downloadnow-dark.jpg' });},
			function(){ jQuery( this ).attr({ 'src':'/images/btn/btn-downloadnow-light.jpg' });}
	);
	// toggle the email field display in the newsletter registration page
	//if(jQuery( '.news-reg #commercial' ).is(':checked')){
	//	jQuery( '#commercial_text' ).addClass('grey');
	//}
	//jQuery('.news-reg #commercial').click(
	//		function() {
	//			if(jQuery( this ).is(':checked')){ jQuery( '#commercial_text' ).addClass('grey'); }
	//			else { jQuery( '#commercial_text' ).removeClass('grey'); }
	//		});
}

function changeSubmitMethod(formName,method){
	var frm = document.getElementById(formName);
	if (frm){
		frm.method = method;
	}else{
		alert('Form :' + formName + ' not found.');
	}
}
//TALKBACK JS FUNCTIONS HAS BEEN MOVED TO comments.js file

function logError(){
	var msg = arguments[0];
	var err = arguments[1];
	jQuery("#debug").html(msg+", msg ["+err.message+"], desc ["+err.description+"]");
}


function hideOldBrowsers(){
	if (document.getElementById("oldBrowsers")){
		document.getElementById("oldBrowsers").style.display = "none" ;
	}

}



/*
if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
*/

