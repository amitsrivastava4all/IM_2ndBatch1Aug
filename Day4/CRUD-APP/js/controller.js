window.addEventListener("load",init);
function init(){
	bindEvents();
	printId();
	setFocus();
	printTotalRecords();
}
function bindEvents(){
	document.getElementById("add").addEventListener("click",addNewTask);
	document.getElementById("delete").addEventListener("click",deleteRecords);
	document.getElementById("sort").addEventListener("click",sortByPrice);
	document.getElementById("save").addEventListener("click",saveRecords);
	document.getElementById("load").addEventListener("click",loadRecords);
	document.getElementById("callAjax").addEventListener("click",doAjax);
}


function doAjax(){
	var xmlHttpRequest = new XMLHttpRequest();
	var url = "local.json";
	//var url = "https://raw.githubusercontent.com/amitsrivastava4all/IM_2ndBatch1Aug/master/server.json";
	    xmlHttpRequest.onreadystatechange = function(){
			if (xmlHttpRequest.readyState == 4) {
	            if (xmlHttpRequest.status == 200) {
					var result   = JSON.parse(xmlHttpRequest.responseText);
					console.log("Result is ",typeof result);
					printRecords(result);
					showNotification("Record Come From Server....");
				}
			}
		}
	    xmlHttpRequest.open("GET", url, true);
	    xmlHttpRequest.send(null);


}

function saveRecords(){
if(localStorage){
	var json = JSON.stringify(itemOperations.itemList);
	localStorage.items = json;
	showNotification("Data Saved in LocalStorage...");
	//alert("Data Saved...");
}
	else{
		showNotification("LocalStorage Feature is Not Present in Your Browser...");
	}
}
function loadRecords(){
	if(localStorage){
		if(localStorage.items){
			itemOperations.itemList= JSON.parse(localStorage.items);
			printRecords(itemOperations.itemList);
		}
		else{
			showNotification("No data found to load...");
		}
	}
	else{
		showNotification("LocalStorage Feature is Not Present in Your Browser...");
	}
}

const sortByPrice=()=>printRecords(itemOperations.sortByPrice());


function deleteRecords(){
	var itemList = itemOperations.deleteRecords();
	printRecords(itemList);
	printTotalRecords();
	
}

var printTotalRecords = ()=>{document.getElementById("total").innerHTML=itemOperations.itemList.length
							document.getElementById("markrecords").innerHTML = itemOperations.countMark();
							};

function addNewTask(){
	var name = document.getElementById("name").value;
	var descr = document.getElementById("descr").value;
	var price = document.getElementById("price").value;
	var color = document.getElementById("color").value;
	var delDate = document.getElementById("deldate").value;
	var url = document.getElementById("url").value;
	itemOperations.addNewItem(name,descr, price,delDate,color,url);
	var itemObject = itemOperations.getLastRecord();
	printRecord(itemObject);
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
	itemOperations.markRecord(itemId);
	printTotalRecords();
	//alert("Mark For Delete Call "+itemId);
}

function edit(){
	alert("Edit Call");
}

function printRecords(itemList){
	document.getElementById("items").innerHTML="";
	itemList.forEach((itemObject)=>printRecord(itemObject));
}

function printRecord(itemObject){
	var cellIndex =0; 
	
	var tbody = document.getElementById("items");
	var tr = tbody.insertRow();
	//tr.insertCell(0).innerHTML = itemObject.id;
	for(let key in itemObject){
		if(key=='isMark'){
		continue;
		}
		if(key=='color'){
			//tr.insertCell(cellIndex).innerHTML = "<div class='shape' style='background-color:"+itemObject[key]+"'></div>";
			tr.insertCell(cellIndex).innerHTML = `<div class='shape' style='background-color:${itemObject[key]}'></div>`;
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