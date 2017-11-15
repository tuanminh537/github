// JavaScript Document
window.onload = function(){
	setTimeout ("switchImage()",3000);
}
var current =1;
var num_image=4;
function switchImage(){
	current++;
	document.image['image'].src = 'image/car' + current + '.jpg';
	if(current == num_image) { current=0; }
	setTimeout("swithImage()",3000);
}