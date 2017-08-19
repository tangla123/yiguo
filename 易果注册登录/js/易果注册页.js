/**
 * Created by Administrator on 2017/4/14 0014.
 */
    //验证码变换

//每刷新一次验证码变一次
setTimeout(function(){
    var code = Math.floor(Math.random()*9000)+1000;
    $("#iq").html(code);
},10);


window.onload=function(){

    $(".txta").click(function(){
        var code = Math.floor(Math.random()*9000)+1000;
        $("#iq").html(code);
    });
//验证码
    var t1=document.getElementById("t1");
    var span1=document.getElementById("span1");
    var iq=document.getElementById("iq");
    var d1 = t1.value;
    //console.log(iq1)
    t1.onblur=function() {
        var iq1=iq.innerHTML;
        //console.log(d1)
        var reg = /^\d{4}$/;
        var result = reg.test(d1);
        if (d1=="") {
            span1.innerHTML = "验证码不能为空"
        } else if(iq1!=d1||result!=true){
            span1.innerHTML = "验证码错误"
        }
        t1.onfocus=function(){
            span1.innerHTML=""
        }
    }

    //手机号
    var t2=document.getElementById("t2");
    var span2=document.getElementById("span2")
    var d2 = t2.value;
    t2.onblur=function() {
        var reg = /^\d{11}$/
        var result2 = reg.test(d2)
        if (d2 == "") {
            span2.innerHTML = "手机号不能为空"
        } else if(result2 != true){
            span2.innerHTML = "手机格式错误"
        }
        t2.onfocus=function(){
            span2.innerHTML=""
        }
    }

    //手机验证码
    var t3=document.getElementById("t3");
    var span3=document.getElementById("span3")
    var d3 = t3.value;
    t3.onblur=function() {
        var reg = /^\d{6}$/;
        var result = reg.test(d3)
        if (d3== "") {
            span3.innerHTML = "验证码不能为空"
        } else if(result != true){
            span3.innerHTML = "验证码错误"
        }
        t3.onfocus=function(){
            span3.innerHTML=""
        }
    }
    //获取验证码的倒计时
    $(".txtc").click(function(){
        //防止二次点击
        if($(this).hasClass("disabled")){
            return;
        }
        //验证手机号不能为空
        //手机号格式
        var d21 = $("#t2").val();
        var reg = /^\d{11}$/
        var result21 = reg.test(d21)
        if (d21 == "") {
            $("#span2").html("手机号不能为空")
        } else if(result21 != true){
            $("#span2").html("手机格式错误")
        }
        $("#t2").focus(function(){
            $("#span2").html("")
        })
       if(result21 == true){
           var num=60;
           var timer=setInterval(function () {
               num--;
               if(num<1){
                   clearInterval(timer);
                   $(".txtc").val("获取验证码");
                   $(".txtc").removeClass("disabled");
               }else{
                   $(".txtc").val("还剩"+num+"秒");
                   $(".txtc").addClass("disabled");
               }
           },1000)
       }
    })



//设置密码
    var t4=document.getElementById("t4");
    var span4=document.getElementById("span4")
    var d4 = t4.value;
    t4.onblur=function() {
        var reg = /^\w{6,16}$/;
        var result = reg.test(d4)
        if (d4 == "") {
            span4.innerHTML = "密码不能为空"
        } else if(result!= true){
            span4.innerHTML = "密码格式错误"
        }
        t4.onfocus=function(){
            span4.innerHTML="密码6-16位"
        }
    }

//确认密码
    var t5=document.getElementById("t5");
    var span5=document.getElementById("span5")
    var d5 = t5.value;
    t5.onblur=function() {
        var d4=t4.value;
        var d51=t5.value;
        var reg = /^\w{6,16}$/;
        var result = reg.test(d5)
        if (result == true) {
            span5.innerHTML = ""
        } else if(d51!=d4){
            span5.innerHTML = "密码错误"
        }else if(d5==""){
            span5.innerHTML = "请再次确认密码"
        }
        t5.onfocus=function(){
            span5.innerHTML=""
        }
    }
//邀请码
    var t6=document.getElementById("t6");
    var span6=document.getElementById("span6")
    var d6 = t6.value;
    t6.onfocus=function() {
        var reg = /^\w{6}$/;
        var result = reg.test(d6)
        span6.style.color="#7b7b7b"
        span6.innerHTML="邀请码可为空"
    }
    t6.onblur=function(){
        span6.innerHTML=""
    }



    //同意
var check=document.getElementById("t7");
    var txte=document.getElementById("txte");
   check.onclick=function(){
       if(!this.checked){
           txte.style.background="#ccc"
       }
       if(this.checked){
           txte.style.background="green"
       }
   }
//注册
$("#txte").click(function(){
    if(d1!=""&&d2!=""&&d3!=""&&d4!=""&&d5!=""){
        $("#txte").val("正在注册....")
    }
    if(d1==""){
        $("#span1").html("验证码错误")
    }
    if(d2==""){
        $("#span2").html("手机号错误")
    }
    if(d3==""){
        $("#span3").html("验证码错误")
    }
    if(d4==""){
        $("#span4").html("密码错误")
    }
    if(d5==""){
        $("#span5").html("密码错误")
    }
    $("#t1").focus(function(){
        $("#span1").html("")
    })
    $("#t2").focus(function(){
        $("#span2").html("")
    })
    $("#t3").focus(function(){
        $("#span3").html("")
    })
    $("#t4").focus(function(){
        $("#span4").html("")
    })
    $("#t5").focus(function(){
        $("#span5").html("")
    })

})



    }