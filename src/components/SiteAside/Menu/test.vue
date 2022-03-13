<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import "./styles/global.less";
import Menu from "./components/Menu";
export default {
  components: {
    Menu,
  }
}
</script>

<style lang = "less">
.test-container{
  width: 300px;
  height: 400px;
  border: 1px solid;
  background: #000;

}
</style>