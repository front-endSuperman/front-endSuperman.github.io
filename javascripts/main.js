
window.onload=function(){
     init();
     function init(){
     	addEvent();
     }
     function addEvent(){
     	$("#more").on("click",function(){
     		var text=$(this).text();
     		if(text=="查看更多"){
     			$("#more").parent().css({
	     			"height":"auto",
	     			"transition":"all 3s"
     			})
     			$("#more").text("收到碗里");
     		}else if(text=="收到碗里"){
     			$("#more").parent().css({
	     			"height":"300px",
	     			"transition":"all 3s"
     			})
     			$("#more").text("查看更多");
     		}
     		
     	})
     }
}