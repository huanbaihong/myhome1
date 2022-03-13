<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import "./styles/global.less";
import SiteAside from "./components/SiteAside";
export default {
  components: {
    SiteAside,
  }
}
</script>

<style lang = "less">
  .test-container{
    width: 250px;
    height: 600px;
    border: 1px solid;
    margin: 0 auto;
  }
</style>