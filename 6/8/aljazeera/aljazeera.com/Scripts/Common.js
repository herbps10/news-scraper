/*
=============================================
 Copyright (C) 2008 Al Jazeera Network
 All rights reserved.
 Aljazeera Software Section
=============================================
*/


function $(id)
{
  return document.getElementById(id);
}
function $$(id)
{
  return document.getElementsByName(id);
}

function testLast(){
var cells = document.getElementsByTagName('td');
var cell = cells[cells.length - 1];


//alert(cell.id);
if (cell.id=='tdCopyRight')
    {
    alert(cell.id);
    }
   else
    {
    cell.setAttribute('id','tmpId');
    cell.style.padding = '5px 0px 0px 0px';
    loadHTML('/Services/_Directives/_BottomNavigation.html', 'tmpId' ,'0');
    }
}


function myFileBrowser (field_name, url, type, win) 
 {
     //File browser is integration of TINYMCE to different resouces.
     //alert("Field_Name: " + field_name + "\nURL: " + url + "\nType: " + type + "\nWin: " + win); // debug/testing
    var cmsURL = "/Resource_Gallery/SearchResource.aspx" ;    // script URL - use an absolute path!
    /* If you work with sessions in PHP and your client doesn't accept cookies you might need to carry
       the session name and session ID in the request string (can look like this: "?PHPSESSID=88p0n70s9dsknra96qhuk6etm5").
       These lines of code extract the necessary parameters and add them back to the filebrowser URL again. */
    switch(type)
        {
        case "image":{var cmsURL = "/Resource_Gallery/SearchResource.aspx";break;}        
        case "media":{var cmsURL = "/Resource_Gallery/SearchResource.aspx" ;break;}        
        case "file":{var cmsURL = "/Services/system/console/URLFactory.aspx?" ;break;}
                
        }
   
    if (cmsURL.indexOf("?") < 0) {
        //add the type as the only query parameter
        cmsURL = cmsURL + "?type=" + type;
    }
    else {
        //add the type as an additional query parameter
        // (PHP session ID is now included if there is one at all)
        cmsURL = cmsURL + "&type=" + type;
    }

    tinyMCE.activeEditor.windowManager.open({
        file : cmsURL,
        title : 'AJE Resource Browser',
        width : 700,  // Your dimensions may differ - toy around with them!
        height : 490,
        resizable : "yes",
        inline : "yes",  // This parameter only has an effect if you use the inlinepopups plugin!
        close_previous : "yes"
    }, {
        window : win,
        input : field_name
    });
    return false;  
}

function MOver(Source, BesideItem, selected)
{
	if(!selected)
	{
		if(MainOpen == -1)
		{
		document.getElementById(BesideItem).style.backgroundColor = "#CEB469";
		document.getElementById(Source).style.color = "#b68809";
		}
	}
}

function MOut(LinkTD, NotchTDID, selected)
{
	if(!selected)
	{
		
		if(MainOpen == -1)
		{
		document.getElementById(NotchTDID.id).style.backgroundColor = "";
		LinkTD.style.color = "";
		}
	}
}

function SelectChannel(PostType , TextBoxCtrl )
{
    window.open('/Services/Templates/frmChannels.aspx?PostType=' + PostType  + '&TextCTrl=' + TextBoxCtrl ,'SelectPost' + PostType ,'menubar=0,resizable=1,width=550,height=400,scrollbars=1,status=1,top=200,left=50');
}

function SelectPosting(PostType , TextBoxCtrl )
{
    window.open('/Services/Templates/frmSelectPosting.aspx?PostType=' + PostType  + '&TextCTrl=' + TextBoxCtrl ,'SelectPost' + PostType ,'menubar=0,resizable=1,width=830,height=490,scrollbars=0,status=1,top=200,left=50');
}

function MaxCount(field,maxlimit) {
	var charcnt = field.value.length;        

	if (charcnt > maxlimit) { 
		field.value = field.value.substring(0, maxlimit);
	}
}

