function google_ad_request_done(google_ads) {
var s = '';
var i;
if (google_ads.length == 0) {
document.write("<style>.indy_googleads div {display:none;}</style>")
return;
}
s += '<a style="color: #125581;" target="_blank" href=\"' + google_info.feedback_url + '\">Ads by Google</a><br/><br/><ul>';
for(i = 0; i < google_ads.length; i++) {
s += '<li><a style="color: #125581;" target="_blank" href="' +
		google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
		google_ads[i].visible_url + '\';return true"><b>' + 
		google_ads[i].line1 + '</b></a><br/>' + 
		google_ads[i].line2 + '<br/>' + 
		google_ads[i].line3 + '<br/><a style="color: #125581;" target="_blank" href="' +
		google_ads[i].url + '" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to ' +
		google_ads[i].visible_url + '\';return true">' + 
		google_ads[i].visible_url + '</a></li>';
}
	s+='</ul>';
    document.write(s);
    return;
  }
