/*
=============================================
Copyright (C) 2010 Al Jazeera Network
All rights reserved.
Aljazeera Software Section
=============================================
*/

// Global level constants
var GRAY_COLOR = '#EEEEEE';
var DARK_GRAY_COLOR = '#E8E8E8';
var ORANGE_COLOR = '#FB9D04';
var BLUE_COLOR = '#10367d';

// Variables to persist the active menu/sub-menu id
var activeMenuId = '';
var activeSubMenuId = '';
var inactiveMainMenuBGColor = '';
var inactiveSubMenuColor = '';

// To hide the current sub-menu and show the sub-menu of active/selected menu
function showSubMenu(menuId) {
    try {
        var inactiveMainMenuBGColor = ORANGE_COLOR;

        deactivateMenu(activeMenuId);
        activateMenu(menuId);
        // Update the current selected menu/sub-menu
        activeMenuId = menuId;
        activeSubMenuId = menuId;
    }
    catch (e) {
        return null;
    }
}

// To deactivate the required menu so it will not be displayed as selected
function deactivateMenu(menuId) {
    try {
        // Get the objects
        var divInactive = document.getElementById('divMenu' + menuId);
        var lnkInactive = document.getElementById('lnkMenu' + menuId);
        var tdInactive = document.getElementById('td' + menuId);

        // Nullability checks, so the script will not crash
        if (lnkInactive != null) {
            lnkInactive.style.background = GRAY_COLOR;
        }

        if (tdInactive != null) {
            tdInactive.style.backgroundColor = GRAY_COLOR;
        }
    }
    catch (e) {
        return null;
    }
}

// To activate the required menu so it will be displayed as selected
function activateMenu(menuId) {
    try {
        // Get the objects
        var divActive = document.getElementById('divMenu' + menuId);
        var lnkActive = document.getElementById('lnkMenu' + menuId);
        var divActiveSub = document.getElementById('divSub' + menuId);
        var divInactiveSub = document.getElementById('divSub' + activeSubMenuId);
        var tdActive = document.getElementById('td' + menuId);

        if (tdActive != null) {
            //tdActive.style.backgroundColor = ORANGE_COLOR;
            tdActive.style.backgroundImage = "url('/Media/ver2/Images/SubMenu_Slice.gif')";
            tdActive.style.backgroundRepeat = "repeat-x";
            inactiveMainMenuBGColor = ORANGE_COLOR;
        }

        // Nullability checks, so the script will not crash
        if (lnkActive != null) {
            lnkActive.style.color = BLUE_COLOR;
        }

        if (lnkActive != null) {
            //lnkActive.style.backgroundColor = ORANGE_COLOR;
            lnkActive.style.backgroundImage = "url('/Media/ver2/Images/SubMenu_Slice.gif')";
            lnkActive.style.backgroundRepeat = "repeat-x";
        }


        if (divInactiveSub != null) {
            divInactiveSub.style.display = 'none';
        }

        if (divActiveSub != null) {
            divActiveSub.style.display = '';
        }
    }
    catch (e) {
        return null;
    }
}

// To give the rollover effect
function hoverMainMenu(menuId) {
    if (activeMenuId == menuId)
        return;

    var tdActive = document.getElementById('td' + menuId);
    var lnkActive = document.getElementById('lnkMenu' + menuId);

    if (tdActive != null) {
        inactiveMainMenuBGColor = tdActive.style.backgroundColor;
        tdActive.style.backgroundColor = DARK_GRAY_COLOR;
    }

    if (lnkActive != null) {
        lnkActive.style.backgroundColor = DARK_GRAY_COLOR;
    }
}

function resetMainMenu(menuId) {
    if (activeMenuId == menuId)
        return;

    var tdActive = document.getElementById('td' + menuId);
    var lnkActive = document.getElementById('lnkMenu' + menuId);

    if (tdActive != null) {
        tdActive.style.backgroundColor = inactiveMainMenuBGColor;
    }

    if (lnkActive != null) {
        lnkActive.style.backgroundColor = inactiveMainMenuBGColor;
    }
}

function hoverSubMenu(menuId) {
        var lnkSubMenu = document.getElementById('lnkSubMenu' + menuId);

        if (lnkSubMenu != null) {
            inactiveSubMenuColor = lnkSubMenu.style.color;
            lnkSubMenu.style.color = DARK_GRAY_COLOR;
        }
}

function resetSubMenu(menuId) {
    var lnkSubMenu = document.getElementById('lnkSubMenu' + menuId);

    if (lnkSubMenu != null) {
        lnkSubMenu.style.color = inactiveSubMenuColor;
    }
}

// To load the menu after the page is loaded
function LoadMenu() {
    var hdnGuid = document.getElementById('_CHId');
    var hdnParentGuid = document.getElementById('_ParentChId');

    if (hdnGuid != null) {
        if (LoadMenuByGuid(hdnGuid.value) != true) {
            if (hdnParentGuid != null) {
                LoadMenuByGuid(hdnParentGuid.value);
            }
        }
    }

}

function LoadMenuByGuid(guid) {
    var found = false;
    var lnkSubMenu = document.getElementById('lnkSubMenu' + guid);
    var divMenu = document.getElementById('divMenu' + guid);

    if (lnkSubMenu != null) {
        found = true;
        lnkSubMenu.style.color = BLUE_COLOR;

        var guidKey = lnkSubMenu.name;
        var parentGuid = (guidKey.substring(guidKey.indexOf('_') + 1));
        showSubMenu(parentGuid);
    }
    else if (divMenu != null) {
        found = true;
        showSubMenu(guid);
    }

    return found;
}

// To disable the Enter key on page
function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text")) { return false; }
}

// Disable Enter key on page
document.onkeypress = stopRKey; 