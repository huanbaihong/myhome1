<template>
  <div class="image-loader-container">
      <img 
       v-if= "!everythingDone"
       :src="placeholder" 
       alt="" 
       class="placeholder">
      <img 
       :src="url" 
       alt="" 
       class="org"
       @load="handleOriginLoaded"
       :style="{opacity: originOpacity , transition: `${duration}ms`
       }">
      
  </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 1000,
        }
    },
    data(){
        return {
            originLoaded: false,
            everythingDone: false,
        }
    },
    computed: {
        originOpacity(){
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {
        handleOriginLoaded(){
            this.originLoaded = true;
            setTimeout(()=> {
                this.everythingDone = true;
                this.$emit("load")
            }, this.duration);
        }
    }
}
</script>

<style lang = "less" scoped>
@import "~@/styles/mixin.less";
    .image-loader-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img{
           .self-fill();
           object-fit: cover;
        }
        .palceholder{
            filter: blur(2vm);
        }
    }
</style>