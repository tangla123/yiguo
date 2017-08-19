/**
 * Created by Administrator on 2017/4/11 0011.
 */
    window.onload=function() {
        //左边搜索框
        var box = document.getElementById("box");

        function getScroll() {
            var scrollTop = 0;
            if (document.documentElement && document.documentElement.scrollTop) {
                scrollTop = document.documentElement.scrollTop
            } else if (document.body.scrollTop) {      //兼容IE678
                scrollTop = document.body.scrollTop
            }
            return scrollTop;
        }

        document.onscroll = function () {
            //首先获得滚动的高度       scrollTop
//        document.documentElement.scrollTop
//        document.body.scrollTop //兼容IE678
            var result = getScroll();

//        获取box
            if (result > 800) {
                box.style.display = "block"
            }else if(result<800){
                box.style.display="none"
            }


        };


//搜索框
        var txt = document.getElementById("txt");
        //console.log(typeof(txt));
        txt.onfocus=function () {
            txt.value="";
        };
        txt.onblur=function () {
           txt.value="输入关键字";
        };

       // 导航框
        var oneai=document.getElementById("oneai");
        var onea=document.getElementById("onea");
        var onebi=document.getElementById("onebi");
        var lib=document.getElementById("lib");
        var oneci=document.getElementById("oneci");
        var lic=document.getElementById("lic");
        //console.log(typeof(oneai))
        onea.onmouseover=function(){
            oneai.style.display="block"
        };
        onea.onmouseout=function(){
            oneai.style.display="none"
        };
        lib.onmouseover=function(){
            onebi.style.display="block"
        };
        lib.onmouseout=function(){
            onebi.style.display="none"
        };
        lic.onmouseover=function(){
            oneci.style.display="block"
        }
        lic.onmouseout=function(){
            oneci.style.display="none"
        }



//隐藏顶部搜索框
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



//轮播图
//        flag=0;
//        obj1=document.getElementById('threetu');
//        obj2=document.getElementsByClassName('bth');
//        time=setInterval("change()",2000)
//
//
//        document.getElementsByClassName("left").onclick=function(){
//          flag--;
//       }
//      document.getElementsByClassName("right").onclick=function(){
//          flag++;
//      }
//        obj1.onmouseover=function(){
//            clearInterval(time);
//        }
//        obj1.onmouseout=function(){
//            time=setInterval("change()",2000)
//        }
//        for(var i=0;i<obj2.length;i++){
//            obj2[i].onmouseover=function(){
//                change(this.innerHTML)
//                console.log(this.innerHTML)
//                clearInterval(time);
//            }
//
//            obj2[i].onmouseout=function(){
//                time=setInterval("change()",2000)
//
//            }
//        }
//        document.getElementById('first').src='4/banner2.jpg';
//        document.getElementById('second').src='4/banner3.jpg';
//        document.getElementById('third').src='4/banner4.jpg' ;
//        document.getElementById('four').src='4/banner5.jpg';
//
//    }
//
//function change(value){
//    if(value!=null){
//        flag=value-2;
//
//    }
//    if(flag<obj2.length-1){
//        flag++;
//    }else{
//        flag=0;
//    }
//
//    obj1.style.left=flag*(-1600)+'px';
//    for(var i=0;i<obj2.length;i++){
//        obj2[i].style.backgroundColor="yellow";
//    }
//    obj2[flag].style.backgroundColor="red";

        var oBanner=document.getElementById('three');//获取图片列表id
        var oTab=document.getElementById('threetu');//获取图片列表id
        var aPic=oTab.getElementsByTagName('li');//将图片li定义为数组
        var oList=document.getElementById('threeb');//获取编号列表id
        var aList=oList.getElementsByTagName('li');//将编号列表Li定义为数组
        var oBtn=document.getElementById('btn');
        var oPrev=document.getElementById("left");
        var oNext=document.getElementById("right");

        var index=0;
        var timer=null;

        //自动播放
        timer=setInterval(autoPlay,2000);//此处调用autoPlay函数时，（）不能带，带就出错

        //鼠标悬浮时，停止轮播
        oBanner.onmousemove=function()
        {
            oBtn.style.display='block';
            clearInterval(timer);
        }

        //鼠标离开，继续轮播
        oBanner.onmouseout=function()
        {
            oBtn.style.display='none';
            timer=setInterval(autoPlay,2000);//此处必须重新设置定时器
        }

        //点击左边按钮，上一页
        oPrev.onclick=function()
        {
            index=index-1;
            if(index<0)
            {
                index=aPic.length-1;
            }
            changePic(index);
        }

        //点击右边按钮，下一页
        oNext.onclick=function()
        {
            index=index+1;
            if(index==aPic.length)
            {
                index=0;
            }
            changePic(index);
        }

        //播放函数
        function autoPlay()
        {

            index=index+1;
            if(index==aPic.length)
            {
                index=0;
            }
            changePic(index);
        }

        //把数字与图片对应起来
        for(var i=0;i<aList.length;i++)
        {
            aList[i].onmouseover=function()
            {
                clearInterval(timer);
                index=this.innerText-1;
                changePic(index);
            }
        }

        //图片、编号切换
        function changePic(curIndex)
        {
            for(var i=0;i<aPic.length;i++)
            {
                aPic[i].style.display='none';
                aList[i].className='';
            }
            aPic[curIndex].style.display="block";
            aList[curIndex].className="on";
        }







        //TOP
        $(window).scroll(function(){
//        $(window).scrollTop()获取或设置匹配元素的滚动条的垂直高度位置
//        console.log($(document).scrollTop());
            var scrollTop=$(document).scrollTop();
//        console.log(scrollTop);
            if(scrollTop>500){
                $(".op").show(1000);
            }else{
                $(".op").hide(1000);
            }
        })
//    点击TOP返回顶部
        $(".op").click(function(){
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        })







        //头部地址
        $(".di1 span").mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active")
            $(".dc>.di2").hide().eq($(".di1 span").index(this)).show();
        })

        //在线客服
        $(".ke").click(function(){
            $(".fke").show()
        })
        $(".an").click(function(){
            $(".fke").hide()
        })
        $(".fke button").click(function(){
            var a=$("#in").val();
            var b=$(".fke  div:nth-child(2)").html()
            $(".fke  div:nth-child(2)").html(b+"<br/>"+a);
            $("#in").val("")
        })




    };


