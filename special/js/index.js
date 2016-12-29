/**
 * Created by Administor on 2016/10/26.
 */
window.onload = function () {

    $("#reload").addClass("hide");
    $(".topBar").css("display","block");
    $(".main").css("display","block")
    $("header").css("display","block");
    $("#firstPage").addClass("loaded");
    $(".section").addClass("fp-auto-height");

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

}
$(function () {
    $(".com_tab").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var idx=$(this).index();
        $(this).parent().siblings(".js_control").eq(idx).addClass("show").siblings().removeClass("show");
    });
});

//第二个页面的相关函数
$(function () {
    var liWidth = 309;
    var flag=0;
    $(".zj .commonTab .tab1").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".zj .zj_container").show();
        $(".zj .ss_container").hide();
    });
    $(".zj .commonTab .tab2").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".zj .ss_container").show();
        $(".zj .zj_container").hide();
    });
    //轮播图
    $("#secondPage .ss_nav li").mouseenter(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var idx = $(this).index();
        flag = idx;
        var target = -idx*liWidth;
        $("#secondPage .ss_list").stop().animate({"left":target},500);
    });
    //左箭头点击事件
    var length = $("#secondPage .ss_nav li").length;
    $("#secondPage .ss_nav .prev").click(function () {
        flag = flag==0?length-1:--flag;
        var target = -flag *liWidth;
        $("#secondPage .ss_nav li").eq(flag).addClass("on").siblings().removeClass("on");
        $("#secondPage .ss_list").stop().animate({"left":target},500);
    });
    //右箭头点击事件
    $("#secondPage .ss_nav .next").click(function () {
        flag = flag==length-1?flag=0:++flag;
        var target = -flag *liWidth;
        $("#secondPage .ss_nav li").eq(flag).addClass("on").siblings().removeClass("on");
        $("#secondPage .ss_list").stop().animate({"left":target},500);
    });
})

//第三个页面相关函数
//截图页面
$(function () {
   $("#thirdPage .jietu .pic_btn").click(function () {
       $(this).addClass("active").siblings().removeClass("active");
       var idx= $(this).index();
       $("#thirdPage .jietu .pic_item").eq(idx).show().siblings().hide();
   });
    var btnWidth = 72;
    var flag=0;
    var length = $("#thirdPage .pic_nav .pic_btn").length;
   $("#thirdPage .pic_nav .prev").click(function () {
       flag = flag==0?length-5:--flag;
       var target = -flag*btnWidth;
       $("#thirdPage .pic_nav .pic_btn_container").stop().animate({"left":target},500);
   });
    $("#thirdPage .pic_nav .next").click(function () {
        flag = flag==length-5?0:++flag;
        var target = -flag*btnWidth;
        $("#thirdPage .pic_nav .pic_btn_container").stop().animate({"left":target},500);
    });
});
//原画模块
$(function () {
    var flag =0;
    var btnWidth = 72;
    var length = $("#thirdPage .yuanhua .yh_btn").length;
    var arr=["images/yh1.png","images/yh2.png","images/yh3.png","images/yh4.png","images/yh5.png","images/yh6.png"]
    $("#thirdPage .yuanhua .yh_btn").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        var idx = $(this).index();
        $("#thirdPage .yuanhua .big_pic").attr("src",arr[idx]);
    });
    $("#thirdPage .yuanhua_nav .prev").click(function () {
        flag = flag==0?length-5:--flag;
        var target = -flag*btnWidth;
        $("#thirdPage .yuanhua_nav .yh_btn_container").stop().animate({"left":target},500);
    });
    $("#thirdPage .yuanhua_nav .next").click(function () {
        flag = flag==length-5?0:++flag;
        var target = -flag*btnWidth;
        $("#thirdPage .yuanhua_nav .yh_btn_container").stop().animate({"left":target},500);
    });
    $(".to_left").mouseenter(function () {
        var ml =parseInt($(".yuanhua_box .big_pic").css("marginLeft"));
        var t=(1000+ml)/50*1000;
        $(".yuanhua_box .big_pic").stop().animate({"marginLeft":-1000},t);
    }).mouseleave(function () {
        $(".yuanhua_box .big_pic").stop();
    });
    $(".to_right").mouseenter(function () {
        var ml =parseInt($(".yuanhua_box .big_pic").css("marginLeft"));
        var t=(-530-ml)/50*1000;
        $(".yuanhua_box .big_pic").stop().animate({"marginLeft":-530},t);
    }).mouseleave(function () {
        $(".yuanhua_box .big_pic").stop();
    });


    $("#thirdPage .zuoping .tab1").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".cosplay_container").show();
        $(".tongrenhui_container").hide();
    });
    $("#thirdPage .zuoping .tab2").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".cosplay_container").hide();
        $(".tongrenhui_container").show();
    });

})

//第四个页面函数
//主角声优
$(function () {
    $("#fourthPage .shengyou .tab1").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".zj_container").show();
        $(".ss_container").hide();
    });
    $("#fourthPage .shengyou .tab2").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".zj_container").hide();
        $(".ss_container").show();
    });
});

//video部分
$(function () {
    $(".close_video").click(function () {
        $(".mask").removeClass("show");
        $(".mask video")[0].pause();
    });
    $("#firstPage .video_btn").click(function () {
        $(".mask").addClass("show");
        $(".mask video")[0].load();
        $(".mask video")[0].play();
    })
})
