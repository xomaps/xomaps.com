$(document).ready(function(){
  $(".header .an").click(function(){
	$("html").addClass("on");
	$("body").addClass("on");
	$(".sj_bj").slideDown(0);
	$(".nav").find(".e_j").slideUp();
    $(this).addClass("n");
  });
  $(".sj_bj").click(function(){
	$(".header .an").removeClass("n");
	$(".sj_bj").slideUp(0);
	$("html").removeClass("on");
    $("body").removeClass("on");
	$(".nav").find(".e_j").slideUp();
  });
   $(".language .l_m").click(function(event){

    $(this).siblings(".x_l").slideToggle();

	$(".contact").find(".x_l").slideUp();

    event.stopPropagation();

  });

  $(document).click(function(){

    $(".language .x_l").slideUp();

  });
  $(".nav .y_j a").click(function(){
	$(this).parent().siblings(".e_j").slideToggle();
	$(this).parent().siblings(".e_j:after").slideToggle();
	$(this).parents("li").siblings().find(".e_j").slideUp();
    event.stopPropagation();
  });
  $(document).click(function(){
    $(".nav .e_j").slideUp();
  });
  $(".ny_cp .ny_lm .l_b").click(function(){
    $(this).siblings("ul").slideToggle();
  });
  $(".ny_cp .ny_lm a.e_j").click(function(){
    $(this).parent("li").toggleClass("on");
  });
  $(".header .s_ch").click(function(){
	$(".search").slideDown();
  });
  $(".search .sc_gb").click(function(){
	$(".search").slideUp();
  });
  $(".shangcheng .l_m").click(function(event){
    $(this).siblings(".x_l").slideToggle();
    event.stopPropagation();
  });
  $(document).click(function(){
    $(".shangcheng .x_l").slideUp();
  });
  $(".cp_fl .fl_bt").click(function(){
    $(this).toggleClass("on").siblings(".cp_fl .fl_lm").slideToggle();
  });
  $(".gallery-cpzs .swiper-slide").click(function(){
    $(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".cp_dt").empty().append($(this).html());
  });
  $(".jr_bt").click(function() {
	$(this).toggleClass("on");
	$(this).siblings(".jr_nr").slideToggle();
	$(this).parent().siblings().find(".jr_nr").slideUp();
	$(this).parent().siblings().find(".jr_bt").removeClass("on");
  });
  $(".w_x").click(function(){
    $(".e_m").slideDown();
  });
  $(".e_m").click(function(){
    $(this).slideUp();
  });
  $(".fh").click(function(){
    $("html,body").animate({scrollTop:0},500);
  });
});