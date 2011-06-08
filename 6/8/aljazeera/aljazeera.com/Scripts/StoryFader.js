var selectedStoryGuid = '';

// Show specific story panel
function showStoryPanel(guid) {
    if (selectedStoryGuid == guid)
        return;
    else {
        if (selectedStoryGuid != '') {
            setFadeEffect("img" + selectedStoryGuid, 100, 0, 500);
            showHide("divMain" + selectedStoryGuid, 'none');
            document.getElementById("imgThumb" + selectedStoryGuid).className = "imageThumbnail130";
        }

        selectedStoryGuid = guid;
        setFadeEffect("img" + guid, 0, 100, 500);
        showHide("divMain" + guid, 'block');
        //document.getElementById("imgThumb" + guid).border = "3";
        document.getElementById("imgThumb" + guid).className = "imageThumbnail130Sel";
    }
}

// Set fade-in or fade-out effect
function setFadeEffect(id, opacStart, opacEnd, millisec) {
    //speed for each frame 
    var speed = Math.round(millisec / 100);
    var timer = 0;
    
    //determine the direction for the blending, if start and end are the same nothing happens 
    if (opacStart > opacEnd) {
        for (i = opacStart; i >= opacEnd; i--) {
            setTimeout("changeOpac('" + id + "'," + i + ")", (timer * speed));
            timer++;
        }
    } else if (opacStart < opacEnd) {
        for (i = opacStart; i <= opacEnd; i++) {
            setTimeout("changeOpac('" + id + "'," + i + ")", (timer * speed));
            timer++;
        }
    }
}

//change the opacity for different browsers 
function changeOpac(id, opacity) {
    var pic = document.getElementById(id);
    if (pic != null) {
        var object = pic.style;
        if (object != null) {
            object.opacity = (opacity / 100);
            object.MozOpacity = (opacity / 100);
            object.KhtmlOpacity = (opacity / 100);
            object.filter = "alpha(opacity=" + opacity + ")";

            // Hack to deal with the IE browser
            if (document.getElementById(id).currentStyle.hasLayout == false)
                object.zoom = 1;
        }
    }
}


