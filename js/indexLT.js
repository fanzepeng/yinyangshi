/**
 * Created by lenovo on 2016/10/25.
 */
//   活动处的白光效果1
$("#imgbaixian1").mouseenter(function(){
    $("#line-t1").animate({"height":1,"width":300},100);
    $("#line-r1").animate({"height":130,"width":1},150);
    $("#line-b1").animate({"height":1,"width":300},200);
    $("#line-l1").animate({"height":130,"width":1},250);
});
$("#imgbaixian1").mouseleave(function(){
    $("#line-t1").animate({"height":0,"width":0},100);
    $("#line-r1").animate({"height":0,"width":0},100);
    $("#line-b1").animate({"height":0,"width":0},100);
    $("#line-l1").animate({"height":0,"width":0},100);
});
//    活动处的白光效果2
$("#imgbaixian2").mouseenter(function(){
    $("#line-t2").animate({"height":1,"width":300},100);
    $("#line-r2").animate({"height":130,"width":1},150);
    $("#line-b2").animate({"height":1,"width":300},200);
    $("#line-l2").animate({"height":130,"width":1},250);
});
$("#imgbaixian2").mouseleave(function(){
    $("#line-t2").animate({"height":0,"width":0},100);
    $("#line-r2").animate({"height":0,"width":0},100);
    $("#line-b2").animate({"height":0,"width":0},100);
    $("#line-l2").animate({"height":0,"width":0},100);
});
//    活动处的白光效果3
$("#imgbaixian3").mouseenter(function(){
    $("#line-t3").animate({"height":1,"width":300},100);
    $("#line-r3").animate({"height":130,"width":1},150);
    $("#line-b3").animate({"height":1,"width":300},200);
    $("#line-l3").animate({"height":130,"width":1},250);
});
$("#imgbaixian3").mouseleave(function(){
    $("#line-t3").animate({"height":0,"width":0},100);
    $("#line-r3").animate({"height":0,"width":0},100);
    $("#line-b3").animate({"height":0,"width":0},100);
    $("#line-l3").animate({"height":0,"width":0},100);
});


//    循环加入反馈的8个图片
var hotbox_lt=document.getElementById("hotbox-lt");
var links_lt=hotbox_lt.children;
for (var i=0;i<links_lt.length;i++){
    links_lt[i].style.backgroundImage="url(images/"+i+".png)";
}

//    活动处
//    找对象
var pic1=document.getElementById("pic1");
var img1=pic1.children[0];
var pic2=document.getElementById("pic2");
var img2=pic2.children[0];
var pic3=document.getElementById("pic3");
var img3=pic3.children[0];

//点击活动出现的遮罩开始
var pic1=document.getElementById("pic1");
var huodong_box_content=document.getElementById("huodong-box_content");
var content_haoli_box=document.getElementById("content-haoli-box");
var cha_huodpng=document.getElementById("cha_huodpng");
pic1.onclick=function(){
    huodong_box_content.style.display="block";
    content_haoli_box.style.display="block";
}
cha_huodpng.onclick=function(){
    huodong_box_content.style.display="none";
    content_haoli_box.style.display="none";
}
//下面的轮播图
var datas = [
    {
        "width": 400,
        "top": 20,
        "left": 50,
        "opacity": 0.2,
        "zIndex": 2
    },//0
    {
        "width": 600,
        "top": 70,
        "left": 0,
        "opacity": 0.8,
        "zIndex": 3
    },//1
    {
        "width": 800,
        "top": 100,
        "left": 200,
        "opacity": 1,
        "zIndex": 4
    },//2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    },//3
    {
        "width": 400,
        "top": 20,
        "left": 750,
        "opacity": 0.2,
        "zIndex": 2
    }//4
];//其实就是一个配置单 规定了每张图片的大小位置层级透明度


//1. 找对象
var wrap = document.getElementById("wrap");
var slide = wrap.children[0];

var ul = slide.children[0];
var lis = ul.children;
var arrow = document.getElementById("arrow");
var leftArr = document.getElementById("left-lunbo");
var rightArr = document.getElementById("right-lunbo");

var flag = true;//把节流阀打开了


//2. 让箭头显示隐藏
//2.1 鼠标经过盒子的时候，让箭头渐渐的显示（opacity）
wrap.onmouseover = function () {
    animate(arrow, {"opacity": 1});
}
// 2.2 鼠标离开盒子的时候，让箭头渐渐的隐藏
wrap.onmouseout = function () {
    animate(arrow, {"opacity": 0});
}

//3. 各就各位，分配位置
function assign() {
    for (var i = 0; i < lis.length; i++) {
        animate(lis[i], datas[i], function () {
            //alert("动画执行完了");
            //动画执行完了，就把节流阀打开
            flag = true;
        });
    }
}
//一进来就分配位置
assign();

//4. 点击右盒子,修改配置单，
rightArr.onclick = function () {

    //我查看节流阀有没有打开，如果打开了才执行
    if (flag) {

        //把节流阀给关了,等动画执行完了才把节流阀打开
        flag = false;

        //让第一个配置跑到最后一个配置

        datas.unshift(datas.pop());
        //重新分配位置
        assign();
    }

    //不能在这里打开节流阀
    //flag = true;


}

//节流阀的目的就是，在执行动画的时候，不去执行下一个动画
//不要让动画

//5. 点击左盒子
leftArr.onclick = function () {
    //让最后一个配置跑到第一个配置
    if(flag){
        datas.push(datas.shift());
        assign();
        flag=false;
    }
}

////点击活动处跳出轮播图
function a(){
    var hotbox_lt=document.getElementById("hotbox-lt");
    var newshot_lt=hotbox_lt.children;
    var lunbobox=document.getElementById("lunbobox");
    var lunbozhezhao=document.getElementById("lunbozhezhao");
    var lunbotu_bigbox=document.getElementById("lunbotu-bigbox");
    for (var i=0;i<newshot_lt.length;i++){
        newshot_lt[i].onclick=function(){
            //lunbobox.style.display="block";
            lunbozhezhao.style.display="block";
            lunbotu_bigbox.style.display="block";
            lunbo();
        }
    }
};a();

//点击叉关闭
var lunbozhezhao=document.getElementById("lunbozhezhao");
var lunbotu_bigbox=document.getElementById("lunbotu-bigbox");
var chacha_box=document.getElementById("chacha-box");
chacha_box.onclick=function(){
    lunbozhezhao.style.display="none";
    lunbotu_bigbox.style.display="none";
};