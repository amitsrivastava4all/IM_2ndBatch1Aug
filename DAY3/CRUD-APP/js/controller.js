window.addEventListener("load",init);
function init(){
	bindEvents();
	printId();
	setFocus();
	printTotalRecords();
}
function bindEvents(){
	document.getElementById("add").addEventListener("click",addNewTask);
}

var printTotalRecords = ()=>document.getElementById("total").innerHTML=itemOperations.itemList.length;

function addNewTask(){
	var name = document.getElementById("name").value;
	var descr = document.getElementById("descr").value;
	var price = document.getElementById("price").value;
	var color = document.getElementById("color").value;
	var delDate = document.getElementById("deldate").value;
	var url = document.getElementById("url").value;
	itemOperations.addNewItem(name,descr, price,delDate,color,url);
	printRecord();
	printId();
	clearAll();
	printTotalRecords();
	//alert("Record Added...");
}

function printId(){
	document.getElementById("itemid").innerHTML = itemOperations.getId();
}

var setFocus = ()=>document.getElementById("name").focus();

function clearAll(){
	var fields = document.getElementsByClassName("clearFields");
	Array.prototype.forEach.call(fields,(e)=>e.value='');
	setFocus();
}

function createIcon(imagePath,fn,id){
	var img = document.createElement("img");
	img.src = imagePath;
	img.addEventListener("click",fn);
	img.classList.add("icon");
	img.setAttribute("data-itemid",id);
	return img;
}

function markForDelete(event){
	var itemId = event.srcElement.getAttribute("data-itemid");
	var tr = event.srcElement.parentNode.parentNode;
	tr.classList.toggle("red");
	//alert("Mark For Delete Call "+itemId);
}

function edit(){
	alert("Edit Call");
}

function printRecord(){
	var cellIndex =0; 
	var itemObject = itemOperations.getLastRecord();
	var tbody = document.getElementById("items");
	var tr = tbody.insertRow();
	//tr.insertCell(0).innerHTML = itemObject.id;
	for(let key in itemObject){
		if(key=='color'){
			tr.insertCell(cellIndex).innerHTML = "<div class='shape' style='background-color:"+itemObject[key]+"'></div>";
		}
		else
		if(key=='url'){
			tr.insertCell(cellIndex).innerHTML="<img src='"+itemObject[key]+"'>";
		}	
		else{
			tr.insertCell(cellIndex).innerHTML = itemObject[key];
		}
	cellIndex++;	
	}  // Loop Ends
	var td = tr.insertCell(cellIndex);
	td.appendChild(createIcon("images/delete.png",markForDelete,itemObject.id));
	td.appendChild(createIcon("images/edit.png",edit,itemObject.id));
	
}