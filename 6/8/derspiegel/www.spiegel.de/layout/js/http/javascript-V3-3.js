
		SpOnENV_SERVER = window.location.protocol + '//www.spiegel.de';
	var spMobilePlusUrl;
var spOldMobileUrl;

var spMobilePlusHost="http://m.spiegel.de";
var spOldMobileHost="http://ml.spiegel.de";

var spDeviceConfig ={
	"devices": [
	           {"name": "iPad", "target":"www",
	        	"patterngroups": [
	        	                  {"white": ["ipad"]}
	        	                  ]
	           }, 
	           {"name": "iPhone/iPod", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["iphone"]},
	        	                     {"white": ["ipod"]}
	        	                     ]
	           }, 
	           {"name": "OperaMini", "target":"ignore",
	        	   "patterngroups": [
	        	                     {"white": ["opera","mobile"]},
	        	                     {"white": ["opera","mini"]},
	        	                     {"white": ["opera","htc"]}
	        	                     ]
	           },
	           {"name": "Android", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     {"white": ["android"]}
	        	                     ]
	           },
	           {"name": "Blackberry", "target":"mobileplus",
	        	   "patterngroups": [
	        	                     	{"white": ["blackberry","9800"]},
	        	                     	{"white": ["blackberry","9780"]}
	        	                     ]
	           },
	           {"name": "OldMobileDevice","target":"mobile",
	        	   "patterngroups": [
									{"white": ["blackberry"]},
									{"white": ["midp"]},
									{"white": ["240x320"]},
									{"white": ["480x640"]},
									{"white": ["netfront"]},
									{"white": ["nokia"]},
									{"white": ["panasonic"]},
									{"white": ["portalmmm"]},
									{"white": ["sharp"]},
									{"white": ["sie-"]},
									{"white": ["sonyericsson"]},
									{"white": ["symbian"]},
									{"white": ["windows ce"]},
									{"white": ["benq"]},
									{"white": ["mda"]},
									{"white": ["mot-"]},
									{"white": ["opera mini"]},
									{"white": ["philips"]},
									{"white": ["pocket pc"]},
									{"white": ["sagem"]},
									{"white": ["samsung"]},
									{"white": ["sda"]},
									{"white": ["sgh-"]},
									{"white": ["vodafone"]},
									{"white": ["xda"]},
									{"white": ["htc"]},
									{"white": ["palm"]},
									{"white": [" arm"]},
									{"white": ["webos"]},
									{"white": ["mobile"]},
									{"white": ["mobi"]},
									{"white": ["mini"]},
									{"white": ["XV6850"]},
									{"white": ["plucker"]},
									{"white": ["Phone"]},
									{"white": ["Novarra-Vision"]},	        	                     
	        	                    {"white": ["windows", "mobi"]},
	        	                    {"white": ["opera", "mobi"]},
	        	                    {"white": ["nintendo", "dsi"]}
	        	                     ]
		       },
	           {"name": "Desktop", "target":"www",
	        	   "patterngroups": [
	        	                     {"white": ["Windows"]},
	        	                     {"white": ["Linux"]},
	        	                     {"white": ["konqueror"]},
	        	                     {"white": ["Macintosh"]},
	        	                     {"white": ["mac_powerpc"]}
	        	                     ]
			   }
	           ]
};

if (spMobilePlusUrl && spOldMobileUrl) {
	var skipDelegation = SPONgetCookie('spSkipDelegation');
	var spMobileHpFull = SPONgetCookie('spMobileHpFullView');
	if (spMobileHpFull != null && spMobileHpFull == 'true') {
		if (spMobilePlusUrl == '/index.html')
			spMobilePlusUrl='/index-full.html';
	}
	
	if (skipDelegation == null || skipDelegation != 'true') {
		var redirectHash="#spRedirectedFrom=www";
		var ua=navigator.userAgent;
		
		var device=spFindDevice(spDeviceConfig, ua);
		if (device != null) {
			if (device.target == 'mobileplus')
				document.location.href=spMobilePlusHost+spMobilePlusUrl+redirectHash;
			else if (device.target == 'mobile')
				document.location.href=spOldMobileHost+spOldMobileUrl;
		}
	}
}



function spFindDevice(spDeviceConfig, ua) {
	ua=ua.toLowerCase();
	var devices=spDeviceConfig.devices;
	for (var key in devices) {
		var device=devices[key];

		var patterngroups=device.patterngroups
		for (var p in patterngroups) {

			var  found = true;
			var patternList=patterngroups[p].white
			for (var k in patternList) {
				var pattern=patternList[k].toLowerCase();
				if (ua.indexOf(pattern) == -1) {
					found=false;
					break;
				}
			}
			if (found) {
				var patternList=patterngroups[p].black
				for (var k in patternList) {
					var pattern=patternList[k].toLowerCase();
					if (ua.indexOf(pattern) != -1) {
						found=false;
						break;
					}
				}
			}
			if (found)
				return device;			
		}
	}
	return null;
}SpOnENV_FlashvideoPopupParams  = 'width=769,height=489,scrollbars=no,resizable=no,screenX=150,screenY=100';
SpOnENV_PopTopPopupParams = 'width=500,height=310,resizable,screenX=150,screenY=100,status=no';

function goURL(frmlrname){
	adresse = document.forms[frmlrname].to.options[document.forms[frmlrname].to.selectedIndex].value;
	if(adresse=="") adresse = "javascript:void(0)";
	if(adresse.substr(0,1) == '/') adresse = SpOnENV_SERVER + adresse;
	window.location = adresse;
}

function RandomImg (Pfad,aBilder,Ext){
	if (typeof(Ext)=='undefined')Ext = "";
	if (Pfad =="img"){
		Pfad = SpOnENV_SERVER_IMG + "/img/0,1020,";
		if(Ext!="") Ext = ",00" + Ext;
	} else {
		Pfad = SpOnENV_SERVER_IMG + "/static/img/" + Pfad;
	}
	return Pfad + aBilder[Math.round(Math.random()*(aBilder.length-1))] + Ext;
}

function spon_popup(seite,breite,hoehe,scroll,rsize) {
	sbars = (scroll==1)? "yes" : "no";
	rsize = (rsize==1)? "yes" : "no";
	if(seite.substr(0,1) == '/') seite = SpOnENV_SERVER + seite;
	var win_name = breite+hoehe;
	var win_attr = "menubar=no,location=no,directories=no,toolbar=no,screenX=0,screenY=0";
	win_attr += ",width=" + breite + ",height=" + hoehe + ",scrollbars=" + sbars + ",resizable=" + rsize;
	sponWin = open(seite,win_name,win_attr);
	sponWin.focus();
}

function spToggleMPC(cid,nr) {
	for (i=1;i<=50;i++) {
		var mytab = document.getElementById('spMPCTab-'+cid+'-'+i);
		if (mytab) {
			if (nr == i) {
				mytab.className = 'spMPCTab spMPCTabAktiv';
				document.getElementById('spMPCContent-'+cid+'-'+i).style.display = 'block';
				spCounterContentainer(cid);
			} else {
				mytab.className = 'spMPCTab';
				document.getElementById('spMPCContent-'+cid+'-'+i).style.display = 'none';
			}
		} else {
			break;
		}
	}
}

