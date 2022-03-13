import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 
 * @param {String} content 显示的内容文字
 * @param {String} type 图标类型
 * @param {Number} duration 图标多久后消失
 * @param {HTMLElement} container 消息框显示的容器  
 * @param {Function} callback 图标消失后的回调函数(可选)
 */
export default function(options){
    const content = options.content || "";
    const type = options.type || "info";
    const duration  = options.duration || 1000;
    const container = options.container || document.body;

    const div = document.createElement('div');
    //获取Icon组件的Dom
    const iconDom = getComponentRootDom(Icon, {type});

    div.innerHTML = `<span class = "${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;

    //容器的position是否改动过
    if(getComputedStyle(container).position === "static"){
        container.style.position = "relative";
    }
    //容器插入元素
    container.appendChild(div);
    div.clientHeight;

    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;
    //一段时间后消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener("transitionend", function(){
            div.remove();
            options.callback && options.callback();
        })
    }, duration);
}