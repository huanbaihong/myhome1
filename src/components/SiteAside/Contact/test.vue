<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import "./styles/global.less";
import Contact from "./components/Contact";
export default {
  components: {
    Contact,
  }
}
</script>

<style lant = "less">
  .test-container{
    width: 250px;
    height: 400px;
    border: 1px solid;
    background: #000;
  }
</style>