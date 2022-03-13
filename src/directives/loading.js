import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
/**
 * 
 * @param {*} el 
 * @returns 获取当前已经存在的img元素
 */
function getLoadingImg(el){
    return el.querySelector("img[data-role = loading]");
}
/**
 * 
 * @returns 创建了一个img元素
 */
function createLoadingImg(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}   
export default function(el, binding){
    const curImg = getLoadingImg(el);
    if(binding.value){
        //如果当前不存在则需要添加
        if(!curImg){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else{
        //如果当前存在则删除，不存在则不处理
        if(curImg){
            curImg.remove();
        }
    }
}