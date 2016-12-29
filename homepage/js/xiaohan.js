/**
 * Created by HUCC on 2016/7/27.
 */
//让任意对象移动到任意目标
function animate(element, target) {
    //如果timer存在，就把timer清除
    if (element.timer) {
        clearInterval(element.timer);
    }
    element.timer = setInterval(function () {

        //leader = leader + step;
        var leader = element.offsetLeft;
        var step = 15;
        if (target < leader) {
            //如果目标在当前位置的左侧，需要向左移动
            step = -step;
        }
        leader = leader + step;

        //不能让盒子一直跑下去
        //当剩下的长度不足一步的时候，就不走了
        if (Math.abs(target - element.offsetLeft) >= Math.abs(step)) {
            element.style.left = leader + "px";
        } else {
            clearInterval(element.timer);
            //手动调整距离
            element.style.left = target + "px";
        }
    }, 15);
}