function spToggleMultiboxReiter(assetid,nr) {
	for (i=1;i<=50;i++) {
		var mytab = document.getElementById('spMPCTab-'+assetid+'-'+i);
		if (mytab) {
			if (nr == i) {
				mytab.className = 'spMPCTab spMPCTabAktiv';
				document.getElementById('spMPCContent-'+assetid+'-'+i).style.display = 'block';
				spCounterMultibox(assetid);
			} else {
				mytab.className = 'spMPCTab';
				document.getElementById('spMPCContent-'+assetid+'-'+i).style.display = 'none';
			}
		} else {
			break;
		}
	}
}

function spShowCenterGallery(gid,nr) {
	for (i=1;i<=3;i++) {
		var mypic = document.getElementById('spCenterGalleryPic-'+gid+'-'+i);
		if (mypic) {
			if (nr == i) {
				document.getElementById('spCenterGalleryPic-'+gid+'-'+i).style.display = 'inline';
				document.getElementById('spCenterGalleryCredit-'+gid+'-'+i).style.display = 'block';
				document.getElementById('spCenterGalleryControl-'+gid+'-'+i).src='/static/sys/v9/icons/ic_paginate_'+i+'_aktiv.gif';
				//document.getElementById('spCenterGalleryControl-'+gid+'-'+i).className = 'spCenterGalleryControl spActive';
				spCounterGallery(gid);
			} else {
				document.getElementById('spCenterGalleryPic-'+gid+'-'+i).style.display = 'none';
				document.getElementById('spCenterGalleryCredit-'+gid+'-'+i).style.display = 'none';
				document.getElementById('spCenterGalleryControl-'+gid+'-'+i).src='/static/sys/v9/icons/ic_paginate_'+i+'.gif';
				//document.getElementById('spCenterGalleryControl-'+gid+'-'+i).className = 'spCenterGalleryControl';
			}
		} else {
			break;
		}
	}
}

function spCounterGallery(galleryid) {
	spCounter('/fotostrecke/fotostrecke-' + galleryid + '-count.html');
}
function spCounterFlash(flashid) {
	spCounter('/flash/flash-' + flashid + '-count.html');
}
function spCounterContentainer(contentainerid) {
	spCounter('/count/contentainer/0,,' + contentainerid + ',00.html');
}
function spCounterMultibox(assetid) {
	spCounter('/assetcounter/multibox-' + assetid + '.html');
}
function spCounter(url) {
	if (typeof(spon_vdz_countframe) != 'undefined') spon_vdz_countframe.location.href = SpOnENV_SERVER + url;
}

function spFramebuster() {
	if (top!=self) {
		top.location.href=self.location.href;
	}
}

function SPONgetCookie (name)
{
	function SPONgetCookieVal (offset)
	{
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;
		return unescape(document.cookie.substring(offset, endstr));
	}
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return SPONgetCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	}
	return null;
}

function spGetHashParams() {
	var loc=(document.location+"");
	var pos=loc.indexOf("#");
	if (pos == -1)
		return [];
	var hashQs=loc.substring(pos+1, loc.length);
	return spSplitParams(hashQs);
}
function spSplitParams(params) {
	var result=[];
	var pairs=params.split("&");
	for (var i=0; i < pairs.length; i++) {
		var kv=pairs[i].split("=");
		if (kv.length == 2)
			result[kv[0]]=kv[1];
	}
	return result;
}
function spShowOASPos(pos) {
	var color='red';
	if (typeof OAS_listpos != 'undefined' && typeof OAS_allposlist != 'undefined') {
		var searchpos = new RegExp('(^|,)'+pos+'(,|$)');
		if (searchpos.exec(OAS_listpos)) {
			color='lightgreen';
		} else if (searchpos.exec(OAS_allposlist)) {
			color='yellow';
		}
	}
	document.write('<div style="display:inline; border:1px solid black; background-color:'+color+'; text-decoration:blink;  margin:1px; padding:1px; font-size:12px; font-family: Arial; font-weight:bold">Ad: ' + pos + '</div>');
}


function spOpenLargePicture(page, width, height) {
	spon_popup(page,width+20,height+25,false,false);	
}

function spSetCookie(name, value, daystoexpire, path, domain, secure) {

	var expires = new Date();
	expires.setTime(expires.getTime() + (daystoexpire * 86400000));

	document.cookie= name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
} 

// HP-Channelboxen
function spHPTeaserInit(allchannels) {
	spHPTeaserLen = {};
	var cookie = SPONgetCookie('spHPTeaser');
	if (cookie != null) {
		var channel = cookie.split(' ');

		for (var i in channel) {
			spHPTeaserLen[channel[i]] = 1;
		}
	}
	var allchannelslist = allchannels.split(' ');
	for (var c in allchannelslist) {
		spHPTeaserToggle(allchannelslist[c],(typeof(spHPTeaserLen[allchannelslist[c]]) == 'undefined' ? 'less' : 'more'),0);
	}
	return false;
}

function spHPTeaserToggle(channelname, what, save) {
	if (typeof(spHPTeaserLen) == 'undefined') {
		spHPTeaserLen = {};
	}
	if (what == 'more') {
		spHPTeaserLen[channelname] = '1';
		document.getElementById('spRTmore_'+channelname).style.display = 'block';
		document.getElementById('spRTless_'+channelname).style.display = 'none';
	} else if (what == 'less'){
		if (typeof(spHPTeaserLen[channelname]) != 'undefined') {
			delete spHPTeaserLen[channelname];
		}
		document.getElementById('spRTmore_'+channelname).style.display = 'none';
		document.getElementById('spRTless_'+channelname).style.display = 'block';
	} else {
		return false;
	}
	
	if (save == 1) {
		var cookie = '';
		for (var c in spHPTeaserLen) {
			cookie = cookie + (cookie.length > 0 ? ' ' : '') + c
		}
		spSetCookie('spHPTeaser',cookie,365);
	}
	return false;
}

function spSetObjectHeight(id,newSize) {
    document.getElementById(id).height = newSize;
}
function spSetObjectSize(id,newWidth,newHeight) {
    document.getElementById(id).height = newHeight;
    document.getElementById(id).width  = newWidth;
}

function spClientIsIPad() {
	return navigator.userAgent.indexOf('iPad') > -1;
}

function spUtfSubmit(f) {
	if (navigator.appVersion.toLowerCase().indexOf("msie 6.") > 0 || navigator.appVersion.toLowerCase().indexOf("msie 7.") > 0) {  
		var url=f.action + '?';
		for (i = 0; i < f.elements.length; i++) {
			if (f.elements[i].name != 'undefined' && f.elements[i].name != '') {
				if (i>0) url += '&';
				url += f.elements[i].name + '=' + encodeURIComponent(f.elements[i].value)
			}
		}
		this.location.href=url;
		return false;
	} else {
		return true;
	}
}/* Calendar */