function textCounter(field,counterbar,maxlimit,showcounter) {
	var fieldWidth =  parseInt(field.offsetWidth);
	var charcnt = field.value.length;        

	if (charcnt > maxlimit) { 
		field.value = field.value.substring(0, maxlimit);
	}
	else{ 
	    var percentage = parseInt(100 - (( maxlimit - charcnt) * 100)/maxlimit) ;
	    //document.getElementById(counter).style.width =  parseInt((fieldWidth*percentage)/100)+"px";
	    document.getElementById(counterbar).style.width =  parseInt(percentage)+"%";
	    document.getElementById(counterbar).innerHTML=""+percentage+"%";
	    document.getElementById(counterbar).align="center";
	    setcolor(document.getElementById(counterbar),percentage,"background-color");
	    //document.getElementById(showcounter).innerHTML=""+charcnt+"/"+maxlimit+"";
	}
    
}

function textCount(field,counter,maxlimit)
{
	var fieldWidth =  parseInt(field.offsetWidth);
	var charcnt = field.value.length;  
	var target = document.getElementById(counter);      

	if (charcnt > maxlimit) { 
		field.value = field.value.substring(0, maxlimit);
	}
	else{ 

	    target.innerHTML=""+charcnt+"/"+maxlimit+""
	}
}

function setcolor(obj,percentage,prop){
	obj.style[prop] = "rgb(80%,"+(100-percentage)+"%,"+(100-percentage)+"%)";
}

function changestyle(){
    document.getElementById('ctl00_TemplateStyle').href = '/Styles/PrintAble.css';
}

function showMenu(cntrl) 
{

var TargetControl; 
    TargetControl = document.getElementById(cntrl);
    if (TargetControl)
    {
    TargetControl.style.display="";
    }		
}
function hideMenu(cntrl) 
{

var TargetControl; 

    TargetControl = document.getElementById(cntrl);
    if (TargetControl)
    {
    TargetControl.style.display="none";
    }		
}

function ShowHide(cntrl) 
{
var TargetControl; 

    TargetControl = document.getElementById(cntrl);
    if (TargetControl)
    {
    if (TargetControl.style.display == "none")
    {
    TargetControl.style.display=""; 
    }
    else 
    {
    TargetControl.style.display="none"; 
    }
    }		
}
function OpenAJEWindow(url)
{
    window.open(url,"AJEWindow","menubar=1,resizable=1,width=650,height=540,scrollbars=1,status=1");
}
function OpenWindow(url,width,height)
{
    window.open(url,"AJEWindow" + width,'menubar=1,resizable=1,width=' + width + ',height=' + height + ',scrollbars=1,status=1');
}


function resizeCaller() {
    var dyniframe=new Array()
    for (i=0; i<iframeids.length; i++)
    {
        if (document.getElementById)
            resizeIframe(iframeids[i])
        //reveal iframe for lower end browsers? (see var above):
        if ((document.all || document.getElementById) && iframehide=="no"){
            var tempobj=document.all? document.all[iframeids[i]] : document.getElementById(iframeids[i])
            tempobj.style.display="block"
        }
    }
}

function resizeIframe(frameid){
    var currentfr=document.getElementById(frameid)
    var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1]
    var FFextraHeight=parseFloat(getFFVersion)>=0.1? 16 : 0 //extra height in px to add to iframe in FireFox 1.0+ browsers

    if (currentfr && !window.opera){
        currentfr.style.display="block"
        if (currentfr.contentDocument && currentfr.contentDocument.body.offsetHeight) //ns6 syntax
            currentfr.height = currentfr.contentDocument.body.offsetHeight+FFextraHeight; 
        else if (currentfr.Document && currentfr.Document.body.scrollHeight) //ie5+ syntax
            currentfr.height = currentfr.Document.body.scrollHeight;

    }
}

function Validate_Required(e,c,m)
{
var field = document.getElementById(e);
var target = document.getElementById(c);

if (field){
  if (field.value == null || field.value == ""){
    field.select();
    target.innerHTML=m;
    return false;
 }
  else
  { target.innerHTML='';
    return true;}
}
}

function Validate_Email(e,c,m){
var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i
var target = document.getElementById(c);
var field = document.getElementById(e)
if (field){
    var returnval=emailfilter.test(field.value)
    if (returnval==false)
        {field.select();
          target.innerHTML=m;
        }
        else
        target.innerHTML='';
    return returnval
    }
else 
    return false; 
}

