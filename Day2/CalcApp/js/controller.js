window.addEventListener("DOMContentLoaded",init);
function init(){
	//document.getElementById("add").addEventListener("click",doOperation);
	var buttons = document.getElementsByClassName("opr");
	console.log("Buttons ",buttons.length);
	Array.prototype.forEach.call(buttons,(e)=>e.addEventListener("click",doOperation));
	/*for(let i = 0 ; i<buttons.length; i++){
		buttons[i].addEventListener("click",doOperation);
	}*/
}

function doOperation(event){
	var firstNo = document.getElementById("firstNo").value;
	var secondNo = document.getElementById("secondNo").value;
	var result = 0;
	//console.log(event.srcElement.getAttribute("data-operation"));
	//var operation = event.srcElement.getAttribute("data-operation");
	var operator = event.srcElement.getAttribute("data-operator");
	result = compute(firstNo,secondNo,operator);
	//result = calcOperations[operation](firstNo,secondNo);
	/*if(operation =="add"){
		result = add(firstNo,secondNo);
	}
	else
	if(operation =="subtract"){
		result = subtract(firstNo,secondNo);
	}
	else
		if(operation =="multiply"){
		result = multiply(firstNo,secondNo);
	}
	else
		if(operation =="divide"){
		result = divide(firstNo,secondNo);
	}*/
	document.getElementById("result").innerHTML = result;
}