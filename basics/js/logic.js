var shapeType;
function takeInput(){
	 shapeType= document.getElementById("shapeType").value;
	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	ySpeed = speed = parseInt(document.getElementById("speed").value);
	console.log(`Shape Type ${shapeType} , Height ${height} and width is ${width}`);
	createCanvas(width,height);
	background('black');
	gameLoop();
	//drawing(shapeType);
}
var loop;
var x = 10;
var y = 100;
var ySpeed = 5;
var speed = 5;
function gameLoop(){
loop = setInterval(drawing,100);
}

function drawing(){
	background('black');
	if(shapeType=='Rect'){
		bg('red');
		rect(x,y,50,50);
	}
	else
	if(shapeType=='Circle'){
		bg('yellow');
		circle(x,y,50);
	}
	move();
	changeDirection();
}

function move(){
	x+=speed;
	y+=ySpeed;
}

function changeDirection(){
	if(x>=canvas.width){
		speed = speed * - 1;
	}
	else
	if(x<=0){
		speed = speed * -1;
	}
	if(y>=canvas.height){
		ySpeed = ySpeed * - 1;
	}
	else
	if(y<=0){
		ySpeed = ySpeed * - 1;
	}	
}