function Validate_Length(e, c, min, max)
{
    var field = document.getElementById(e);
	var target = document.getElementById(c);
	var uInput = field.value;
	if(uInput.length >= min && uInput.length <= max){
		target.innerHTML='';
		return true;
	}else{
	    field.select()
	    target.innerHTML='Max allowed '+max;
		//target.alert("Please enter between " +min+ " and " +max+ " characters");
		return false;
	}
}

function Validate_Match(e,d,c,m)
{
var field = document.getElementById(e);
var field2 = document.getElementById(d);
var target = document.getElementById(c);


      if (field.value == field2.value)
        { target.innerHTML='';
          return true;
        }
       else
        {
        field2.select();
        target.innerHTML=m;
        return false;
        }
}

function SetMenuItem()
{
try {
    var channel = document.getElementById("_CHId");
    var menuItem; 
    var guid;

    if (channel){
        guid = channel.value;
        if (guid){
            menuItem= document.getElementById("TDM" + guid);
            if (menuItem)
                menuItem.className= 'MenuOver'; 
        }
    }
}    
catch(e){
    return null;
}
}

function carouselNav(carousel, next, prev) {
    var n;
    var p;
    n = document.getElementById(next);
    p = document.getElementById(prev);
    if (carousel.last == carousel.options.size)
        n.className = 'jcarousel-next jcarousel-next-disabled';
    else
        n.className = 'jcarousel-next';

    if (carousel.first == 1)
        p.className = 'jcarousel-prev jcarousel-prev-disabled';
    else
        p.className = 'jcarousel-prev';
}

//////////////////////////Mobile Function///////////////
function isItMobile() {

    if (window.location.href != 'http://english.aljazeera.net/')
        return null;

    var url = window.location.href;
    var urlpart = url.split("?");

    //if URL is http://domain.tld/?frommobile -- do not forward user
    if (urlpart[1] == 'frommobile')
        return null;

    var ua = navigator.userAgent;
    var ua = ua.toLowerCase();

    if (ua.match('symbian')
    || ua.match('nokia')
    || ua.match('samsung')
    || ua.match('mobile')
    || ua.match('windows ce')
    || ua.match('epoc')
    || ua.match('opera mini')
    || ua.match('nitro')
    || ua.match('j2me')
    || ua.match('midp-')
    || ua.match('cldc-')
    || ua.match('netfront')
    || ua.match('mot')
    || ua.match('up.browser')
    || ua.match('up.link')
    || ua.match('audiovox')
    || ua.match('blackberry')
    || ua.match('ericsson,')
    || ua.match('panasonic')
    || ua.match('philips')
    || ua.match('sanyo')
    || ua.match('sharp')
    || ua.match('sie-')
    || ua.match('portalmmm')
    || ua.match('blazer')
    || ua.match('avantgo')
    || ua.match('danger')
    || ua.match('palm')
    || ua.match('series60')
    || ua.match('palmsource')
    || ua.match('pocketpc')
    || ua.match('smartphone')
    || ua.match('rover')
    || ua.match('ipaq')
    || ua.match('au-mic,')
    || ua.match('alcatel')
    || ua.match('ericy')
    || ua.match('up.link')
    || ua.match('vodafone')
    || ua.match('wap1.')
    || ua.match('wap2.')) {

        //add double check on Apple iPad
        if (ua.match('ipad') || ua.match('iphone') || ua.match('ipod')
        || ua.match('blackberry') || ua.match('android') || ua.match('linux')) {
            return null;
        }
        else {
            window.location = 'http://m.aljazeera.net';
        }
    }
}
/////////////////////////////////////////////////////////
function removeDebate(obj)
    {
    document.getElementById(obj).value = '';
    }


// Cross browser supported function to attach an event handler with the load event
function addLoadEventHandler(functionToAdd) {
    if (typeof window.onload != 'function') {
        window.onload = functionToAdd;
    }
    else {
        var oldWindowOnLoad = window.onload;

        window.onload = function () {
            oldWindowOnLoad();
            functionToAdd();
        }
    }
}

function setCookie(value, expiredays) {
    alert('reached');
    /*var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    alert(value);
    alert(expiredays);
    document.cookie = "disqusmessage=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toUTCString());
    */
}

function getCookie(c_name) {
    alert("Cookies: " + document.cookie);
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
