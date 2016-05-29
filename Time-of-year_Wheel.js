// Code, for JavaScript and JQuery, goes in this file.
const MS_PER_CYEAR = 31536000000; // milliseconds in a common year.
const MS_PER_LYEAR = 31622400000; // milliseconds in a leap year.
const MS_PER_MINUTE = 60000;  /* used to convert the value that's "returned"
 					from getTimezoneOffset() (which is in terms of minutes), into ms.
*/
var msInCurrYear;

$(document).ready(function() {
  /*Attempting to execute code upon loading, rather than mouse click: */
	var currTOYr_DegVal=GetCurrTOYr_DegVal();
	if (currTOYr_DegVal >= 360){
		// This might never happen, but it's checked, for just in case.
		currTOYr_DegVal -= 360;
		}

	var strForTransform = 'rotate('+ currTOYr_DegVal.toString() + 'deg)';
	$(".pointer-arrow-box__arrow").css({'transform' : strForTransform});

/*Code above -- same as that below, except it's not in an event handler
That code below: disabled / "commented out"  */

  /*  Code to get time of year -- from a mouse click.
	$('#time-of-year_btn').click(function(){
		var currTOYr_DegVal=GetCurrTOYr_DegVal();
		if (currTOYr_DegVal >= 360){
			// This might never happen, but it's checked, for just in case.
			currTOYr_DegVal -= 360;
			}

		var strForTransform = 'rotate('+ currTOYr_DegVal.toString() + 'deg)';
		$(".pointer-arrow-box__arrow").css({'transform' : strForTransform});

	});
  */
	function GetCurrTOYr_DegVal () {
		/*
		"TOYr" stands for "Time Of Year".
		0 deg is for the start of the year; 360 deg is for the start of
		the following year */

		var currDateTime = new Date();
		var currYear = currDateTime.getFullYear();
		var startOfYear_DateTime = new Date(currYear,0,1,0,0,0,0);
		var msIntoCurrYear = currDateTime.getTime()
								- startOfYear_DateTime.getTime();
		var portionIntoCurrYear;

		if(isLeapYear(currYear)){
			portionIntoCurrYear = msIntoCurrYear/MS_PER_LYEAR;
			}
		else {
			portionIntoCurrYear = msIntoCurrYear/MS_PER_CYEAR;
		}
	return portionIntoCurrYear * 360;
	}

});

function isLeapYear(yr) {
  return ((yr % 4 == 0) && (yr % 100 != 0)) || (yr % 400 == 0);
	}




/*
function TempFnIsJQ-Loaded() {

		if (window.jQuery) {
			alert("JQuery is loaded.");
			}
		else {
			alert("JQuery is NOT loaded.");
			}

}
*/
/*
function TellNumberEight(){
		alert("8's are Brown. function inside JS file");
		}
*/
