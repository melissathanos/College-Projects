/*
	JavaScript functions to handle the "drop-down" effect of the menus.
		These are needed to allow only hovered submenus to appear, and then
		disappear when they lose focus ( via onMouseover event ).

	The CSS for the menus will take care of the highlighting for the
		hover-effects.

	Recoded and updated by: Jim S. Smith, Dec 2012
	TEMPLE OF THE ANCIENT DRAGONS.
*/

function getRef(id) {
	return document.getElementById(id); }

function getSty(id) {
	return getRef(id).style; }

var cssmenuids=["cssmenu1"]; 	//Enter id(s) of CSS Horizontal UL menus, separated by commas
var csssubmenuoffset=-1;		//Offset of submenus from main menu. Default is 0 pixels.

function createcssmenu2() {
	for (var i=0; i<cssmenuids.length; i++) {
	var ultags=document.getElementById(cssmenuids[i]).getElementsByTagName("ul");
		for (var t=0; t<ultags.length; t++) {
			ultags[t].style.top=ultags[t].parentNode.offsetHeight+csssubmenuoffset+"px";
			var spanref=document.createElement("span");
			spanref.className="arrowdiv";
			spanref.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;";
			ultags[t].parentNode.getElementsByTagName("a")[0].appendChild(spanref);

			ultags[t].parentNode.onmouseover=function() {
				this.style.zIndex=100;
				this.getElementsByTagName("ul")[0].style.visibility="visible";
				this.getElementsByTagName("ul")[0].style.zIndex=0;
				}

			ultags[t].parentNode.onmouseout=function() {
				this.style.zIndex=0;
				this.getElementsByTagName("ul")[0].style.visibility="hidden";
				this.getElementsByTagName("ul")[0].style.zIndex=100;
				}
			}
		}
	}

if (window.addEventListener)
	window.addEventListener("load", createcssmenu2, false)
else if (window.attachEvent)
	window.attachEvent("onload", createcssmenu2)

// *** DYNAMIC RESIZING PROTOTYPES. ( FIND WINDOW METRICS )
// Added by: Jim S. Smith, 04/11/2009.
// These lines allow the finding the height and width of the window.

function getWindowXSize( )  {
	if (window.screen) {
		return(screen.availWidth);
		}
	else {
		return(innerWidth);
		}
	}

function getWindowYSize( )  {
	if (window.screen) {
		return(screen.availHeight);
		}
	else {
		return(innerHeight);
		}
	}
