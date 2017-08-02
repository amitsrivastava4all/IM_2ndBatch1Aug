/*function add(x,y){
return parseInt(x) + parseInt(y);
}

function subtract(x,y){
	return x - y;
}

var multiply=(x,y)=>x*y;


function divide(x,y){
	return x /y;
}*/
/*
var calcOperations = {
add:function (x,y){
return parseInt(x) + parseInt(y);
},

subtract:function (x,y){
	return x - y;
},
 multiply:(x,y)=>x*y,


divide:function (x,y){
	return x /y;
}
}*/

function compute(firstNo, secondNo, operator){
	var expression = firstNo + operator + secondNo;
	return eval(expression);
}

