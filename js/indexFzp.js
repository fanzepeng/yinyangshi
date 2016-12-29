/**
 * Created by lenovo on 2016/10/25.
 */
$(function () {

    function getlight(){
        $("#ewm-light").animate({"top":150},3000, function () {
            $("#ewm-light").animate({"top":49},3000, function () {
                getlight();
            });
        });
    }
    getlight();
    $("#fc").animate({"transform":30},10)
    $("#slogan1").animate({"top":130},2000);
    $("#role").animate({"top":145},2000)
    $("#slogan2").animate({"top":255},2000, function () {
        $("#logo-btn").animate({"left":90,"opacity":1},2000)
        $("#home-btn").animate({"right":180,"opacity":1},2000)
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
    //    宣传网页部分
    var streamer=document.getElementById("streamer");
    var sand=document.getElementById("sand");
    var sands=sand.children;
    window.onscroll= function () {
//            头部红色小广告
        var scrolltop=scroll().scrollTop;
        if(scrolltop>55){
            streamer.style.position="fixed";

        }else{
            streamer.style.position="absolute";

        }

//            悬浮沙子
        for(var i=0;i<sands.length;i++){
            if(scrolltop>55){
                sands[i].style.position="fixed";
                sands[0].style.left=-scrolltop*0.01+"px";
                sands[1].style.left=-scrolltop*0.01+"px";
                sands[2].style.left=-scrolltop*0.01+"px";
                sands[3].style.right=-scrolltop*0.01+"px";
                sands[4].style.right=-scrolltop*0.01+"px";
                sands[5].style.right=-scrolltop*0.01+"px";
                sands[6].style.right=-scrolltop*0.01+"px";
            }else{
                sands[0].style.position="absolute";
                sands[1].style.position="absolute";
                sands[3].style.position="absolute";
                sands[4].style.position="absolute";
                sands[5].style.position="absolute";
            }

        }
    }
    function animate(obj,json,fn) {
        if (obj.timer) {
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function () {
            var flag=true;
            for(var k in json){
                if(k=="opacity"){
                    var attr=k;
                    var target=json[k];
                    var leader = getStyle(obj,attr);
                    leader=parseFloat(leader)||0;
                    leader=leader*100;
                    target=target*100;
                    var step = (target - leader) / 40;//使得运动的速度是变化的
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[attr] = leader/100;
                    if (target != leader) {
                        flag=false;
                    }
                }else if(k==="zIndex"){
                    obj.style.zIndex=json[k];
                }else{
                    var attr=k;
                    var target=json[k];
                    var leader = getStyle(obj,attr);
                    leader=parseInt(leader)||0;
                    var step = (target - leader) / 10;//使得运动的速度是变化的
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[attr] = leader + "px";
                    if (target != leader) {
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
        }, 15)
    }

    function scroll(){
        return {
            scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
            scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
        };
    }


}
