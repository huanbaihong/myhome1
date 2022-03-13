<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left-side">left</div>
      </template>
      <template #default>
        <div class="main-side">main</div>
      </template>
      <template #right>
        <div class="right-side">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang = "less">
.test-container {
  width: 80%;
  height: 500px;
  border: 1px solid;
  margin: 0 auto;
}
.left-side{
  width: 150px;
  height: 100%;
  background: lightblue;
}
.main-side{
  width: 100%;
  height: 100%;
  background: lightcoral;
}
.right-side{
  width: 200px;
  height: 100%;
  background: lightgreen;
}
</style>