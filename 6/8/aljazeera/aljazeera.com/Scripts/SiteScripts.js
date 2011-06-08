function PrintThisPage(bodyarea) {
    var sOption = 'toolbar=yes,location=no,directories=yes,menubar=no,resizable=yes,scrollbars=yes,width=900,height=600,left=100,top=25';
    //var sWinHTMLa = document.getElementById('divDatesInfo').innerHTML;
    try {
        //var sWinHTMLb = document.getElementById('divContent').innerHTML;
        var sWinHTMLb = document.getElementById(bodyarea);
        var sComments = document.getElementById('disqusComment');
        sComments.innerHTML = '';
    } catch (e) {

    };

    var winprint = window.open('', '', sOption);
    winprint.document.open();
    winprint.document.write('<html><link href=/Styles/PrintAble.css rel=stylesheet type=text/css />');
    winprint.document.write('<body><form><Table align=center width=680px>');
    winprint.document.write('<tr><td align=Left><img src=/Media/Images/LogoPrint.gif></td><td width=351>&nbsp;</td></tr>');
    winprint.document.write('<tr><td align=left width=209>');
    //winprint.document.write(sWinHTMLa);
    winprint.document.write('</td><td width=351>&nbsp;</td></tr><tr><td colspan=2>');
    winprint.document.write(sWinHTMLb.innerHTML);
    winprint.document.write('</td></tr></Table></form></body></html>');
    winprint.document.write('<script>window.print();');
    winprint.document.write('</script>');
    winprint.document.close();
    winprint.focus();
}

function ReplaceTags(xStr) {
    xStr = xStr.replace(regExp, "");
    return xStr;
}

function back2Map() {
    document.getElementById("tblTimeZoneMap").style.display = 'Block';
    document.getElementById("tblDetails").style.display = 'None';
}

function hideMap() {
    document.getElementById("tblTimeZoneMap").style.display = 'None';
    document.getElementById("tblDetails").style.display = 'Block';
}

function showDayData(tblId, weekId) {
    document.getElementById('tblWeek0').className = 'ProgScheduleMenu2';
    document.getElementById('tblWeek1').className = 'ProgScheduleMenu2';
    document.getElementById('tblWeek2').className = 'ProgScheduleMenu2';
    document.getElementById('tblWeek3').className = 'ProgScheduleMenu2';
    document.getElementById('tblWeek4').className = 'ProgScheduleMenu2';
    document.getElementById('tblWeek5').className = 'ProgScheduleMenu2';
    document.getElementById('tblWeek6').className = 'ProgScheduleMenu2';
    document.getElementById(weekId).className = 'ProgScheduleMenu1';
    document.getElementById("tbldDay0").style.display = 'none';
    document.getElementById("tbldDay1").style.display = 'none';
    document.getElementById("tbldDay2").style.display = 'none';
    document.getElementById("tbldDay3").style.display = 'none';
    document.getElementById("tbldDay4").style.display = 'none';
    document.getElementById("tbldDay5").style.display = 'none';
    document.getElementById("tbldDay6").style.display = 'none';
    document.getElementById(tblId).style.display = 'block';
}

function SetTimeZone2(mTimeDiff) {
    var temp = mTimeDiff;
    var arr = temp.split(".");
    var hr;
    var min;
    hr = arr[0];
    if (arr.length > 1) {
        if (arr[1] == "25")
            min = "15";

        if (arr[1] == "5")
            min = "30";

        if (arr[1] == "75")
            min = "45";
    }
    else {
        min = "0";
    }

    SetTimeZone(hr, min);
}


function SetTimeZone(mHourDiff, mMinutesDiff) {
    hideMap();
    for (count = 0; count <= 6; count++) {
        RenderTimes(count, mHourDiff, mMinutesDiff);
    }
    //test();
}

