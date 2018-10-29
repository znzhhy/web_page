//banner start
//js:body加载完成后再执行函数
/*
window.onload=function () {
   ....
};
*/
//jq:body加载完成后再执行函数
/*
$(function () {
    ....
});
*/
$(function () {
    //获取对象
    var $pic=$(".pic li img");//获取图片对象
    var $btn=$(".btn li");//获取左右箭头
    var $tab=$(".tab li");//获取小圆点
    var len=$pic.length;//图片数量
    var $banner=$(".banner");//div对象
    //初始化
    $pic.eq(0).addClass("show");
    $tab.eq(0).addClass("active");

    //小圆点区域
    /*
    A点：removeClass("active");
    A图：removeClass("show");

    D点：addClass("active");
    D图：addClass("show");
    */
    var now=0;//定义一个变量指向当前显示图片和圆点的序列

    $tab.click(function () {
        // console.log($(this).index());
        var num=$(this).index();//当前点击对象的序列
        if(num!=now){
            change(num);
        }
    });

    //变化函数
    function change(num){
        $pic.eq(now).fadeOut(2000);
        $tab.eq(now).removeClass("active");
        now=num;
        $pic.eq(now).fadeIn(2000);
        $tab.eq(now).addClass("active");
    }

    //左右箭头
    $btn.click(function () {
        var num= now;//获取当前显现的对象序列
        console.log($(this).index());//0:左；1：右
        if($(this).index()){//右箭头
            num++;
            num%=len;
        }else{//左箭头
            num--;
            if(num<0){
                num=len-1;
            }
        }
        change(num);
    });

    //自动轮播
    var SI=setInterval(f,3000);
    function f() {
        var num=now;//获取当前显现的对象序列
        num++;
        num%=len;
        change(num);
    }

    //自动轮播：$obj.hover(onmouseenter,onmouseleaver)
    $banner.hover(function () {
        clearInterval(SI);
    },function () {
        SI=setInterval(f,3000);
    });
});

//banner end