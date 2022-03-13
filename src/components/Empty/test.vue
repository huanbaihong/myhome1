<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./components/Empty";
export default {
  components: {
    Empty,
  }
}
</script>

<style>
.test-container{
  width: 500px;
  height: 500px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>