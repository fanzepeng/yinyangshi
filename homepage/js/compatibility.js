/**
 * Created by Administor on 2016/10/7.
 */


//--------------------Compatibility problem 1-------------------------
//旧版本的firefox浏览器不支持innerText
//IE6，7，8不支持textContent

/**
 * 获取元素的innerText值
 * @param element
 * @returns {string}
 */
function getInnerText(element){
    if(typeof element.innerText === "string"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}

/**
 * 设置元素的innerText值
 * @param element
 * @param value
 */
function setInnerText(element,value){
    if(typeof element.innerText === "string"){
        element.innerText = value;
    }else{
        element.textContent = value;
    }
}

//--------------------Compatibility problem 2-------------------------
//节点部分的兼容性问题
//nextElementSibing : IE 6,7,8不支持，需要通过nextSibling来找
//previousElementSibling:IE 6,7,8不支持，需要通过previousSibling来找
//firstElementChild,lastElementChild

/**
 * 获取下一个兄弟元素，兼容IE6，7，8
 * @param element
 * @returns {*}
 */
function getNextElement(element){
    //能力检测
    if(element.nextElementSibling){
        //说明是现代浏览器
        return element.nextElementSibling;
    }else{
        //不支持
        //先找到下一个节点
        var node = element.nextSibling;
        //判断是否是元素，如果不是继续往下找，直到找到下一个元素节点
        while(node&&1!==node.nodeType){
            node = node.nextSibling;
        }
        return node;
    }
}

/**
 * 获取上一个兄弟元素，兼容IE6，7，8
 * @param element
 * @returns {*}
 */
function getPreviousElement(element){
    //能力检测
    if(element.previousElementSibling){
        //说明是现代浏览器
        return element.previousElementSibling;
    }else{
        //不支持
        //先找到上一个节点
        var node = element.previousSibling;
        //判断是否是元素，如果不是继续往上找，直到找到上一个元素节点
        while(node&&1!==node.nodeType){
            node = node.previousSibling;
        }
        return node;
    }
}

/**
 * 获取第一个子元素
 * @param element
 * @returns {*}
 */
function getFirstElement(element){
    //能力检测
    if(element.firstElementChild){
        ////说明是现代浏览器
        return element.firstElementChild;
    }else{
        //不支持
        //先找第一个节点
        var node = element.firstChild;
        //判断是否是元素，如果不是继续往下找，直到找到第一个元素节点
        while(node&&1!==node.nodeType){
            node=node.nextSibling;
        }
        return node;
    }
}

/**
 * 获取最后一个子元素
 * @param element
 * @returns {*}
 */
function getLastElement(element){
    //能力检测
    if(element.lastElementChild){
        //说明是现代浏览器
        return element.lastElementChild;
    }else{
        //不支持
        //先找到最后一个节点
        var node = element.lastChild;
        //判断是否是元素，如果不是继续往上找，直到找到最后一个元素节点
        while(node&&1!==node.nodeType){
            node=node.previousSibling;
        }
        return node;
    }
}

//--------------------Compatibility problem 3-------------------------
//获取滚动条的滚动高度和宽度兼容性问题
//现代浏览器window.pageYOffset
//IE 678 document.documentElement.scrollTop

/**
 *
 * @returns {{}}返回一个对象，获取滚动条的滚动高度和宽度
 */
function scroll(){
    return  {
        scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        scrollLeft:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    };
}

//--------------------Compatibility problem 4-------------------------
//获取元素的当前样式
//IE678支持currentStyle
//现代浏览器支持getComputedStyle

/**
 *
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj,attr){
    return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}

//--------------------Compatibility problem 5-------------------------
//获取网页可视区宽高

/**
 *
 * @returns {{width: number, height: number}}
 */
function client(){
    return {
        width : window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,
        height : window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
    }
}

//--------------------Compatibility problem 6-------------------------
//获取文档内事件坐标

/**
 * getPageX
 * @param event
 * @returns {number|Number|*}
 */
function getPageX(event){
    return event.pageX||event.clientX+scroll().scrollLeft;
}

/**
 * getPageY
 * @param event
 * @returns {number|Number|*}
 */
function getPageY(event){
    return event.pageY||event.clientY+scroll().scrollTop;
}


//--------------------Compatibility problem 7-------------------------
//注册事件兼容性封装

/**
 *注册事件
 * @param obj
 * @param type
 * @param fn
 */
function addEvent(obj,type,fn){
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,fn);
    }else{
        obj["on"+type] = fn;
    }
}

/**
 * 移除事件
 * @param obj
 * @param type
 * @param fn
 */
function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,fn);
    }else{
        obj["on"+type] = null;
    }
}

//--------------------Compatibility problem 7-------------------------
//阻止冒泡兼容性封装

function stopBubble(event){
   event.stopPropagation?event.stopPropagation():event.cancelBubble=true;
}