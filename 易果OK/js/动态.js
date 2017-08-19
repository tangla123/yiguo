/**
 * Created by Administrator on 2017/5/12 0012.
 */
$(function(){
    //TOP
    $(window).scroll(function(){
//        $(window).scrollTop()获取或设置匹配元素的滚动条的垂直高度位置
//        console.log($(document).scrollTop());
        var scrollTop=$(document).scrollTop();
//        console.log(scrollTop);
        if(scrollTop>500){
            $("#gun").show(1000);
        }else{
            $("#gun").hide(1000);
        }

    })
//    点击TOP返回顶部
    $("#gun").click(function(){
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    })

    //搜索框
    $(".logo2 input").focus(function(){
        $(".go2").css("background","#fff")
    })
    $(".logo2 input").blur(function(){
        $(".go2").css("background","#e0e0e0")
    })









    //隐藏搜索框
    $(".lo2 input").focus(function(){
        $(".go3").css("background","#fff")
    })
    $(".lo2 input").blur(function(){
        $(".go3").css("background","#e0e0e0")
    })

    $(window).scroll(function(){
//        $(window).scrollTop()获取或设置匹配元素的滚动条的垂直高度位置
//        console.log($(document).scrollTop());
        var scrollTop=$(document).scrollTop();
//        console.log(scrollTop);
        if(scrollTop>130){
            $("#se").show();
        }else{
            $("#se").hide();
        }

    })


    //头部地址
    $(".three li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active")
        $(".four>.foura").hide().eq($(".three li").index(this)).show();
    })




//点击加入购物车
    $(".c2 a").click(function(){
        var l=$(this).parent().parent().parent();
        var tp=l.offset().top
        var lt=l.offset().left
        var lm = $(".fei").css('opacity');
        var wh = $(".fei").width();
        if(lm == 0||wh==40){
            $(".fei").removeAttr("style");
        };
        var lt2 = $(".lo4").offset().left;
        var tp2 = $(".lo4").offset().top;
        $(".fei").css({"left":lt,"top":tp}).show()
            .animate({width:40+"px"},1000)
            .animate({top:tp2+"px",left:lt2+"px"},1000)
            .animate({opacity:"0"},10);

    })






    })

