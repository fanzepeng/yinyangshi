
    //结尾动画
$(function () {
    //鼠标移动到hide-erweima上时，上面的盒子向上，下面的盒子向下，离开时，回到原来的状态
    $(".footer-middle").mouseenter(function () {
        $(".hide-erweima").css("display","block");
        $(".footer-middle").animate({"top":200});
        $(".footer-bottom").animate({"top":440});
    });
    $(".hide-erweima").mouseleave(function () {
        $(".hide-erweima").css("display","none");
        $(".footer-middle").animate({"top":218});
        $(".footer-bottom").animate({"top":344});
    });
})
//yubo的动画
$(function() {
    var w=parseInt($(".tongren_body").css("width"));
    // 1 给所有的导航栏菜单绑定鼠标移上来的事件
    $(".tongren_title > li").mouseenter(function() {
        // 2 给当前元素添加类，给它的兄弟元素移除类
        $(this).addClass("active").siblings("li").removeClass("active");
//                        获取到当前元素的索引号
        var index = $(this).index();
        $(".tongren_bodybox").stop().animate({
            left: -w * index
        });
    });
});
window.onload = function () {
    function scrollText() {
        var tb_right = document.getElementById('topBar_right');
        var tb_a = tb_right.children[0];
        var arr = ["网易秀品商城", "安卓充值9.8折", "网易严选大牌直供"];
        var i = 0;
        setText();
        function setText() {
            setTimeout(function () {
                tb_a.innerHTML = arr[i % 3];
                tb_a.className = "none";
                i++;

                setTimeout(function () {
                    tb_a.className = "fade2";
                    setTimeout(function () {
                        tb_a.className = "fade";
                        setText();
                    }, 4000);
                }, 100);
            }, 600);
        }
    }
    scrollText();

    function showTopMenu() {
        var topMenu = document.getElementById("topBar_menu");
        topMenu.onmouseover = function () {
            topMenu.style.height = "505px";
        }
        topMenu.onmouseout = function () {
            topMenu.style.height = "55px";
        }
    }
    showTopMenu();

    function showCosPlayer() {
        var cosPlayer = document.getElementById("cosplayer");
        var menu_more = document.getElementById("menu_more");
        var menuBar = document.getElementById("menuBar");

        cosPlayer.onmouseover = function () {
            menu_more.style.height = "174px";
            menu_more.children[0].style.opacity = 1;
            menuBar.style.background = "rgba(255,255,255,.9)";
        }
        menu_more.onmouseover = function () {
            menu_more.style.height = "174px";
            menu_more.children[0].style.opacity = 1;
            menuBar.style.background = "rgba(255,255,255,.9)";
        }
        cosPlayer.onmouseout = function () {
            menu_more.style.height = 0;
            menu_more.children[0].style.opacity = 0;
            if(menuBar.style.position=="absolute"){
                menuBar.style.background = "rgba(255,255,255,0)";
            };

        }
        menu_more.onmouseout = function () {
            menu_more.style.height = 0;
            menu_more.children[0].style.opacity = 0;
            if(menuBar.style.position=="absolute"){
                menuBar.style.background = "rgba(255,255,255,0)";
            };
        }
    }
    showCosPlayer();

    window.onscroll = function (){
        var menuBar = document.getElementById("menuBar");
        var leftPart = menuBar.children[0];
        var scrollTop = scroll().scrollTop;
        var topBar = document.getElementById("topBar");
        var b_logo = document.getElementById("b_logo");

        if(scrollTop>topBar.offsetHeight){
            menuBar.style.position = "fixed";
            menuBar.style.background = "rgba(255,255,255,0.9)";
            leftPart.style.opacity = "1";
            b_logo.style.transform="scale(0)";
            b_logo.style.opacity="0";
        }else{
            menuBar.style.position = "absolute";
            menuBar.style.background = "rgba(255,255,255,0)";
            leftPart.style.opacity = "0";
            b_logo.style.transform="scale(1)";
            b_logo.style.opacity="1";
        }
    }

    function startAnimate(){
        var banner = document.getElementById("banner");
        var divs = banner.children;
        for(var i=0;i<divs.length-1;i++){
            divs[i].className= divs[i].className+" animate";
        }
    }
    startAnimate();

    function openSeverPop(){
        var openPop = document.getElementById("open_pop");
        var serverPop = document.getElementById("sever_pop");
        openPop.onclick = function(){
            serverPop.style.opacity = "1";
            serverPop.style.transform="scale(1)";
        }
        serverPop.onclick = function(){
            serverPop.style.opacity = "0";
            serverPop.style.transform="scale(0)";
        }
    }
    openSeverPop();

    //功能1：左边轮播图
    (function(){
        //1.找对象
        var div=document.getElementById("img-box");
        var ul=div.children[0];
        var ulLis=ul.children;
        var ol=div.children[1];
        var imgWidth=div.offsetWidth;
        //2.动态创建小方块
        for(var i=0;i<ulLis.length;i++){
            var li=document.createElement("li");
            ol.appendChild(li);
        }
        //3.生成假图片
        var clone=ulLis[0].cloneNode(true);
        ul.appendChild(clone);

        //4.鼠标移动到小方块，显示对应的图片
        var olLis=ol.children;
        ol.children[0].className="current";
        for(var i=0;i<olLis.length;i++){
            olLis[i].index=i;
            olLis[i].onmouseover= function () {
                for(var i=0;i<olLis.length;i++){
                    olLis[i].className="";
                }
                this.className="current";
                var idx=this.index;
                var target=-idx*imgWidth;
                animate(ul,target);
                pic=square=idx;
            }
        }

        div.onmouseover = function () {
            clearInterval(timer);
        }
        div.onmouseout = function () {
            timer = setInterval(move,2000);
        }

        //5.加定时器，图片自动跳转
        var square = 0;
        var pic = 0;
        timer = setInterval(move, 2000);
        function move() {
            if (pic == ulLis.length -1) {
                ul.style.left = "0px";
                pic = 0;
            }
            pic++;
            animate(ul, -pic * imgWidth);
            if (square == olLis.length - 1) {
                square = 0;
            } else {
                square++;
            }
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].className = "";

            }
            olLis[square].className = "current";
        }
    })();
    //功能2：点击title部分，内容部分移动
    (function (){
        //1.找对象
        var uls=document.getElementById("title");
        var lis=uls.children;//伪数组
        var divs=document.getElementById("content");
        var ulList=divs.children;//伪数组
        var width=ulList[0].offsetWidth;

        //2.给上边的li注册点击事件，排他，让下面的内容显示
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onmouseover= function () {
                for(var i=0;i<lis.length;i++) {
                    var l = this.index;
                    animate(divs,-l*width);
                }

                this.children[0].children[2].style.display="block";
            }



            lis[i].onmouseout= function () {
                this.children[0].children[2].style.display="none";
            }
        }
    })();

    //zaihuaihai的函数
    (function (){
        var strategy=document.getElementById("strategy");
        var strategyTabs=strategy.children[0];
        var as=strategyTabs.getElementsByTagName("a");
        var strategyList=strategy.children[1];
        var uls=strategyList.children;
        for(var i=0;i<as.length;i++){
            as[i].index=i;
            as[i].onmouseover= function () {
                for(var i=0;i<uls.length;i++){
                    animate_z(uls[i],{"opacity":0,"zIndex":1});
                }
                var idx=this.index;
                animate_z(uls[idx],{"opacity":1,"zIndex":3});
                for(var i=0;i<uls.length;i++){
                    var clname = uls[i].className;
                    uls[i].className = clname.replace("show","");
                }
                uls[idx].className +=" show";
            }
        }

    })();
}
//给封装函数添加opacity和zIndex属性
function animate_z(obj,json,fn){
    if(obj.timer){
        clearInterval(obj.timer);
    }
    obj.timer=setInterval(function () {

        var flag=true;
        for(var k in json){
            //直接就是判断属性是不是opacity是不是zIndex
            if(k=="opacity"){
                var attr=k;
                var target=json[k];
                var leader=getStyle(obj,attr);
                //改动二
                leader=leader*100;
                target=target*100;

                leader=parseFloat(leader)||0;//改动一
                var step=(target-leader)/1;

                if(step>0){
                    step=Math.ceil(step);
                }else{
                    step=Math.floor(step);
                }

                leader=leader+step;
                obj.style[attr]=leader/100;//改动三

                if(target!=leader){
                    flag=false
                }

                //给函数添加zIndex
            }else if(k==="zIndex"){
                obj.style.zIndex=json[k];
            }else{
                var attr=k;
                var target=json[k];
                var leader=getStyle(obj,attr);
                leader=parseInt(leader)||0;
                var step=(target-leader)/10;

                if(step>0){
                    step=Math.ceil(step);
                }else{
                    step=Math.floor(step);
                }

                leader=leader+step;
                obj.style[attr]=leader+"px";

                if(target!=leader){
                    flag=false;
                }
            }

        }

        if(flag){
            clearInterval(obj.timer);

            if(fn){
                fn();
            }
        }
    },1);

}

function getStyle(obj,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentSrc[attr];
    }
}

