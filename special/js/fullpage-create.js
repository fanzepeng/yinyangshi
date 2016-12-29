/**
 * Created by Administor on 2016/10/28.
 */
$(document).ready(function () {
    $("#main").fullpage({
        'navigation': true,
        "showActiveTooltip": true,
        'autoScrolling': false,
        'fitToSection': false,
        'navigationTooltips': ["首页", "剧情", "美术", "音乐", "玩法"],
        afterLoad: function(anchorLink,index){
            if(index==2){
                if(!$("#secondPage .com_title").hasClass("animate")){
                    $("#secondPage .com_title").addClass("animate");
                    $("#secondPage .sjg").addClass("show");
                }
            }
            if(index==3){
                if(!$("#thirdPage .com_title").hasClass("animate")) {
                    $("#thirdPage .com_title").addClass("animate");
                    $("#thirdPage .jietu").addClass("show");
                }
            }
            if(index==4){
                if(!$("#fourthPage .com_title").hasClass("animate")) {
                    $("#fourthPage .com_title").addClass("animate");
                    $("#fourthPage .shengyou").addClass("show");
                }
            }
            if(index==5){
                if(!$("#fifthPage .com_title").hasClass("animate")) {
                    $("#fifthPage .com_title").addClass("animate");
                    $("#fifthPage .tese").addClass("show");
                }
            }
        }
    });
});