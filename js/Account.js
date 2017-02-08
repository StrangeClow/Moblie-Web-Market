/*开始编写coding*/
window.onload = function () {
	var myDate = new Date();
	$("#dateSelelctor").DateSelector({
		ctlYearId:'idYear',
		ctlMonthId:'idMonth',
		ctlDayId:'idDay',
		defYear: myDate.getFullYear(),
		defMonth:(myDate.getMonth()+1),
		defDay:myDate.getDate(),
		minYear:1800,
		maxyear:(myDate.getFullYear()+1)
	});
	$(".mydizhi").css({
		height:$(".site .rightBox").height()
	});
	$(".messageDiv").hide();
	
	$.cxSelect.defaults.url = 'js/cityData.min.json';
	
	$('#city_china').cxSelect({
		selects:['province','city','area']
	});
	
	$('#city_china_val').cxSelect({
		selects: ['province', 'city', 'area'],
        nodata: 'none'
	});
	
	$('.item_content').click(function () {
		window.location="all_orders.html"
	});
};


$(function() {
	$(".vip_right").css("width",(parseInt($(".user_info").width())-parseInt($(".head").width())-43)+"px");
	$("footer a").click(function () {
		$(this).addClass("active");
		$(this).siblings("a").removeClass("active");
	});
	$(".Max").css({
		height:$(window).height()
	});
	$(".changeMerchants").css({
		height:$(window).height()
	});
	
	$(".tjr_xg").click(function(){
		$(this).css('display','block');
	});
	
	$(".tjr").click(function(e) {
		e.stopPropagation();
		$(".changeMerchants").show();
	});
	 $(".coupon p").text($(".couponsBox .couponsContent").size());
        //2222222222
        
        $(".quxiao").click(function() {
        	$(".changeMerchants").hide();
        });
        $(".queding").click(function() {
        	$(".changeMerchants").hide();
        	$(".tjr_name").text($(".changeText").val())
        });
        
        $(".fansSelect div").each(function(e) {
        	$(".fansSelect div").eq(e).click(function () {
        		$(".fansSelect ul").hide();
        		$(".fansSelect ul").eq(e).show();
        		$(".fansSelect div").removeClass("fansClick");
        		$(this).addClass("fansSelect");
        	});
        });
        
        
        $(".user_info").click(function() {
        	hideAll("messageDiv");
        	$(".main").hide();
        });
        $(".messageDivReturn").click(function() {
        	hideAll();
        	$(".main").show();
        });
        $(".dfk").click(function() {
        	window.location="all_orders.html";
        });
        $(".dsh").click(function() {
        	hideAll("dsh");
        });
        $(".dpj").click(function () {
        	hideAll("dpj");
        });
        $(".tk").click(function () {
        	hideAll("tk");
        });
        $(".Return").click(function() {
        	$(".Max").hide();
        });
        $(".vip_rank_title_link").click(function () {
        	hideAll("lv");
        });
        $(".wdfs").click(function(){
            hideAll("fans");
        });
        $(".byzd").click(function(){
            hideAll("bill");
        });
        $(".jffd").click(function(){
            hideAll("rebates");
        });
        $(".my_purse_title_link,.freeze,.balance").click(function(){
            hideAll("myMoney");
        });
        $(".coupon").click(function(){
            hideAll("couponsBox");
        });
        //点击上传图片
        $(".upHeadImgBtn").click(function() {
        	$("#upHeadImgBtn").click();
        });
        var vip_number=$(".vip_number span").text();
        $(".VipNum .rightBox p").text(vip_number);
        
        $(".headImgBox img").css({
        	width:$(window).width()*0.25,
        	height:$(window).height()*0.25
        });
        $(".headImg").css({
        	height:$(window).width()*0.25+10
        });
         $(".headImgText").css({
        lineHeight:$(window).width()*0.25+10+"px"
    });
});



//封装hideAll()方法
 function hideAll(e) {
 	$(".Max").hide();
 	switch (e) {
 		case "messageDiv":
 		$(".messageDiv").show();
 		break;
 		case "dfk":
 		$(".dfkBox").show();
 		break;
 		case "dsh":
 		window.location="get.html";
 		break;
 		case "dpj":
 		window.location="share.html";
 		break;
 		case "tk":
 		window.location="afteSales.html";
 		break;
 		case "lv":
 		$(".lvBox").show();
 		break;
 		case "fans":
 		$(".fansBox").show();
 		break;
 		case "bill":
 		$(".billBox").show();
 		break;
 		case "rebates":
 		$(".rebatesBox").show();
 		break;
 		case "myMoney":
 		$(".myMoneyBox").show();
 		break;
 		case "couponsBox":
 		$(".couponsBox").show();
 		break;
 		
 		
 	}
 }


