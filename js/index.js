// alert(1) 
// 弹出框的意思

$(function(){

	$(".tab .button_box .button").click(function(){
		$(".tab .content_box ul").hide();
	// 上面的一堆第一行是选择到4个button，然后click是单击的意思，
	// 下面的一行是隐藏的意思，连起来就是点击所有button都会让下
	// 面的所有ul都隐藏

		var num = $(".tab .button_box .button").index($(this));
		$(".tab .content_box ul").eq(num).show();
	// 上面的第一行表示选择哪一个按钮，然后给一个变量，this表示
	// 选择到的哪一个button。下面的一行表示选择的ul，eq(num)表
	// 示等于到变量的哪一个值，后面的show表示显示。
	
		$(".tab .button_box .button").css({
			"background":"rgba(0,0,0,0)"
		})
		// 把所有按钮的背景色去掉，js里写css的时候两个之间要
		// 加,最后一行什么都不加
		$(this).css({
			"background":"#4eb2d6"
		})
		// 把对应的变量的按钮的背景色添加
	})


	$(".backtop").backTop();
	//$(".backtop") 返回按钮父容器     

})