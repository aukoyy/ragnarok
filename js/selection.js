
function addImgFunc() {
	var allImg = document.getElementsByClassName("rightmarginimg")
	var allText = document.getElementsByClassName("rightmargintext");
	for(i=0;i<allImg.length;i++){
		allImg[i].setAttribute("id","img"+i)
		allImg[i].setAttribute("onclick","imageSelect(this.id)")
	}
}
addImgFunc();

function imageSelect (id) {
	var ModImg = document.getElementById("mainImg")
	ModImg.src=document.getElementById(id).src;
	document.getElementById("mainText").innerHTML = document.getElementById(id).nextElementSibling.innerHTML;
}