/* Text changer - light version.
Let your text's font size customizable.
by Marco Rosella - http://www.centralscrutinizer.it/en/design/js-php/text-changer
                v0.2 - May 18, 2006
*/
function initFontResize()
{
    textChanger.init();
}
var textChanger = {
    defaultFS : 13,
    init: function()
    {
        var el = document.getElementById("innerArticle");
        var sz = "NaN";
        if (textChanger.getCookie()){
        	sz = textChanger.getCookie().toString();
        }
       
        
        if (el && sz != "NaN"){
        
	        var fSize = parseFloat(sz,10);
	        if (fSize < 9) fSize = 9 ;
	        if (fSize > 30) fSize = 30 ;

	        el.style.fontSize = fSize + 'px' ;
        } else {
        	if(el)
        		el.style.fontSize = textChanger.defaultFS + 'px';
        }
        
       // el.style.fontSize = textChanger.defaultFS + 'px';
 
        var incr = document.getElementById('increase');
        if(incr)
            incr.onclick = function(){textChanger.changeSize(1); return false;};
        var decr = document.getElementById('decrease');
        if(decr)
            decr.onclick = function(){textChanger.changeSize(-1); return false;};
        var reset = document.getElementById('reset');
        if(reset)
            reset.onclick = function(){textChanger.changeSize(0); return false;};
    },
    changeSize: function(val)
    {
        var el = document.getElementById("innerArticle");
        var size = el.style.fontSize.substring(0,3);
        var fSize = parseFloat(size,10);
        if (val == 1)
        {
            fSize += 1;
            if (fSize > 30) fSize = 30;
        }
        if (val == -1)
        {
            fSize -= 1;
            if (fSize < 9) fSize = 9;
        }      
        if (val == 0) 
        {
            fSize = 13;
        }
        el.style.fontSize = fSize + 'px';
        textChanger.updateCookie(fSize);
    },
    updateCookie: function(vl)
    {
        var today = new Date();
        var exp = new Date(today.getTime() + (365*24*60*60*1000));
        document.cookie = 'textChangerL=size=' + vl + ';' +'expires=' + exp.toGMTString() + ';' +'path=/';
    },
    getCookie: function()
    {
        var cname = 'textChangerL=size=';  
        var start = document.cookie.indexOf(cname);
        var len = start + cname.length;
        if ((!start) && (cname != document.cookie.substring(0,cname.length))) {return null;}
        if (start == -1) return null;
        var end = document.cookie.indexOf(";",len);
        if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(len, end));
    }
}
if (window.addEventListener)
    window.addEventListener("load", initFontResize, false);
else if (window.attachEvent && !window.opera)
    window.attachEvent("onload", initFontResize); 
