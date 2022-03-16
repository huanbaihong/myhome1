<template>
  <Layout>
    <template #default>
      <div class="main-container" v-loading="isLoading" ref = "mainContainer">
        <BlogDetail :blog="data" v-if="data" />
        <BlogComment v-if="!isLoading"/>
      </div>
    </template>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogToc from "./components/BlogToc.vue";
import fetchData from "@/mixins/fetchData";
import { getBlogDetail } from "@/api/blog.js";
import BlogComment from "./components/BlogComment.vue";

export default {
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment,
  },
  mixins: [fetchData(null)],
  mounted(){
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  destroyed(){
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    async fetchData() {
      return await getBlogDetail(this.$route.params.id);
    },
    handleScroll(){
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    }
  },
};
</script>

<style lang = "less" scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
}
</style>