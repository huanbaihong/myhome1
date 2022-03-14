<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <SiteAside />
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import "./styles/global.less";
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside,
  }
}
</script>

<style lang = "less">
@import "./styles/mixin.less";
  .app-container{
    .self-fill();
  }
  .left{
    .site-aside-container{
      width: 250px;
      height: 100%;
    }
    
  }
</style>

