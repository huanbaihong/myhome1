<template>
  <div 
   class="home-container" 
   ref = "container"
   @wheel = "handleWheel"
   v-loading = "isLoading">
    <ul 
     class="carousel-container" 
     :style = "{marginTop}"
     @transitionend = "handleTransitionend">
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item"/>
      </li>
    </ul>
    <div v-if = "index > 0" class="icon arrow-up" @click = "handleClick(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div v-if = "index < data.length - 1" class="icon arrow-down" @click = "handleClick(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li 
       v-for="(item, i) in data" 
       :key="item.id"
       @click = "handleClick(i)"
       :class= "{actived: i === index}"></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import fetchData from '@/mixins/fetchData.js';

export default {
  mixins: [fetchData([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      isSwitching: false,
    };
  },
  components: {
    CarouselItem,
    Icon,
  },
  mounted(){
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed(){
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop(){
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    async fetchData(){
      return await getBanners();
    },
    handleClick(newIndex){
      this.index = newIndex;
    },
    handleWheel(e){
      if(this.isSwitching){
        return;
      }
      if(e.deltaY > 5 && this.index < this.data.length - 1){
        //向下滚动
        this.isSwitching = true;
        this.index ++;
      }else if(e.deltaY < -5 && this.index > 0){
        //向上滚动
        this.isSwitching = false;
        this.index --;  
      }else{
        return;
      }
    },
    handleTransitionend(){
      this.isSwitching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    }
  }
};
</script>

<style lang = "less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  @gap: 15px;
  position: absolute;
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  &.arrow-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.arrow-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @gap);
    }
    50% {
      transform: translate(-50%, -@gap);
    }
    100% {
      transform: translate(-50%, @gap);
    }
  }
   @keyframes jump-down {
    0% {
      transform: translate(-50%, -@gap);
    }
    50% {
      transform: translate(-50%, @gap);
    }
    100% {
      transform: translate(-50%, -@gap);
    }
  }
}
.indicator{
  position: absolute;
  .self-center();
  left: auto;
  right: 40px;
  li{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.actived{
      background: #fff;
    }
  }
  
}
</style>