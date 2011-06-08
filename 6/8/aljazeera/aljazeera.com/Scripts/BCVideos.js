/////////////////----For Old pages ------/////////////////////////
function RenderScVideo(vidId, plyrId, pwidth, pheight, divId) {
    if (plyrId == '0') {
        plyrId = '930937580001';
    }
    var vidLinkURL = 'http://english.aljazeera.net' + window.location.pathname;
    var html = ['<object id="myExperience' + vidId + '" class="BrightcoveExperience">'];
    html.push('<param name="bgcolor" value="#FFFFFF" />');
    html.push('<param name="width" value="' + pwidth + '" />')
    html.push('<param name="height" value="' + pheight + '" />');
    html.push('<param name="playerID" value="' + plyrId + '" />');
    //old Key AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJYW4Aj2VxnKEXntSbmcf9ZQ
    html.push('<param name="playerKey" value="AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJbMvgxQjOK817iFfob0I73l" />');
    html.push('<param name="isVid" value="true" />');
    html.push('<param name="isUI" value="true" />');
    html.push('<param name="dynamicStreaming" value="true" />');
    html.push('<param name="@videoPlayer" value="' + vidId + '" />');
    html.push('<param name="linkBaseURL" value="' + vidLinkURL + '" />');
    html.push('</object>');
    document.getElementById(divId).innerHTML = html.join('');
}

/////////////////---- For Summary Pages ------/////////////////////////
function RenderBCSummaryVideo(vidId, plyrId, pwidth, pheight, divId) {
    if (plyrId == '0') {
        plyrId = '930937580001';
    }
    var html = ['<object id="myExperience' + vidId + '" class="BrightcoveExperience">'];
    html.push('<param name="bgcolor" value="#FFFFFF" />');
    html.push('<param name="width" value="' + pwidth + '" />')
    html.push('<param name="height" value="' + pheight + '" />');
    html.push('<param name="playerID" value="' + plyrId + '" />');
    html.push('<param name="playerKey" value="AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJadeaMsHq_eRm7W9krhp0tl" />');
    html.push('<param name="isVid" value="true" />');
    html.push('<param name="isUI" value="true" />');
    html.push('<param name="dynamicStreaming" value="true" />');
    html.push('<param name="@videoPlayer" value="' + vidId + '" />');
    html.push('</object>');
    document.getElementById(divId).innerHTML = html.join('');
}

/////////////////---- For Article Pages ------/////////////////////////
function RenderPagesVideo(vidId, plyrId, pwidth, pheight, divId) {
    if (plyrId == '0') {
        plyrId = '750945067001';
    }
    var vidLinkURL = 'http://english.aljazeera.net' + window.location.pathname;
    var html = ['<object id="myExperience' + vidId + '" class="BrightcoveExperience">'];
    html.push('<param name="bgcolor" value="#FFFFFF" />');
    html.push('<param name="width" value="' + pwidth + '" />')
    html.push('<param name="height" value="' + pheight + '" />');
    html.push('<param name="playerID" value="' + plyrId + '" />');
    html.push('<param name="playerKey" value="AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJbMvgxQjOK817iFfob0I73l" />');
    html.push('<param name="isVid" value="true" />');
    html.push('<param name="isUI" value="true" />');
    html.push('<param name="dynamicStreaming" value="true" />');
    html.push('<param name="@videoPlayer" value="' + vidId + '" />');
    html.push('<param name="linkBaseURL" value="' + vidLinkURL + '" />');

    html.push('</object>');
    document.getElementById(divId).innerHTML = html.join('');
}

function RenderGeneralBCVideo(vidId, plyrId, plyrKey, pwidth, pheight, divId) {
    if (plyrId == '0') {
        plyrId = '750945067001';
    }
    if (plyrKey == '0') {
        plyrId = 'AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJbMvgxQjOK817iFfob0I73l';
    }
    var html = ['<object id="myExperience' + vidId + '" class="BrightcoveExperience">'];
    html.push('<param name="bgcolor" value="#FFFFFF" />');
    html.push('<param name="width" value="' + pwidth + '" />')
    html.push('<param name="height" value="' + pheight + '" />');
    html.push('<param name="playerID" value="' + plyrId + '" />');
    html.push('<param name="playerKey" value="' + plyrKey + '" />');
    html.push('<param name="isVid" value="true" />');
    html.push('<param name="isUI" value="true" />');
    html.push('<param name="dynamicStreaming" value="true" />');
    html.push('<param name="@videoPlayer" value="' + vidId + '" />');
    html.push('</object>');
    document.getElementById(divId).innerHTML = html.join('');
}
/////////////////---- For Live Streaming ------/////////////////////////
function RenderLiveVideo(vidId, plyrId, pwidth, pheight, divId) {
    if (plyrId == '0') {
        plyrId = '751182905001';
    }
    var html = ['<object id="myExperience' + vidId + '" class="BrightcoveExperience">'];
    html.push('<param name="bgcolor" value="#FFFFFF" />');
    html.push('<param name="width" value="' + pwidth + '" />')
    html.push('<param name="height" value="' + pheight + '" />');
    html.push('<param name="playerID" value="' + plyrId + '" />');
    html.push('<param name="playerKey" value="AQ~~,AAAAmtVJIFk~,TVGOQ5ZTwJYW4Aj2VxnKEXntSbmcf9ZQ" />');
    html.push('<param name="isVid" value="true" />');
    html.push('<param name="isUI" value="true" />');
    html.push('<param name="dynamicStreaming" value="true" />');
    html.push('<param name="@videoPlayer" value="' + vidId + '" />');
    html.push('</object>');
    document.getElementById(divId).innerHTML = html.join('');
}


