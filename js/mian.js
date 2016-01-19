// search
$(function(){
  $("#searchSelected").click(function(){
    $("#searchTab").show();
    $(this).addClass("searchOpen");
  });

  $("#searchTab li").hover(function(){
    $(this).addClass("selected");
  },function(){
    $(this).removeClass("selected");
  });

  $("#searchTab li").click(function(){
    $("#searchSelected").html($(this).html());
    $("#searchTab").hide();
    $("#searchSelected").removeClass("searchOpen");
  });
});
// banner
$(function() {
        $('#banner').marquee({
            auto: true,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#u-next'),
            nextElement: $('#u-prev')
        });
    });
$(function() {
        $('#news-banner').marquee({
            auto: true,
            interval: 5000 ,
            speed: 500,
            showNum: 1,
            stepLen: 1,
            prevElement: $('#u-next'),
            nextElement: $('#u-prev')
        });
    });
// marquee
$(function() {
    $('#expert-marquee').marquee({
      auto: false,
      interval: 5000,
      speed: 500,
      showNum: 3,
      stepLen: 1,
      type: 'vertical',
      prevElement: $('#expert-next'),
      nextElement: $('#expert-prev')
    });
  });
// tab
$(function() {
  function tabs(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs(".tab-hd-h", "active", ".tab-bd-h");
});
$(document).ready(function(){
    var k=!0;
    $(".loginmask").css("opacity",0.4);
    $(".thirdlogin ul li:odd").css({marginRight:0});
    $(".openlogin").click(function(){
        k&&"0px"!=$("#loginalert").css("top")&& ($("#loginalert").show(),$(".loginmask").fadeIn(500),$("#loginalert").animate({top:"50%"},400,"easeOutQuart"))
    });
    $(".loginmask,.closealert").click(function(){
        k&&(k=!1,$("#loginalert").animate({top:-600},400,"easeOutQuart",function(){$("#loginalert").hide();k=!0}),$(".loginmask").fadeOut(500))
    });
});
$(document).ready(function(){
    var k=!0;
    $(".loginmask").css("opacity",0.4);
    $("#sidebar6").click(function(){
        k&&"0px"!=$("#loginalert1").css("top")&& ($("#loginalert1").show(),$(".loginmask").fadeIn(500),$("#loginalert1").animate({top:"50%"},400,"easeOutQuart"))
    });
    $(".loginmask,.closealert").click(function(){
        k&&(k=!1,$("#loginalert1").animate({top:-600},400,"easeOutQuart",function(){$("#loginalert1").hide();k=!0}),$(".loginmask").fadeOut(500))
    });
});