<template>
  <div 
   class="carousel-item-container" 
   @mousemove="handleMouseMove"
   @mouseleave="handelMouseLeave"
   ref = "container">
    <div 
     class="img-container"
     ref = "img"
     :style="imgPosition">
      <ImageLoader
        :url="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="this.showWords"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: {
    carousel: {
      type: Object,
      required: true,
    },
  },
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,//容器尺寸
      innerSize: null, //图片尺寸
      mouseX: 0, //鼠标的横坐标
      mouseY: 0, //鼠标的纵坐标
    };
  },
  computed: {
      center(){
          return {
              x: this.innerSize.width / 2,
              y: this.innerSize.height / 2,
          }
      },
      imgPosition(){
          if(!this.innerSize || !this.containerSize){
              return;
          }
        const left = -((this.innerSize.width - this.containerSize.width) / this.containerSize.width) * this.mouseX;
        const top = -((this.innerSize.height - this.containerSize.height) / this.containerSize.height) * this.mouseY;
        return {
            transform: `translate(${left}px, ${top}px)`,
        }
      }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed(){
      window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      //文字初始状态
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      //强制渲染初始状态
      this.$refs.title.clientWidth;
      this.$refs.desc.clientWidth;

      //最终状态
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize(){
        //设置容器和图片的尺寸
        this.containerSize = {
            width: this.$refs.container.clientWidth,
            height: this.$refs.container.clientHeight,
        };
        this.innerSize = {
            width: this.$refs.img.clientWidth,
            height: this.$refs.img.clientHeight,
        }
    },
    handleMouseMove(e) {
        //鼠标移动
        const rect = this.$refs.container.getBoundingClientRect();
        this.mouseX = e.clientX - rect.left;
        this.mouseY = e.clientY - rect.top;
    },
    handelMouseLeave(){
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;    
    },
  },
};
</script>

<style lang = "less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.img-container {
  position: absolute;
  width: 110%;
  height: 110%;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  color: #fff;
  left: 30px;
  letter-spacing: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  opacity: 0;
}
.title {
  font-size: 2em;
  top: calc(50% - 40px);
}
.desc {
  font-size: 1.2em;
  top: calc(50% + 20px);
  color: lighten(@gray, 20%);
}
</style>