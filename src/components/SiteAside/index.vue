<template>
  <div class="site-aside-container">
    <Avatar
      url="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202007%2F23%2F20200723073713_vemhn.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649422683&t=fb0b1fc18f93cd816e91aedece024c38"
    />
    <h1>我的家园</h1>
    <Menu />
    <Contact />
    <p class="footer">@拉俄咖啡马力的就饿了</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
}
.avatar-container {
    margin: 0 auto;
}
h1{
    font-size: 1.2em;
    text-align: center;
    color: #fff;
}
.footer{
    text-align: center;
    font-size: 12px;
}
</style>