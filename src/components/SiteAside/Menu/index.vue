<template>
  <nav class="menu-container">
      <RouterLink
       v-for="item in items"
       :key="item.name"
       :to = "{ name: item.name }"
       :exact = "item.exact"
       active-class="selected"
       exact-active-class="">
        <div class="icon">
            <Icon :type = "item.icon"/>
        </div>
        <p>{{ item.title }}</p>
      </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    data(){
        return {
            items: [
                {
                    name: "Home",
                    title: "首页",
                    icon: "home",
                    exact: true,
                },
                {
                    name: "Blog",
                    title: "文章",
                    icon: "blog",
                    exact: false,
                },
                {
                    name: "About",
                    title: "关于我",
                    icon: "about",
                    exact: true,
                },
                {
                    name: "Project",
                    title: "项目&效果",
                    icon: "code",
                    exact: true,
                },
                {
                    name: "Message",
                    title: "留言板",
                    icon: "message",
                    exact: true,
                }
            ],
        }
    },
    components: {
        Icon,
    },
}
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
.menu-container{
    color: @gray;
    margin: 24px 0;
    a{
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 50px;
        height: 45px;
        &.selected{
            background: darken(@words, 3%);
        }
        &:hover{
            color: #fff;
        }
        .icon{
            width: 24px;
        }
    }
}
</style>

