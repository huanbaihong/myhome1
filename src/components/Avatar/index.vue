<template>
  <img 
    :src="url" 
    :style = "{width: size + 'px', height: size + 'px'}"
    alt="头像" 
    class="avatar-container" />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
        type: Number,
        default: 150,
    },
  },
};
</script>

<style lang = "less" scoped>
    .avatar-container{
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>