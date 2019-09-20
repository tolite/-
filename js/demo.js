$(function(){
	$('.bottom-p').eq(0).show().siblings().hide();
	$('.image').eq(0).show().siblings().hide();
	var i = 0;
	var timer;
	showTime();
	function showTime(){
		timer = setInterval(function(){
		i++;
		if(i == 5){
			i = 0;
		}
		Show();
		},2000)
	}

	$('.image').hover(function(){
		clearInterval(timer);
	},function(){
		showTime();
	});
	
	$('.bottom-p').hover(function(){
		clearInterval(timer);
	},function(){
		showTime();
	});

	$('.btn1').on('click',function(){
		clearInterval(timer);
		if(i == 0){
			i = 5;
		}
		i --;
		Show();
		showTime();
	});
	$('.btn2').on('click',function(){
		clearInterval(timer);
		if(i == 4){
			i = -1;
		}
		i ++;
		Show();
		showTime();
	});

	$('.tab').hover(function(){
		i = $(this).index();
		Show();
		clearInterval(timer);
	},function(){
		showTime();
	});
	function Show(){
		$('.image').eq(i).fadeIn(300).siblings().fadeOut(300);
		$('.bottom-p').eq(i).fadeIn(300).siblings().fadeOut(300);
		$('.tab').eq(i).addClass('col').siblings().removeClass('col');
	}
});
$(function() {
			
	var timeLength = $('.time-box li').length,
		timeliWidth = $('.time-box li').outerWidth();
	
	var index = 0;
	
	$('.time-box ul').width(timeLength * timeliWidth);
	
	function slideOne(i) {
		var scrollVal = i * timeliWidth; //每次切换的数量
		$('.time-box').stop().animate({
			scrollLeft: scrollVal
		}, 300);
	}
	
	$('.right-btn').click(function() {
		index = index >= (timeLength-4) ? 0 : index + 1;
		slideOne(index);
	})
	
	$('.left-btn').click(function() {
		index = index <= 0 ? (timeLength-4) : index - 1;
		slideOne(index);
	})
	
})