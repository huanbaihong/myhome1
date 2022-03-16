<template>
  <div class="blog-comment-container">
    <MessageArea 
     @submit="handleSubmit" 
     title="评论列表" 
     :subTitle="`(${data.total})`"
     :list = "data.rows" 
     :isListLoading = "isLoading"/>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { postComment, getComments } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData";


export default {
  components: {
    MessageArea,
  },
  mixins: [fetchData({total: 0, rows: []})],
  data(){
    return {
      page: 1,
      limit: 10,
    }
  },
  computed: {
    hasMore(){
      return this.data.rows.length < this.data.total;
    }
  },
  created(){
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed(){
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    async fetchData(){
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("评论成功");
      
    },
    handleScroll(dom){
      //加载更多数据
      if(this.isLoading || !dom){
        return;
      }
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if(dec <= range){
        //滚动到底部了,加载更多评论
        this.fetchMore();
      }
    },
    async fetchMore(){
      if(!this.hasMore){
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
  },
};
</script>

<style lang = "less" scoped>
.blog-comment-container{
  margin: 30px 0;
}
</style>