/**
 * Created by Administrator on 2017/5/23 0023.
 */
$(function(){
    $(".input1").click(function(){
        $(".i1").css({
            "border-top":"1px solid #B5FEFD",
            "border-left":"1px solid #B5FEFD"
        });
        $(this).css({
            "border-top":"1px solid #B5FEFD",
            "border-bottom":"1px solid #B5FEFD",
            "border-right":"1px solid #B5FEFD"
        })
    })
    $(".input1").blur(function(){
        $(".i1").css({
            "border-top":"1px solid #ccc",
            "border-left":"1px solid #ccc"
        });
        $(this).css({
            "border-top":"1px solid #ccc",
            "border-bottom":"0",
            "border-right":"1px solid #ccc"
        })
    });
    //验证手机号
    $("#t1").blur(function(){
        var str=$("#t1").val();
        console.log(str)
        var reg=/^\d{11}$/;
        var result=reg.test(str);
        if(str==""){
            $("#oneb .pp").show().html("手机号不能为空")
        } else if(result==false){
            $("#oneb .pp").show().html("手机号错误")
        }
    })
    $("#t1").click(function(){
        $("#oneb .pp").hide()
    })



    //验证密码
    $("#t2").blur(function(){
        var str=$("#t2").val();
        console.log(str)
        var reg=/^\w{6,12}$/;
        var result2=reg.test(str);
        if(str==""){
            $("#oneb .pp").show().html("密码不能为空")
        } else if(result2==false){
            $("#oneb .pp").show().html("密码错误")
        }
    })
    $("#t2").click(function(){
        $("#oneb .pp").hide()
    })



    //验证码的随机改变
    $(".b1").click(function(){
        var code = Math.floor(Math.random()*9000)+1000;
        $(".i4").html(code);
    })
    //每刷新一次验证码变一次
    setTimeout(function(){
        var code = Math.floor(Math.random()*9000)+1000;
        $(".i4").html(code);
    },10)



    //验证验证码

    $("#y1").blur(function(){
        var str=$("#y1").val();
        var str1=$(".i4").html();
        if(str==""){
            $("#oneb .pp").show().html("验证码不能为空")
        } else if(str!=str1){
            $("#oneb .pp").show().html("验证码错误")
        }
    })
    $("#y1").click(function(){
        $("#oneb .pp").hide()
    })

    //都符合时
    $("#dd").click(function() {
        if ($("#t1").val() != "" && $("#t2").val() != "" && $("#y1").val() != "") {
            $(this).val("登录中....")
        } else {
            $("#oneb .pp").show().html("请检查内容是否正确")
        }
    })





})




