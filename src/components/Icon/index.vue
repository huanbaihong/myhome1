<template>
  <i class="icon-container iconfont" :class="iconClass"></i>
</template>

<script>
let classMap = {
    error: "iconcuowu",
    qq: "iconqq",
    blog: "iconblog",
    message: "iconliuyan",
    weixin: "iconweixin",
    success: "iconGroup-",
    close: "iconguanbi",
    arrowDown: "icontubiaozhizuo-",
    arrowUp: "iconiconfonticonfonti2copy",
    empty: "iconempty",
    home: "iconzhuye",
    about: "iconset_about_hov",
    info: "iconxinxi",
    warn: "iconjinggao",
    github: "icongithub",
    email: "iconEmailus",
    code: "iconcode",
};
export default {
    props: {
        type: {
            type: String,
            default: "info",
        },
    },
    computed: {
        iconClass(){
            return classMap[this.type];
        }
    }
}
</script>

<style lang = "less" scoped>
@import "//at.alicdn.com/t/font_2465804_cfmi7e9i8e5.css";
.icon-container{
    font-size: inherit;
    color: inherit;
}
</style>