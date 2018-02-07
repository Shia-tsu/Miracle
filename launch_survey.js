var scriptelements = document.getElementsByTagName("script");
var url_string = scriptelements[scriptelements.length-1].src;
var url = new URL(url_string);
var surveyScript = url.searchParams.get("surveyScript");
var scriptVersion = url.searchParams.get("v");
surveyScript+="&v="+scriptVersion;
alert(surveyScript);
lang=document.getElementById("confirmitLanguage").value;
var script = document.createElement("script");
script.src = surveyScript+"&l="+lang;
document.head.appendChild(script);

/*
Why this solution could be good?
- we will have only 1 middle script for the 3 surveys
- changes on the surveys URL (from Confirmit) will not come very often
- it will resolve the prompt language issue up to the next patch release
*/