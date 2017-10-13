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



	$(".icon").click(function () {
	        $({dNum:0}).animate({dNum:650},{
	            duration:850,
	            step: function () {
	                $(window).scrollTop(this.dNum);
	            }
	        })
	    });
	// 上面的这堆代码的意思是点击后向下滚动，用的时候需要更改的地方
	// 是 ".icon" 需要编程属性名，0 和 700 的意思是从 0 移动到 700 ，
	// 后面的 850 表示经历的时间为 850 毫秒

	$("nav .nav li:eq(0)").click(function () {
	    $({num:$(window).scrollTop()}).animate({num:0},{
	        duration:850,
	        step: function () {
	                $(window).scrollTop(this.num);
	            }
	        })
	    });

	$("nav .nav li:eq(1)").click(function () {
	    $({num:$(window).scrollTop()}).animate({num:650},{
	        duration:850,
	        step: function () {
	                $(window).scrollTop(this.num);
	            }
	        })
	    });
	$("nav .nav li:eq(2)").click(function () {
	    $({num:$(window).scrollTop()}).animate({num:1300},{
	        duration:850,
	        step: function () {
	                $(window).scrollTop(this.num);
	            }
	        })
	    });
	$("nav .nav li:eq(3)").click(function () {
	    $({num:$(window).scrollTop()}).animate({num:1995},{
	        duration:850,
	        step: function () {
	                $(window).scrollTop(this.num);
	            }
	        })
	    });
	$("nav .nav li:eq(4)").click(function () {
	    $({num:$(window).scrollTop()}).animate({num:3500},{
	        duration:850,
	        step: function () {
	                $(window).scrollTop(this.num);
	            }
	        })
	    });

	// 上面的这一堆表示从导航栏里点击移动页面到哪一屏，黄色的表示
	// 类名选择器，eq(0)表示选择 li 的第一个，num$(window)表示从当
	// 前屏开始移动，后面变化的数字表示移动到哪一位置，后面的 850
	// 表示移动花费的时间
	
})
