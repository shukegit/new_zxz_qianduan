$(function() {
	$(".main_next").click(function() {
		/*跳转到第一个栏目所在的位置*/
		$("html,body").animate({scrollTop:$(".section").offset().top - 60},1000);
 	});
});