var spCalendar = function(initDate, startDate, endDate, contentainer) {
	this.initDate=initDate;
	if (contentainer != null)
		this.contentainerObject=document.getElementById(contentainer);
	this.months=new Array("Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli","August", "September", "Oktober", "November", "Dezember");
	this.weekDays=new Array("Mo", "Di", "Mi", "Do", "Fr", "Sa", "So");	
	this.year=null;
	this.month=null;
	this.day=null;
	this.date=null;
	this.startDate=startDate;
	this.endDate=endDate;
}

spCalendar.prototype = {

	init: function() {
		if (this.isDateValid(this.initDate)) {
			year=this.initDate.substring(0,4);
			month=this.initDate.substring(4,6);
			day=this.initDate.substring(6,8);
			this.date=new Date(year, month - 1, day);
		}
		else {
			this.date=new Date();
		}
	},

	isDateValid: function(date) {
		return (date != null && date != "" && !isNaN(date) &&	date.length == 8);
	},
	
	prepare: function() {
		if (this.date != null) {
			this.year=this.date.getFullYear();
			this.month=this.date.getMonth()+1;
			this.day=this.date.getDate();
		}
	}, 
	
	draw: function() {
		if (this.contentainerObject != null) {

			this.prepare();
			
			// Start Day of Calendar 
			var tmpDate=this.date;
			tmpDate.setDate(1);
			
			var firstDayOfMonth = tmpDate.getDay();
			if (firstDayOfMonth > 0)
				firstDayOfMonth--;
			else
				firstDayOfMonth=6;

			var daysInMonth = 31;
			if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11)
				--daysInMonth;
			if (this.month == 2) {
				daysInMonth = daysInMonth - 3;
				if (this.year % 4 == 0)
					daysInMonth++;
				if (this.year % 100 == 0)
					daysInMonth--;
				if (this.year % 400 == 0)
					daysInMonth++;
			}

			var table="";
			table+="<div id=\"spCalenderHead\"><p>DAS SEITE-2-ARCHIV</p>";

			table+="<table cellpadding=\"0\" cellspacing=\"0\">";
			table+="<tr>";
			if (this.hasPrevMonth())
				table+="<td width=\"40\"><a href=\"javascript:void(0)\" id=\"spBtnBack\"><img src=\"/static/sys/v8/icons/pfeil-links-aktiv.jpg\" /></a></td>";
			else 
				table+="<td width=\"40\"><img src=\"/static/sys/v8/icons/pfeil-links-inaktiv.jpg\" /></td>";

			table+="<td width=\"202\">" + this.months[this.month-1] + " " + this.year + "</td>";
			if (this.hasNextMonth())
				table+="<td width=\"40\"><a href=\"javascript:void(0)\" id=\"spBtnNext\"><img src=\"/static/sys/v8/icons/pfeil-rechts-aktiv.jpg\" /></a></td>";
			else
				table+="<td width=\"40\"><img src=\"/static/sys/v8/icons/pfeil-rechts-inaktiv.jpg\" /></td>";

			table+="</tr>";
			table+="</table></div>";

			table+="<table cellpadding=\"0\" cellspacing=\"0\" id=\"spCalender\">";
			table+="<tr>";
			for (var i = 0; i <= 6; i++) {
				table+="<td><span>";
				table+=this.weekDays[i];
				table+="</span></td>";
			}
			table+="</tr>";
			
			var dayCount=1;
			//Rows
			for (var i = 0; i <= 5; i++) {
				if (dayCount <= daysInMonth) {
					table+="<tr>";
					// Columns
					for (var j = 0; j <= 6; j++) {
						if ((i == 0) && (j < firstDayOfMonth)) {
							table+="<td>&nbsp;</td>";
						}
						else {
							if (dayCount > daysInMonth) {
								table+="<td>&nbsp;</td>";
							}
							else {
								var dateString=this.year+""+(this.month < 10 ? "0"+this.month:this.month)+""+(dayCount<10?"0"+dayCount:dayCount);
	
								var drawLink=false;
								var today=false;
								if (dateString == this.initDate)
									today=true;
	
								if (dateString != this.initDate) {
									if (this.isDateValid(this.startDate) && this.isDateValid(this.endDate)) {
										if (parseInt(dateString) >= parseInt(this.startDate) && 
												parseInt(dateString) <= parseInt(this.endDate))
											drawLink=true;
										//alert(dateString + ">" + this.startDate +"\n" + dateString + "<" + this.endDate);
									}
									else if (this.isDateValid(this.startDate)) {
										if (parseInt(dateString) >= parseInt(this.startDate)) {
											drawLink=true;
										} 
									}
									else if (this.isDateValid(this.endDate)) {
										if (parseInt(dateString) < parseInt(this.endDate)) {
											drawLink=true;
										} 
									}
								}
	
								if (today)
									table+="<td class=\"spActive\">" + dayCount + "</td>";
								else if (this.endDate == dateString)
									table+="<td><a href=\"/home/seite2/index.html\">" + dayCount + "</a></td>";
								else if (drawLink)
									table+="<td><a href=\"/home/seite2/archiv-"+dateString+".html\">" + dayCount + "</a></td>";
								else
									table+="<td>" + dayCount + "</td>";
								dayCount++;
							 }
						}
					}
					table+="</tr>";
				}
			}
			table+="</table>";

			this.contentainerObject.innerHTML=table;

			var object=this;

			var btnNext=document.getElementById("spBtnNext");
			if (btnNext != null) {
				btnNext.onclick=function() {
					object.incMonth();
				}
			}
			var btnBack=document.getElementById("spBtnBack");
			if (btnBack != null) {
				btnBack.onclick=function() {
					object.decMonth();
				}
			}
		}
	},

	incMonth: function() {
		this.date.setMonth(this.date.getMonth()+1);
		this.draw();
	},
	
	decMonth: function() {
		this.date.setMonth(this.date.getMonth()-1);
		this.draw();
	},

	hasPrevMonth: function() {
		if (this.isDateValid(this.startDate)) {
			var sd=this.startDate.substring(0,6);
			var m=this.date.getMonth()+1;
			m=m < 10 ? "0"+m:m;
			var nd=this.date.getFullYear()+""+m;
			return (parseInt(sd) < parseInt(nd))
		}
		return true;
	},

	hasNextMonth: function() {
		if (this.isDateValid(this.endDate)) {
			var sd=this.endDate.substring(0,6);
			var m=this.date.getMonth()+1;
			m=m < 10 ? "0"+m:m;
			var nd=this.date.getFullYear()+""+m;
			return (parseInt(sd) > parseInt(nd))
		}
		return true;
	},

	getNextDayLink: function() {
		if (this.isDateValid(this.initDate) && this.isDateValid(this.endDate)) {
			if (this.initDate < this.endDate) {
				var tmp=new Date(this.date);
				tmp.setDate(tmp.getDate()+1);
				var m=tmp.getMonth()+1;
				var d=tmp.getDate();			
				return tmp.getFullYear()+""+(m<10?"0"+m:m)+""+(d<10?"0"+d:d);
			}
		}
		return "";
		
	},
	
	getLastDayLink:function() {
		if (this.isDateValid(this.initDate) && this.isDateValid(this.startDate)) {
			if (this.initDate > this.startDate) {
				var tmp=new Date(this.date);
				tmp.setDate(tmp.getDate()-1)
				var m=tmp.getMonth()+1;
				var d=tmp.getDate();
				return tmp.getFullYear()+""+(m<10?"0"+m:m)+""+(d<10?"0"+d:d);
			}
		}
		return "";
	
	}
}
/* /Calendar */
function spShowVideo(a, videoid, category){
	if (spClientIsIPad() && parseInt(videoid) >= 1039540) {
		a.href = '/video/ipad/video-'+videoid+'.html';
		a.target= '_self';
		return true;
	} else if (category != null && (category == '48' || category == '49')){
		var hashParams="";
		try {
			var params=spGetHashParams();
			var oasVideoBelegung=params["oas.videobelegung"];
			if (oasVideoBelegung != null)
				hashParams="#oas.videobelegung=" + oasVideoBelegung;
		}
		catch(e) {
		}
		window.open('http://www.spiegel.de/video/video-'+videoid+'.html' + hashParams, 'SPONflashvideo', SpOnENV_FlashvideoPopupParams).focus();
		return false;
	} else {
		return true;
	}
}