function addScriptTag(id, url, callback) {
    var scriptTag = document.createElement("script");
    var noCacheIE = '&noCacheIE=' + (new Date()).getTime();

    // Add script object attributes
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("charset", "utf-8");
    scriptTag.setAttribute("src", url + "&callback=" + callback + noCacheIE);
    scriptTag.setAttribute("id", id);

    var head = document.getElementsByTagName("head").item(0);
    head.appendChild(scriptTag);
}

function getBulletons() {
    addScriptTag("AJEBulletonVideos", "http://api.brightcove.com/services/library?command=find_playlist_by_id&playlist_id=782539343001&playlist_fields=videoIds&token=7kITGpNoLcepAAN-8u7b--bguf8F_S5pxbVFh7l8ihCoiMkqltT0JA..", "BulletingResponse");

}

function BulletingResponse(jsonData) {

    var bulltnId = jsonData["videoIds"][0];
    RenderBCSummaryVideo(bulltnId, 0, 300, 220, 'dvBulletin');
    brightcove.createExperiences();
}

function SearchVideos() {
    _currRequest = "Search"
    getBCVideos(0);
}

function getBCVideos(_page) {
    if (_page < 0) {
        return false;
    }
    else {
        _currPage = _page;
    }

    document.getElementById("resp").innerHTML = "<img src='/Services/Media/Images/loading.gif'> Wait while loading..";
    var newScriptString = "";
    switch (_currRequest) {
        case "All":
            newScriptString = "http://api.brightcove.com/services/library?command=find_all_videos&sort_by=PUBLISH_DATE&sort_order=DESC&page_size=10&token=7kITGpNoLcepAAN-8u7b--bguf8F_S5pxbVFh7l8ihCoiMkqltT0JA..&page_number=" + _page;
            break;
        case "Search":
            var _searchText = document.getElementById("txtSearch").value;
            newScriptString = "http://api.brightcove.com/services/library?command=search_videos&all=search_text:" + _searchText + "&page_size=10&token=7kITGpNoLcepAAN-8u7b--bguf8F_S5pxbVFh7l8ihCoiMkqltT0JA..&page_number=" + _page;
            break;

    }
    addScriptTag("AJEVideos", newScriptString, "VideosResponse");
}

function getVidId(_vidId) {
    document.getElementById('AJEBrightCoveID').value = _vidId;
}

function browser_playVideo(_vidId) {
    document.getElementById('AJEBrightCoveID').value = _vidId;
    RenderScVideo(_vidId, '747084146001', 400, 250, 'dvPlayer');
    brightcove.createExperiences();
}

function VideosResponse(jsonData) {
    var resp = document.getElementById("resp");
    try {

        //output the query
        //    var q = document.getElementById("qDiv");
        //    var s = document.getElementById("AJEVideos");
        //    q.innerHTML = s.src;

        // display the results
        var resp = document.getElementById("resp");
        var html = ['<Table cellspacing="2" cellpadding="2" class="videos">'];

        if (jsonData["items"].length > 9) {
            document.getElementById("NextPage").disabled = false;
        }
        else {
            document.getElementById("NextPage").disabled = true;
        }

        for (var i = 0; i < jsonData["items"].length; i++) {
            html.push('<tr>');
            var _video = jsonData["items"][i];
            html.push('<td id="td_' + _video.id + '"><image src="' + _video.thumbnailURL + '" width="75" height="40" /></td>');
            html.push('<td><b>' + _video.name + '</b><br><a href="javascript:void(0)" onclick="browser_playVideo(' + _video.id + ')">Play Video </a> &nbsp;&nbsp;&nbsp;&nbsp; <a href="javascript:void(0)" onclick="getVidId(' + _video.id + ')"> Insert Video</a></td>');
            html.push('</tr>');
        }
        html.push('</table>')

        resp.innerHTML = html.join('');
    }
    catch (Error) {
        document.getElementById("spanMessage").innerHTML = jsonData["error"].message;
        resp.innerHTML = "";

    }
}