<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Dudududududud-duddu</span>
      </a>
    </li>
    <li>
      <a href="mailto:234242@qq.com">
        <div class="icon">
          <Icon type="email" />
        </div>
        <span>1231231231@qq.com</span>
      </a>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1273173812738217</span>
      </a>
      <div class="pop">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F22%2F20200422161709_sxxqh.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649593951&t=4b09e4415d5c86e76c3f3dff34da95be" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon">
          <Icon type="weixin" />
        </div>
        <span>jfaine238974</span>
      </a>
      <div class="pop">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F22%2F20200422161709_sxxqh.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649593951&t=4b09e4415d5c86e76c3f3dff34da95be" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  margin: 0;
  padding: 20px;
  color: @gray;
  @itemHeight: 30px;
  li{
      height: @itemHeight;
      line-height: @itemHeight;
      margin: 14px 0;
      position: relative;
      &:hover{
          .pop{
              transform: scaleY(1);
          }
      }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
  .icon{
      font-size: 26px;
      width: 36px
  }
  .pop{
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img{
        width: 150px;
        height: 150px;
    }
    &::after{
        content: "";
        width: 8px;
        height: 8px;
        background: #fff;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 50%) rotate(45deg);
    }
}
}

</style>