var spOasAllowPanoPlayerAds = 1;
var spOasSetPanoPlayerCategory = null;
function spPanoPlayerPlay (videoid, category) {
	return spPanoPlayPlay2(videoid, category, 1);
}

function spPanoPlayerPlay2 (videoid, category, allowAds) {
	if (spClientIsIPad() && parseInt(videoid) >= 1039540) {
		location.href = '/video/ipad/media/video-'+videoid+'.html';
	} else {
		if (spOasSetPanoPlayerCategory != null) {
			category = spOasSetPanoPlayerCategory;
		}
		try {
			var params=spGetHashParams();
			var oasVideoBelegung=params["oas.videobelegung"];
			if (oasVideoBelegung != null)
				category = oasVideoBelegung;
		}
		catch (e) {};
		
		var PlayerFlashVars = {
			brand: 				"sponCenterPlayer",
			disableHQ : 		"true",
			allowAds:			(spOasAllowPanoPlayerAds && allowAds) ? 1 : 0,
			category:			category,
			fitVideoToStage : 	"true",
			videoid: 			videoid
		};
		var PlayerParams = {
			allowScriptAccess: "always",
			allowFullScreen: "true",
			wmode: "opaque",
			menu: "false"
		};
	
		swfobject.embedSWF("/static/flash/flashvideo/videoplayer-pan-4-006.swf", "spPanoPlayerPane" + videoid , "522", "320", "10.0.0", "", PlayerFlashVars, PlayerParams);
	
		document.getElementById('spPanoPlayerPicCredit' + videoid).style.display = 'none';
		document.getElementById('spPanoPlayerVideoCredit' + videoid).style.display = 'block';
	}
	return false;
}


// wird die TimeSeen-Funktion mit dem neuen Player noch verwendet /noch ausgewertet? prüfen!

var spOasTimeseenUrl = '';
var spOasCurrentTimeseen = -1;
function spOasSetCurrentTimeseen(seconds) {
	spOasCurrentTimeseen = seconds;
}
function spOasSetTimeseenUrl(url) {
	spOasTimeseenUrl = url;
}
function spOasTimeseenOnunload() {
	if (spOasCurrentTimeseen >= 0 && spOasCurrentTimeseen < 999)
	{
		if (spOasTimeseenUrl)
		{
			TimeseenPic = new Image();
			TimeseenPic.src = spOasTimeseenUrl.replace("\[sekunden.gif\]", spOasCurrentTimeseen + ".gif");
		}
	}
}

// Reminder für alten Popup-Player

function spOasSetReminder(html){
	if (html == null || html == 'null') {
		html = "";
	}
	document.getElementById('spOasReminder').innerHTML = html;
}

function spPanoPlayerResize(videoid,newSize) {
	document.getElementById("spPanoPlayerPane"+videoid).height = newSize;
	document.getElementById("spPanoPlayer"+videoid).style.height = (parseInt(newSize)+20) + 'px';
}


