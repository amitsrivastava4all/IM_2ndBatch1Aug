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
	},
	markRecord:function(id){
	 var itemObject = this.searchById(id);	
	 itemObject.isMark = !itemObject.isMark;	
	},
	searchById:function(id){
		return this.itemList.filter(function(itemObject){
			return itemObject.id ==id;
		})[0];
		
	},
	countMark:function(){
		return this.itemList.filter(function(itemObject){
			return itemObject.isMark;
		}).length;
	},
	deleteRecords:function(){
		return this.itemList = this.itemList.filter(function(itemObject){
			return !itemObject.isMark;
		})
	},
	sortByPrice:function(){
		return this.itemList.sort(function(one, two){
			return one.price - two.price;
		});
	}
	
	
}