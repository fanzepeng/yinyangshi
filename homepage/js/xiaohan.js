/**
 * Created by HUCC on 2016/7/27.
 */
//����������ƶ�������Ŀ��
function animate(element, target) {
    //���timer���ڣ��Ͱ�timer���
    if (element.timer) {
        clearInterval(element.timer);
    }
    element.timer = setInterval(function () {

        //leader = leader + step;
        var leader = element.offsetLeft;
        var step = 15;
        if (target < leader) {
            //���Ŀ���ڵ�ǰλ�õ���࣬��Ҫ�����ƶ�
            step = -step;
        }
        leader = leader + step;

        //�����ú���һֱ����ȥ
        //��ʣ�µĳ��Ȳ���һ����ʱ�򣬾Ͳ�����
        if (Math.abs(target - element.offsetLeft) >= Math.abs(step)) {
            element.style.left = leader + "px";
        } else {
            clearInterval(element.timer);
            //�ֶ���������
            element.style.left = target + "px";
        }
    }, 15);
}