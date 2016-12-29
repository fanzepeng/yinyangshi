/**
 * Created by DELL on 2016/10/18.
 */
function scroll(){
    return {
        scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    };
}