/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();// NaviInit IE6 
function spMainNaviInit() {
	if (document.all && document.getElementById) {
		var spNavContainer = document.getElementById("spChannel");
		var spNavis = spNavContainer.getElementsByTagName('ul');
		for (var i in spNavis) {
			var ul = spNavis[i];
//			wenn 2. Ebene, ...
			if (ul.nodeName == 'UL') {
				var spNavItems = spNavContainer.getElementsByTagName('li');
				for (var j in spNavItems) {
					var li = spNavItems[j];
//					...dann 3. Ebene einblenden, falls vorhanden
					if (li.nodeName == 'LI') {
						li.onmouseover = function() {
//							lazy initialization
							if (! this.spSubNav) {
								var spSubNavTmp = this.getElementsByTagName('ul')[0];
								if (spSubNavTmp && spSubNavTmp.nodeName == 'UL' && spSubNavTmp.className == 'spNaviLevel2')
									this.spSubNav = spSubNavTmp;
							}
							if (this.spSubNav) {
								this.spSubNav.style.display = "block";
							}
						}
						li.onmouseout = function() {
//							lazy initialization
							if (! this.spSubNav) {
								var spSubNavTmp = this.getElementsByTagName('ul')[0];
								if (spSubNavTmp && spSubNavTmp.nodeName == 'UL' && spSubNavTmp.className == 'spNaviLevel2')
									this.spSubNav = spSubNavTmp;
							}
							if (this.spSubNav)
								this.spSubNav.style.display = "none";
						}
					}
				}
			}
		}
	}
}
function spSynchDatumBis(FORM)
{
    if (FORM.suchzeitraum.selectedIndex == 0)
    {
        // Nichts tun
    }
    else
    {                            // - Bis-Datum aus Rollo-Wert errechnen
        FORM.spSearchFromDate.value = getDatumFromKey(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        FORM.spSearchToDate.value = getDatumBisKey(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        if (FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value == "all")
        {
            FORM.spSearchToDate.value = "";
        }
    }
}

function spSynchDatumBisInternational(FORM)
{
    if (FORM.suchzeitraum.selectedIndex == 0)
    {
        // Nichts tun
    }
    else
    {                            // - Bis-Datum aus Rollo-Wert errechnen
        FORM.spSearchFromDate.value = getDatumFromKeyInternational(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        FORM.spSearchToDate.value = getDatumBisKeyInternational(FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value);
        if (FORM.suchzeitraum.options[FORM.suchzeitraum.selectedIndex].value == "all")
        {
            FORM.spSearchToDate.value = "";
        }
    }
}


function getDatumBisKey(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "all"      : ret = "";             break;
        case "2005"      : ret = "31.12.2004";     break;
        case "2000"       : ret = "31.12.1999";     break;
        case "1995"     : ret = "31.12.1994";     break;
        case "1990"     : ret = "31.12.1989";     break;
        case "1980"     : ret = "31.12.1979";     break;
        case "1970"     : ret = "31.12.1969";     break;
        case "1960"     : ret = "31.12.1959";     break;
        default           : ret = "";             break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumBisKeyInternational(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "all"      : ret = "";             break;
        case "2005"      : ret = "12/31/2004";     break;
        case "2000"       : ret = "12/31/1999";     break;
        case "1995"     : ret = "12/31/1994";     break;
        case "1990"     : ret = "12/31/1989";     break;
        case "1980"     : ret = "12/31/1979";     break;
        case "1970"     : ret = "12/31/1969";     break;
        case "1960"     : ret = "12/31/1959";     break;
        default           : ret = "";             break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumFromKey(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "week"   : ret = datum7Tage;     break;
        case "month"   : ret = datum30Tage;     break;
        case "year"      : ret = datum1Jahr;     break;
        case "ab2005"      : ret = "01.01.2005";     break;
        default           : ret = "";         break; // tt.mm.jjjj
    }

    return ret;
}

function getDatumFromKeyInternational(key)
{
    var ret = "";

    switch (key)
            {
        case ""           : ret = "";             break;
        case "week"   : ret = datum7TageInternational;     break;
        case "month"   : ret = datum30TageInternational;     break;
        case "year"      : ret = datum1JahrInternational;     break;
        case "ab2005"      : ret = "01/01/2005";     break;
        default           : ret = "";         break; // tt.mm.jjjj
    }

    return ret;
}

//-------------------------------------
//value-Werte fuer DATUM_ROLLO-Optionen
var datumHeute = "";
var datumGestern = "";
var datum7Tage = "";
var datum7TageInternational = "";
var datum30Tage = "";
var datum30TageInternational = "";
var datum90Tage = "";
var datum1Jahr = "";
var datum1JahrInternational = "";
var datum2Jahre = "";
var datum3Jahre = "";

makeValues_Datum_Rollo();
//-------------------------------------


function makeValues_Datum_Rollo()
{
    //      --- option-value-Werte fuer Rollo vb bzw. DATUM_ROLLO
    var dateNow = new Date();                  // Datum-heute, Typ Date
    var milliNow = dateNow.getTime();           // Datum-heute in Millisek. seit Computers Geburt

    var dateX = new Date();                  // Hilfsvar., Typ Date
    var milliX = 0;

    milliX = milliNow - 1000 * 60 * 60 * 24;    // vor 1 Tag: 7Tage*24Std*60min*60sec*1000ms
    dateX.setTime(milliX);                  // Date-Objekt
    datumGestern = date2datumAnzeige(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 7;    // vor 7 Tagen: 7Tage*24Std*60min*60sec*1000ms
    dateX.setTime(milliX);                  // Date-Objekt
    datum7Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'
    datum7TageInternational = date2datumAnzeigeInternational(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 30;   // vor 30 Tagen
    dateX.setTime(milliX);                  // Date-Objekt
    datum30Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'
    datum30TageInternational = date2datumAnzeigeInternational(dateX); // 'tt.mm.iijj'

    milliX = milliNow - 1000 * 60 * 60 * 24 * 90;   // vor 90 Tagen
    dateX.setTime(milliX);                  // Date-Objekt
    datum90Tage = date2datumAnzeige(dateX); // 'tt.mm.iijj'

    var yearNow = dateNow.getYear();    // numer. iijj oder jj
    if (yearNow < 1900)
        yearNow += 1900;                  // num iijj

    var monthNow = dateNow.getMonth() + 1;
    if (monthNow < 10)
        monthNow = "0" + monthNow;        // mm

    var dayNow = dateNow.getDate();
    if (dayNow < 10)
        dayNow = "0" + dayNow;            // tt

    var monthLastYear = "" + monthNow;
    var dayLastYear = "" + dayNow;

    if (monthNow == "02" && dayNow == "29")
    {
        monthLastYear = "03";
        dayLastYear = "01";
    }

    datumHeute = dayNow + "." + monthNow + "." + yearNow;
    datum1Jahr = dayLastYear + "." + monthLastYear + "." + (yearNow - 1);
    datum1JahrInternational = monthLastYear + "/" + dayLastYear + "/" + (yearNow - 1);
    datum2Jahre = dayLastYear + "." + monthLastYear + "." + (yearNow - 2);
    datum3Jahre = dayLastYear + "." + monthLastYear + "." + (yearNow - 3);
}

function date2datumAnzeige(dateObj)

    //      // Rein: Objekt, das mit dateObj = new Date(); def. wurde
    //      // Raus: String 'tt.mm.iijj' fuer FROM/TO_DATE_DISPLAY
{
    var yearDisplay = dateObj.getYear();
    if (yearDisplay < 1900) yearDisplay += 1900;

    var monthDisplay = dateObj.getMonth() + 1;
    if (monthDisplay < 10) monthDisplay = "0" + monthDisplay;

    var dayDisplay = dateObj.getDate();
    if (dayDisplay < 10) dayDisplay = "0" + dayDisplay;

    var dateDisplay = dayDisplay + "." + monthDisplay + "." + yearDisplay;
    return dateDisplay;
}

function date2datumAnzeigeInternational(dateObj)

    //      // Rein: Objekt, das mit dateObj = new Date(); def. wurde
    //      // Raus: String 'tt.mm.iijj' fuer FROM/TO_DATE_DISPLAY
{
    var yearDisplay = dateObj.getYear();
    if (yearDisplay < 1900) yearDisplay += 1900;

    var monthDisplay = dateObj.getMonth() + 1;
    if (monthDisplay < 10) monthDisplay = "0" + monthDisplay;

    var dayDisplay = dateObj.getDate();
    if (dayDisplay < 10) dayDisplay = "0" + dayDisplay;

    var dateDisplay = monthDisplay + "/" + dayDisplay + "/" + yearDisplay;
    return dateDisplay;
}



var spSearchCookie="spSearchCookie";

function spSearchVerifyCookie() {
	var url = document.location + ""
	queryParams = spGetQueryStringParameter(url);
	var offset = queryParams["offset"];
	if (!offset) {
		spSetCookie(spSearchCookie, Array(), null, "/", null, null);
	}
}

function spSearchStoreUrl() {

	var url = document.location + ""
	queryParams = spGetQueryStringParameter(url);
	var pageNumber = queryParams["pageNumber"];
	if (pageNumber && pageNumber != 1)
		url = url.replace("pageNumber=" + pageNumber, "pageNumber=1");

	var offset = queryParams["offset"];
	if (!offset)
		offset=0;

	var cookie=spSearchGetCookie(spSearchCookie);
	
	if (cookie.length <= offset) {
		cookie.push(url);
		spSearchSetCookie(spSearchCookie, cookie, null, "/", null, null);
	}
}

function spSearchGoBack() {
	
	var cookie=spSearchGetCookie(spSearchCookie);
	if (cookie.length > 0) {

		var url = document.location + ""
		queryParams = spGetQueryStringParameter(url);
		var offset = queryParams["offset"];
		if (offset && cookie.length >= offset) {

			backurl=cookie[offset-1];
			document.location.href=backurl;
		}
	}
}

function spSearchDrawBackLink() {
	var cookie=spSearchGetCookie(spSearchCookie);
	if (cookie.length > 0) {
		
	    document.write('<div class="spItemNumber">');
	    document.write('<a href="javascript:spSearchGoBack()" style="font-size:1.4em">');
	    document.write('&#x25C4;');
	    document.write('</a>');
	    document.write('</div>');

	}

}

function spGetQueryStringParameter(queryString) {
	pairs = Array();
	queryString = queryString.substring(queryString.indexOf("?") + 1,
			queryString.length);
	qs = queryString.split("&");
	for (i = 0; i < qs.length; i++) {
		pair = qs[i].split("=");
		if (pair[1])
			pairs[pair[0]] = pair[1];
	}
	return pairs;
}

function spSearchSetCookie(name, cookie, expires, path, domain, secure) {
	if (cookie)
		cookievalue=cookie.join(";");
	else 
		cookievalue=null;
	spSearchSetCookieString(name, cookievalue, expires, path, domain, secure);
}

function spSearchSetCookieString(name, value, expires, path, domain, secure) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime(today.getTime());

	/*
	 if the expires variable is set, make the correct
	 expires time, the current script below will set
	 it for x number of days, to make it for hours,
	 delete * 24, for minutes, delete * 60 * 24
	 */
	if (expires) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date(today.getTime() + (expires));

	document.cookie = name + "=" + escape(value)
			+ ((expires) ? ";expires=" + expires_date.toGMTString() : "")
			+ ((path) ? ";path=" + path : "")
			+ ((domain) ? ";domain=" + domain : "")
			+ ((secure) ? ";secure" : "");
}


function spSearchGetCookie(check_name) {
	var cookie=spSearchGetCookieString(check_name);
	if (!cookie)
		cookie=Array();
	else 
		cookie=cookie.split(";");

	return cookie
}

function spSearchGetCookieString(check_name) {
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split(';');
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f

	for (i = 0; i < a_all_cookies.length; i++) {
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split('=');

		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

		// if the extracted name matches passed check_name
		if (cookie_name == check_name) {
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if (a_temp_cookie.length > 1) {
				cookie_value = unescape(a_temp_cookie[1].replace(
						/^\s+|\s+$/g, ''));
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if (!b_cookie_found) {
		return null;
	}
}
 var spTmpImgSetToLoad;
//Muss ausserhalb des spEnhPaginators stehen, da per timeout aufgerufen...
function spLoadDeferImgSet(prefix) {
	for (var i=0; i < spTmpImgSetToLoad.length; i++) {
		var imgElement=document.getElementById(prefix + i);
		if (imgElement != null)
			imgElement.src = spTmpImgSetToLoad[i];
	}
}
var spEnhPaginator = function(paginatorId, imageSets) {
	this.pages=[];
	this.controls=[];
	this.imageSets=imageSets;
	this.completedImageSets=(imageSets != null) ? new Array(imageSets.length) : null;
	this.index=0;
	this.paginatorId=paginatorId;
	this.imageSetToLoad=null;
	this.currentPage=null;
	this.currentControl=null;
	this.initDone=false;
	this.onChangePage=null;
}
spEnhPaginator.prototype = {
		checkInit: function() {
	if (!this.initDone) {
		var container=document.getElementById(this.paginatorId);
		var pagesTmp=container.getElementsByTagName('DIV');
		for (key=0; key < pagesTmp.length; key++) {
			if (pagesTmp[key].className == 'spPaginatorPage') {
				this.pages.push(pagesTmp[key]);
			}
			if (pagesTmp[key].className == 'spPaginatorControl' || pagesTmp[key].className == 'spPaginatorControl spActive') {
				this.controls.push(pagesTmp[key]);
			}
		}
		this.currentPage=this.pages[this.index];
		this.currentControl=this.controls[this.index];
		this.initDone=true;
	}
},
showNext: function(element) {
	this.checkInit();
	var oldIndex = this.index++;
	if (this.index >= this.pages.length)
		this.index = 0;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
showPrev: function(element) {
	this.checkInit();
	var oldIndex = this.index--;
	if (this.index < 0)
		this.index = this.pages.length - 1;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
showNum: function(element) {
	this.checkInit();
	var oldIndex = this.index;
	this.index = arguments[0];
	if (this.index < 0)
		this.index = this.pages.length - 1;
	if (this.onChangePage != null)
		this.onChangePage(this.pages[oldIndex]);
	this.switchToNewIndex();
},
switchToNewIndex: function(newPage) {
	this.currentPage.style.display='none';
	if (this.currentControl != null)
		this.currentControl.className = 'spPaginatorControl';
	this.currentPage=this.pages[this.index];
	this.currentControl=this.controls[this.index];
	this.currentPage.style.display='block';
	if (this.currentControl != null)
		this.currentControl.className = 'spPaginatorControl spActive';
	this.checkLoadImages();
},
checkLoadImages: function() {
	if (this.imageSets != null) {
		var imageSetIndex=this.index-1;
		if (this.imageSets[imageSetIndex] != null && !this.completedImageSets[imageSetIndex]) {
			spTmpImgSetToLoad=this.imageSets[imageSetIndex];
			window.setTimeout("spLoadDeferImgSet('" + this.paginatorId + imageSetIndex + "')", 20);
			this.completedImageSets[imageSetIndex]=true;
		}
	}
}
}
function spVideoGet(videoId) {
	if (navigator.appName.indexOf("Microsoft") != -1)
		return window[videoId];
	else
		return document[videoId];
}
function spVpPaginatorOnChangePage(element) {
	if (element == null || element.childNodes == null || element.childNodes.length == 0)
		return;
	var node=element.firstChild;
	while (node != null) {
		if (node.nodeName.toUpperCase() == "OBJECT") {
			var v=spVideoGet(node.id);
			if (v != null) {
				try {
					v.stopVideo();
					return;
				}
				catch(e) {
				}
			}
		}
		else if (node.childNodes != null && node.childNodes.length > 0)
			spVpPaginatorOnChangePage(node);
		node=node.nextSibling;
	}
}


function spAutoDbChangeModellMultiInstanz(formularname)
{
	var spHerstellerIndex = document.forms[formularname].hersteller.selectedIndex;
	var spHersteller = document.forms[formularname].hersteller.options[spHerstellerIndex].text;
	
	if(spHerstellerIndex > 0)
	{
		document.forms[formularname].typ.length = spHerstellerModelle[spHersteller].length + 1;			
		document.forms[formularname].typ.options[0].text = "beliebig";
		
		document.forms[formularname].typ.style.color = "#000000";
		document.forms[formularname].typ.style.background = "#ffffff";
		
		for (var i = 1; i < spHerstellerModelle[spHersteller].length + 1; i++) {
			document.forms[formularname].typ.options[i].text = spHerstellerModelle[spHersteller][i-1];
		}
		
		document.forms[formularname].typ.selectedIndex = 0;
		
	} else {
		document.forms[formularname].typ.length = 1;
		document.forms[formularname].typ.options[0].text = "beliebig";
		
		document.forms[formularname].typ.style.color = "#666666";
		document.forms[formularname].typ.style.background = "#f9f9f9";
	}
}

function spAutoDbShowResultMultiInstanz(formularname) {
	document.forms[formularname].submit();
}

function spAutoDbToggleViewMultiInstanz(formularname)
{
	if(document.forms[formularname].spSearchExtended.value == "true") {
		document.getElementById("spDivErweiterteSucheCO2"+formularname).style.display = 'none';
		document.getElementById("spDivErweiterteSucheZeitraum"+formularname).style.display = 'none';
		document.getElementById("spEinblendenSucheErweitert"+formularname).style.display = 'block';
		document.getElementById("spEinblendenSucheKompakt"+formularname).style.display = 'none';			
		document.forms[formularname].spSearchExtended.value = "false";
		document.forms[formularname].co2ausstoss.selectedIndex = 0;
		document.forms[formularname].zeitraum.selectedIndex = 0;
	}
	else {
		document.getElementById("spDivErweiterteSucheCO2"+formularname).style.display = 'block';
		document.getElementById("spDivErweiterteSucheZeitraum"+formularname).style.display = 'block';
		document.getElementById("spEinblendenSucheErweitert"+formularname).style.display = 'none';
		document.getElementById("spEinblendenSucheKompakt"+formularname).style.display = 'block';
		document.forms[formularname].spSearchExtended.value = "true";
	}
}



function spAutoDbSetUserParamsMultiInstanz(formularname) {
	
	if(typeof spAutoDbUserSelection_hersteller != 'undefined') {
		for (var i = 1; i < document.forms[formularname].hersteller.options.length; i++) {
			if(document.forms[formularname].hersteller.options[i].text == spAutoDbUserSelection_hersteller) {
				document.forms[formularname].hersteller.selectedIndex = i;
				spAutoDbChangeModellMultiInstanz(formularname);
			}
		}
	}
	
	if(typeof spAutoDbUserSelection_typ != 'undefined') {
		for (var i = 1; i < document.forms[formularname].typ.options.length; i++) {
			if(document.forms[formularname].typ.options[i].text == spAutoDbUserSelection_typ) {
				document.forms[formularname].typ.selectedIndex = i;
			}
		}
	}


	if(typeof spAutoDbUserSelection_karosserie != 'undefined') {
		for (var i = 1; i < document.forms[formularname].karosserie.options.length; i++) {
			if(document.forms[formularname].karosserie.options[i].text == spAutoDbUserSelection_karosserie) {
				document.forms[formularname].karosserie.selectedIndex = i;
			}
		}
	}

	if(typeof spAutoDbUserSelection_suchbegriff != 'undefined') {
		document.forms[formularname].suchbegriff.value = spAutoDbUserSelection_suchbegriff;
	}
		
	if(typeof spAutoDbUserSelection_co2ausstoss != 'undefined') {
		for (var i = 1; i < document.forms[formularname].co2ausstoss.options.length; i++) {
			if(document.forms[formularname].co2ausstoss.options[i].text == spAutoDbUserSelection_co2ausstoss) {
				document.forms[formularname].co2ausstoss.selectedIndex = i;
			}
		}
	}

	if(typeof spAutoDbUserSelection_zeitraum != 'undefined') {
		for (var i = 1; i < document.forms[formularname].zeitraum.options.length; i++) {
			if(document.forms[formularname].zeitraum.options[i].text == spAutoDbUserSelection_zeitraum) {
				document.forms[formularname].zeitraum.selectedIndex = i;
			}
		}
	}
	
	if(typeof spAutoDbUserSelection_extended != 'undefined') {
		document.forms[formularname].spSearchExtended.value = spAutoDbUserSelection_extended;
	}
}


function spAutoDbInitMultiInstanz(formularname) {
	
	spAutoDbChangeModellMultiInstanz(formularname);

	if(document.getElementsByName('spSearchExtended')[0].value == "true") {
		document.getElementById("spDivErweiterteSucheCO2"+formularname).style.display = 'block';
		document.getElementById("spDivErweiterteSucheZeitraum"+formularname).style.display = 'block';
		document.getElementById("spEinblendenSucheErweitert"+formularname).style.display = 'none';
		document.getElementById("spEinblendenSucheKompakt"+formularname).style.display = 'block';
	}
	
	if(typeof spAutoDbUserSelection_hersteller != 'undefined') {
		spAutoDbSetUserParamsMultiInstanz(formularname);
	}
}
function spVgWortCount(token) {
	document.write('<div style="display:none;"><img src="http://spiegel.met.vgwort.de/na/'+token+'" width="1" height="1" alt="" align="right" /></div>');
}
/**
 * Event handler function tests where the user clicked
 * and acts	according to this
 */
function spMouseUpEvent(e) {
	if (!e) var e = window.event;
	if (e.target) targ = e.target;
	else if (e.srcElement) targ = e.srcElement;
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode;

	if (targ.id == "spTopicBoxToggleLink_" + spHpTopicBoxCurrentElement || targ.id == "spTopicBoxToggleLinkMore_" + spHpTopicBoxCurrentElement) {
		spStopMouseEvent();
		return false;
	}
	if (spHpTopicBoxCurrentElement && targ.id == "spSubjectBox_"+spHpTopicBoxCurrentElement) {
		return false;
	}


	var isHpTopicboxDiv = false;
	while(targ != null) {
		if (spHpTopicBoxCurrentElement && targ.id == "spSubjectBox_"+spHpTopicBoxCurrentElement) {
			isHpTopicboxDiv=true;
			break;
		}
		targ = targ.parentNode;
	}

	if (!isHpTopicboxDiv) {
		spHpTopicBoxToggle(spHpTopicBoxCurrentElement, false);
		spStopMouseEvent();
	}
	return false;
}

/**
 * starts EventHandling
 */
function spStartMouseEvent(){
	if (document.addEventListener) { // DOM Level 2 Event Model
		document.addEventListener("mouseup", spMouseUpEvent, true);
	}
	else if (document.attachEvent) { // IE 5+ Event Model
		document.attachEvent("onmouseup", spMouseUpEvent);
	}
	else { // IE 4 Event Model
		document.onmouseup=spMouseUpEvent;
	}
}
/**
 * stops EventHandling
 * spOldHandler is a hack for EI4 Event Model
 */
var spOldHandler = document.onmouseup;	// Eventhandler for EI 4 StopEvent
function spStopMouseEvent() {
//	Unregister the capturing event handlers.
	if (document.removeEventListener) { // DOM Event Model
		document.removeEventListener("mouseup", spMouseUpEvent, true);
	}
	else if (document.detachEvent) { // IE 5+ Event Model
		document.detachEvent("onmouseup", spMouseUpEvent);
	}
	else { // IE 4 Event Model
		document.onmouseup = spOldHandler;
	}
}



/**
 * 
 * @return
 */
var spHpTopicBoxState=false;
function spHpTopicBoxToggle(spElementName) {
	
	if (!spHpTopicBoxState) {
		spHpTopicBoxSetDisplay(spElementName, true);
		spStartMouseEvent();
	}
	else
		spHpTopicBoxSetDisplay(spElementName, false);
}
/**
 * 
 * @param spDisplay
 * @return
 */
var spHpTopicBoxCurrentElement=null;
function spHpTopicBoxSetDisplay(spElementName, spDisplay) {
	
	spHpTopicBoxElement = document.getElementById("spSubjectBox_"+spElementName).style;
	spHpTopicBoxElement.display = (spDisplay ? "block" : "none");
	spHpTopicBoxState=spDisplay;
	spHpTopicBoxCurrentElement=spElementName
}


/**
 * Simple in_array function
 * @param haystack (Array)
 * @param needle (Object)
 * @return
 */
function spInArray(haystack, needle) {
	for (var i in haystack) {
		if (haystack[i] == needle)
			return true;
	}
	return false;
}
function spOpenPopupLayer(classname, headline, framelocation)  {
	var popup = document.getElementById('spPopupLayerArea');
	var html = '<div id="spPopupLayerHeader"><a href="javascript:parent.spClosePopupLayer();"><img src="/static/sys/v9/login/login_close.png" id="spCloseButton"><\/a><h1>' + headline + '</h1><\/div>';
	html += '<iframe id="spPopupLayerFrame" src="' + framelocation + '" scrolling="no" frameborder="0"></iframe>';
	html = '<div class="spPLcorTopLeft"></div><div class="spPLcorTopRight"></div><div class="spPLlineLeft"><div class="spPLlineRight"><div class="spPLcontent">' + html + '</div></div></div><div class="spPLcorBottomLeft"></div><div class="spPLcorBottomRight"></div>';
	popup.innerHTML = html;
	popup.className = classname;
}

function spClosePopupLayer()  {
	var popup = document.getElementById('spPopupLayerArea');
	popup.innerHTML = '';
	popup.className = '';
}


function spMSisLoggedIn()  {
	return SPONgetCookie('boSession') || (SPONgetCookie('digasnet.cookie.loginname') && SPONgetCookie('digasnet.cookie.passwd'));
}

function spMSLogin(feature, language)  {
	var classname = 'spLoginPopupLayer';

	var headline = '<img src="/static/sys/v9/login/logo_mein_spiegel.png" id="spMSLogo" alt="Mein SPIEGEL" />';
	var framelocation = SpOnENV_SERVER;
	if (language == 'en') {
		framelocation += '/international/login/';
	} else {
		framelocation += '/meinspiegel/';
		language = 'de';
	}

	if (feature != null) {
		var backUrl = framelocation + feature + '.html';
		if ( spMSisLoggedIn() )	{
			top.location.href = backUrl;
		} else {
			framelocation += 'popup.html?feature=' + feature + '&backUrl=' + framelocation + feature + '.html';
			classname = 'spLoginPopupLayer spLoginPopupLayerCentered';
		}
	} else {
		framelocation += 'popup.html?backUrl=' + escape(window.location.href);
	}
	spOpenPopupLayer(classname, headline, framelocation);
}


function spWriteMSLoginLinks()  {
	if ( spMSisLoggedIn() )	{
		document.write('<li><a href="' + SpOnENV_SERVER + '/meinspiegel/logout.html?backUrl=' + escape(window.location.href) + '">Logout<\/a>|<\/li>');
		document.write('<li><a href="' + SpOnENV_SERVER + '/meinspiegel/index.html">Mein SPIEGEL</a>|<\/li>');
		if ( SPONgetCookie('wiWlNumBookmarks') && /^[1-9][0-9]*$/.test(SPONgetCookie('wiWlNumBookmarks')) ) {
			document.write('<li class="spLast"><a href="' + SpOnENV_SERVER + '/meinspiegel/merkliste/index.html">Merkliste (' + SPONgetCookie('wiWlNumBookmarks') + ')<\/a><\/li>');
		} else {
			document.write('<li class="spLast"><a href="' + SpOnENV_SERVER + '/meinspiegel/merkliste/index.html">Merkliste<\/a><\/li>');
		}
	} else {
		document.write('<li><a onclick="spMSLogin(); return false;" href="' + SpOnENV_SERVER + '/meinspiegel/login.html">Login<\/a>|<\/li>');
		document.write('<li class="spLast"><a href="' + SpOnENV_SERVER + '/meinspiegel/artikel/0,1518,703606,00.html">Registrierung<\/a><\/li>');
	}
}function spOpenSendForm(language, which)  {
	var headline;
	var framelocation
	if (which == 'sms') {
		headline = 'Per SMS auf den Artikel hinweisen';
		framelocation = 'http://mobil.spiegel.de/follow/sendArticle.do?articleId=/spon/article/mobile/' + parent.spMetadataAssetId;
	} else {
		framelocation = SpOnENV_SERVER + '/artikelversand/index-' + language + '.html';
		if (language == 'en') {
			headline = 'Send this article';
		} else {
			headline = 'Artikel versenden';
		}
	}
	spOpenPopupLayer('spSendFormPopupLayer', headline, framelocation);

	var offset = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		offset = window.pageYOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		offset = document.body.scrollTop;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
		offset = document.documentElement.scrollTop;
	}
	if (offset > 500) scrollTo(0,0);
}

function spSendFormSetAction(form, language)  {
	if (form.action == '') {
		var action = SpOnENV_SERVER + '/artikelversand/';
		if (parent.spMetadataAssetTypeId == '29') {
			action += 'print/d-';
		} else {
			action += 'online/a-';
			var smsversand = document.getElementById('spSendFormSMS');
			if (smsversand != null) {
				smsversand.style.display = 'block';
			}
		}
		action += parent.spMetadataAssetId + '-' + language + '.html';
		form.action = action;
	}
}

function spAutoOpenSendForm(language, which)  {
	try {
		var params=spGetHashParams();
		var sendarticle = params["sp.sendarticle"];
		if (sendarticle == null) return;
	} catch (e) {}
	spOpenSendForm(language, which);
}
// rausgenommen in 3.2
function spClientIsIPhone() {
	return navigator.userAgent.indexOf('iPhone') > -1;
}
function spClientIsIPod() {
	return navigator.userAgent.indexOf('iPod') > -1;
}
function spClientIsIDevice() {
	return spClientIsIPhone() || spClientIsIPad() || spClientIsIPod();
}

function spMoreVideosButton() {
	if (!spClientIsIPhone()) {
		document.write('<a href="/video/"><img border="0" hspace="0" src="/static/sys/v9/videoplayer/leiste_panoplayer_mehr_116x27.jpg" width="116" height="27" alt="mehr Videos" \/><\/a>');
	}
}
