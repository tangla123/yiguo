/**
 * Created by Administrator on 2017/5/25 0025.
 */
$(function(){
    function getScroll() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop
        } else if (document.body.scrollTop) {      //兼容IE678
            scrollTop = document.body.scrollTop
        }
        return scrollTop;
    }

    window.onscroll = function () {
        //首先获得滚动的高度       scrollTop
//        document.documentElement.scrollTop
//        document.body.scrollTop //兼容IE678
        var result2 = getScroll();



        //左边搜索框背景颜色变化
        if(result2>800&&result2<1130){
            $(".ying1").show()
            $(".ying2").hide()
        }
        if(result2>1130||result2<800){
            $(".ying1").hide()
        }
        if(result2>1130&&result2<1660){
            $(".ying2").show()
            $(".ying3").hide()
        }
        if(result2>1660||result2<1130){
            $(".ying2").hide()
        }
        if(result2>1660&&result2<2190){
            $(".ying3").show()
            $(".ying4").hide()
        }
        if(result2>2190||result2<1660){
            $(".ying3").hide()
        }
        if(result2>2190&&result2<2720){
            $(".ying4").show()
            $(".ying5").hide()
        }
        if(result2>2720||result2<2190){
            $(".ying4").hide()
        }
        if(result2>2720&&result2<3250){
            $(".ying5").show()
            $(".ying6").hide()
        }
        if(result2>3250||result2<2720){
            $(".ying5").hide()
        }

        if(result2>3250&&result2<3780){
            $(".ying6").show()
            $(".ying7").hide()
        }
        if(result2>3780||result2<3250){
            $(".ying6").hide()
        }
        if(result2>3780&&result2<4310){
            $(".ying7").show()
        }
        if(result2>4310||result2<3780){
            $(".ying7").hide()
        }





    }
})