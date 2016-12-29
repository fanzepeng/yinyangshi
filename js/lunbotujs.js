function lunbo(){    //1. 找对象
    var box = document.getElementById("lunbobox");
    var ad = box.children[0];
    var ul = ad.children[0];
    var arr = document.getElementById("arr");
    var leftArr = document.getElementById("left");
    var rightArr = document.getElementById("right");
    var imgWidth = ad.offsetWidth;
    var lis = ul.children;

    //2. 鼠标经过盒子，显示箭头
    box.onmouseover = function () {
        arr.style.display = "block";
    }

    //3. 鼠标离开盒子，隐藏箭头
    box.onmouseout = function () {
        arr.style.display = "none";
    }

    var index = 0;
    //4. 点击右箭头，图片左移
    rightArr.onclick = function () {
        //让图片已经是最后一张的时候，赶紧换回来第一张
        if (index == lis.length - 1) {
            index = 0;
            ul.style.left = "0px";
        }
        index++;
        var target = -index * imgWidth;
        animate(ul, {left:target});

    };

    //5. 点击左箭头，图片右移
    leftArr.onclick = function () {
        if (index == 0) {
            index = lis.length - 1;
            ul.style.left = -index * imgWidth+"px";
        }
        index--;
        var target = -index * imgWidth;
        animate(ul,{left: target});
    }};