function RenderTimes(tblNo, HourDiff, MinsDiff) {

    var strrHour;
    var strrMins;
    var mDate;
    var dMins;
    var dHour;
    var showHour;
    var showMins;
    var tdHour;
    var tdMins;
    var maxc = document.getElementById("tbldDay" + tblNo).getElementsByTagName("TR").length;
    //alert(maxc);
    for (a = 0; a <= maxc - 2; a++) {
        tdHour = "tdHour" + tblNo + "_" + a;
        tdMins = "tdMins" + tblNo + "_" + a;

        strrHour = ReplaceTags(document.getElementById(tdHour).innerHTML);
        strrMins = ReplaceTags(document.getElementById(tdMins).innerHTML);
        //      if(navigator.appName == "Microsoft Internet Explorer")
        //        {
        //          strHour = document.getElementById(tdHour).innerText;
        //          strMins = document.getElementById(tdMins).innerText;
        //        }
        //      else
        //        {
        //          strHour = document.getElementById("tdHour" + tblNo + "_" + a).textContent;
        //          strMins = document.getElementById(('tdMins' + tblNo + '_' + a)).textContent;
        //        }

        showHour = ((strrHour < 10) ? "0" : "") + strrHour;
        showMins = ((strrMins < 10) ? "0" : "") + strrMins;

        mDate = new Date();
        lDate = new Date();
        mDate.setHours(strrHour);
        mDate.setMinutes(strrMins);
        ////document.getElementById("tdGMT0_" + a).innerText = mDate.getHours() + ":" + mDate.getMinutes(); 
        //      if(navigator.appName == "Microsoft Internet Explorer")
        //        {
        //          document.getElementById("tdGMT" + tblNo + "_" + a).innerText = showHour + ":" + showMins;
        //        }
        //      else
        //        {   
        //          document.getElementById("tdGMT" + tblNo + "_" + a).textContent = showHour + ":" + showMins;  
        //        }
        document.getElementById("tdGMT" + tblNo + "_" + a).innerHTML = showHour + ":" + showMins;

        dHour = (Number(strrHour) + Number(HourDiff));
        dMins = (Number(strrMins) + Number(MinsDiff));
        lDate.setHours(dHour);
        lDate.setMinutes(dMins);

        showHour = lDate.getHours();
        showHour = ((showHour < 10) ? "0" : "") + showHour;
        showMins = lDate.getMinutes();
        showMins = ((showMins < 10) ? "0" : "") + showMins;
        ////document.getElementById("tdLocal0_" + a).innerText = lDate.toTimeString(); 

        //         if(navigator.appName == "Microsoft Internet Explorer")
        //        {
        //          document.getElementById("tdLocal" + tblNo + "_" + a).innerText = showHour + ":" + showMins;
        //        }
        //      else
        //        {   
        //          document.getElementById("tdLocal" + tblNo + "_" + a).textContent = showHour + ":" + showMins;
        //        }
        document.getElementById("tdLocal" + tblNo + "_" + a).innerHTML = showHour + ":" + showMins;

    }
}

//Summary Page vidoe player Generation
function RenderSummaryVideo(videoPath, imagePath, pWith, pHeight, dvId) {
    try {
        var so = new SWFObject('/AJEPlayer/player-licensed-viral.swf', 'ply', pWith, pHeight, '9', '#000000');
        so.addParam('allowfullscreen', 'true');
        so.addParam('allowscriptaccess', 'always');
        so.addParam('wmode', 'opaque');
        so.addVariable('file', videoPath);
        so.addVariable('image', imagePath);
        so.addVariable('skin', '/AJEPlayer/skins/default.swf');
        so.addVariable('abouttext', 'Aljazeera');
        so.addVariable('aboutlink', 'http://english.aljazeera.net/aboutus');
        so.addVariable('viral.oncomplete', 'false');
        so.addVariable('viral.functions', '');
        so.addVariable('viral.allowmenu', 'false');
        so.addVariable('stretching', 'fill');
        //so.addVariable('frontcolor', '#FB9D04');
        //so.addVariable('screencolor', '#FB9D04');
        // so.addVariable('lightcolor', '#FB9C04');
        so.write(dvId);
    } catch (e) { }
}

//Slide show up and down.
function SlideUpDown(ctrl, options) {
    if (options == 'True') {
        $(ctrl).toggleClass("menu_down");
        //$(ctrl).next("div._boxBody").toggle('slow').siblings("div._boxBody").slideUp("slow");

        if ($(ctrl).attr("class").indexOf("menu_down") == -1)
            $(ctrl).next("div._boxBody").slideDown("slow");
        else
            $(ctrl).next("div._boxBody").slideUp("slow");
    }
}

// Hide or show an object
function showHide(id, flag) {
    var object = document.getElementById(id);
    if (object != null)
        object.style.display = flag;
}
// Function for Stats tabs selection
function ActivateTab(tabId) {
    document.getElementById("tabPage1").style.display = 'none';
    document.getElementById("tabPage2").style.display = 'none';
    document.getElementById("tabPage3").style.display = 'none';
    document.getElementById("tab1").className = 'tabButton';
    document.getElementById("tab2").className = 'tabButton';
    document.getElementById("tab3").className = 'tabButton';

    document.getElementById("tabText1").style.color = '#ffffff';
    document.getElementById("tabText2").style.color = '#ffffff';
    document.getElementById("tabText3").style.color = '#ffffff';

    document.getElementById("tabPage" + tabId).style.display = 'block';
    document.getElementById("tabText" + tabId).style.color = '#F78411';
    document.getElementById("tab" + tabId).className = 'tabButtonSelected';
}

// To navigate to search page on Enter key
function trapEnterKey(e) {
    var keyID = (window.event) ? event.keyCode : e.keyCode;

    if (keyID == 13) {
        submitSearch();
        return false;
    }
    else
        return true;
}

