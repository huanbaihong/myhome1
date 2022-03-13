<template>
  <div class="test-container">
    <ImageLoader
      url="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration = "2000"
    />
  </div>
</template>

<script>
import ImageLoader from "./components/ImageLoader";
export default {
  components: {
    ImageLoader,
  }
}
</script>

<style lang = "less" scoped>
  .test-container{
    width: 500px;
    height: 300px;
    border: 2px solid;
    margin: 0 auto;
  }
</style>