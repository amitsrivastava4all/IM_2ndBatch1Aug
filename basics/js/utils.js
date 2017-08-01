var canvas;
var context ;

function bg(color){
	context.fillStyle = color;
}

function rect(x,y,w,h){
	context.fillRect(x,y,w,h);
}

function circle(x,y,r){
	context.beginPath();
	context.arc(x,y,r,0,Math.PI*2,true);
	context.fill();
	
}

function createCanvas(width,height){
	canvas = document.createElement("canvas");
	canvas.height = height;
	canvas.width = width;
	document.body.appendChild(canvas);
	context = canvas.getContext("2d");
}
function background(color){
	context.fillStyle = color;
	context.fillRect(0,0,canvas.width,canvas.height);
}