var orgTitle="";
function changeMusic(){
	if(document.title!=orgTitle){
		orgTitle=document.title;
		chrome.extension.connect().postMessage("Changed ");

		}
}
setTimeout("orgTitle=document.title;setInterval(changeMusic,1000);",5000);
