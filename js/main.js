$(function(){
	$("#add").on('click', function(){
		var container = $(".text-container");
		var width = container.width();
		var height = container.height();
		var offset =  container.offset();
		var top = offset.top;
		var left = offset.left;
		$("#loaderdiv").css({
			width:width,
			height:height,
			top:top,
			left:left
		}).parent().show();
		setTimeout(function(){
			$(".loadercontainer").hide();
		},3000);
	});

	
});