// To replace the old styles with the new styles in HTML
function fixStylingIssues() {
    var parentChIdVal = '';
    var ctlParentChId = document.getElementById('_ParentChId');
    if (ctlParentChId != null) {
        parentChIdVal = ctlParentChId.value;
    }

    if (parentChIdVal != '20079301234780363') {
        var docText = document.body.innerHTML;

        docText = docText.replace(/color: rgb(177, 128, 0)/g, "color:#FB9D04;font-weight:bold;");
        docText = docText.replace(/#dfd2ad/g, "#EEEEEE");
        docText = docText.replace(/#dfd2a0/g, "#EEEEEE");
        docText = docText.replace(/rgb(223, 210, 173)/g, "#EEEEEE");
        docText = docText.replace(/#b68809/g, "#FB9D04");
        docText = docText.replace(/\/Media\/Images\/sq.gif/g, "/Media/ver2/Images/bullet-bar-orange.gif");
        docText = docText.replace(/verdana/g, "Arial");
        docText = docText.replace(/rgb(182, 136, 9)/g, "#FB9D04");
        docText = docText.replace(/#f0e3c7/g, "#EEEEEE");
        docText = docText.replace(/width: 286px/g, " ");

        document.body.innerHTML = docText;
    }
}

function setList(mList, val) {
    try {
        document.getElementById(mList).value = val;
    }
    catch (e) {
    }
}

//Summary Page vidoe player Generation
function RenderPostingVideo(videoPath, imagePath, pWidth, pHeight, dvId) {

    var so = new SWFObject('/AJEPlayer/player-licensed-viral.swf', 'ply', pWidth, pHeight, '9', '#000000');
    so.addParam('allowfullscreen', 'true');
    so.addParam('allowscriptaccess', 'always');
    so.addParam('wmode', 'opaque');
    so.addVariable('file', videoPath);
    so.addVariable('image', imagePath);
    so.addVariable('skin', '/AJEPlayer/skins/default.swf');
    so.addVariable('abouttext', 'Aljazeera');
    so.addVariable('aboutlink', 'http://english.aljazeera.net/aboutus');
    so.addVariable('viral.oncomplete', 'false');
    so.addVariable('viral.functions', 'embed');
    so.addVariable('viral.allowmenu', 'true');
    so.addVariable('stretching', 'fill');
    so.addVariable('viral.embed',getYTEmbedCode(videoPath,pWidth,pHeight));
    so.write(dvId);
}

function getYTEmbedCode(videoPath,vWidth,vHeight) {
    var html = ['<object width='];
    html.push('"' + vWidth + '" height="' + vHeight + '">');
    html.push('<param name="movie" value="' + videoPath);    
    html.push('&fs=1&showinfo=1&rel=1"></param>');
    html.push('<param name="allowFullScreen" value="true"></param>');
    html.push('<param name="allowscriptaccess" value="always"></param>');
    html.push('<embed src="' + videoPath);
    html.push('&fs=1&showinfo=1&rel=1" ');
    html.push('type="application/x-shockwave-flash" allowscriptaccess="always" ');
    html.push('allowfullscreen="true" width="' + vWidth + '" height="' + vHeight + '"></embed>');
    html.push('</object>');
    return html.join('');
}

function GetVideoCode(videoId, pWith, pHeight, dvId) {
var ob = "";
ob += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='470' height='320' id='single1' name='single1'>";
ob += " <param name='movie' value='player.swf'>";
ob += "<param name='allowfullscreen' value='true'>";
ob += "<param name='allowscriptaccess' value='always'>";
ob += "<param name='wmode' value='transparent'>";
ob += "<param name='flashvars' value='file=http://www.youtube.com/watch?v='" + videoId + " >";
ob += "<embed id='single2' name='single2' src='player.swf' width='470' height='320' bgcolor='#000000' allowscriptaccess='always' allowfullscreen='true'";
ob += "flashvars='file=http://www.youtube.com/watch?v='" + videoId + "/>";
ob += "</object>";

return ob;
}

function RenderPostingVideo(vidId,plyrId,pwidth,pheight,divId) {

    var html = ['<object id="myExperience' + vidId + '" class="BrightcoveExperience">'];
    html.push('<param name="bgcolor" value="#FFFFFF" />');
    html.push('<param name="width" value="' + pwidth + '" />')
    html.push('<param name="height" value="' + pheight + '" />');
    html.push('<param name="playerID" value="' + plyrId + '" />');
    html.push('<param name="playerKey" value="AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJZbyLu770YWZ_LE4OaoU5Nv" />');
    html.push('<param name="isVid" value="true" />');
    html.push('<param name="isUI" value="true" />');
    html.push('<param name="dynamicStreaming" value="true" />');
    html.push('<param name="@videoPlayer" value="' + vidId +'" />');
    html.push('</object>');
    document.getElementById(divId).innerHTML = html.join('');
}
