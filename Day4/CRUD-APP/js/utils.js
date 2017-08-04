function showNotification(msg){
	var notificationObject = {
	        body:msg,
	        icon:"images/edit.png"
	    }
	    var notification;
	    Notification.requestPermission(function(){
	       notification = new Notification("ITEM CRUD-Application",notificationObject);
	    });
	    document.getElementById("audio").play();
	    function closeNotification(){
	        notification.close();
	        document.getElementById("audio").pause();
	        document.getElementById("audio").currentTime = 0;
	    }
	    setTimeout(closeNotification,3000);

}