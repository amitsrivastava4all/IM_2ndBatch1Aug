const itemOperations={
	itemList :[],
	id:1000,
	addNewItem:function(name,descr,price,deldate,color,url){
		var itemObject = new Item(this.id , name , descr, price, deldate, color , url);
		this.itemList.push(itemObject);
		this.id ++;
	},
	getLastRecord:function(){
		return this.itemList[this.itemList.length-1];
	},
	getId:function(){
		return this.id;
	}
	
}