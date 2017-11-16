// JavaScript Document
window.onload = function(){
	setTimeout ("switchImage()",3000);
}
var current =1;
var num_image=3;
function switchImage(){
	current++;
	document.getElementById('slider').src = 'image/car' + current + '.jpg';
	if(current == num_image) { current=0; }
	setTimeout("switchImage()",3000);
}