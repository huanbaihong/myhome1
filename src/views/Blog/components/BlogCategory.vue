<template>
    <div class="blog-category-container" v-loading = "isLoading">
        <h2>文章分类</h2>
        <RightList :list ="list" @select="handleSelect"/>
    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getBlogTypes} from "@/api/blog.js";
import RightList from "./RightList.vue";

export default {
    mixins: [fetchData([])],
    components: {
        RightList,
    },
    computed: {
        categoryId(){
            return +this.$route.params.categoryId || -1;
        },
        limit(){
            return +this.$route.query.limit || 10;
        },
        list(){
            const totalArticle = this.data.reduce((a, b) => a + b.articleCount, 0);
            const result = [
                {
                    id: -1,
                    name: "全部",
                    articleCount: totalArticle,
                },
                ...this.data,
            ];
            return result.map((it) => ({
                ...it,
                isSelect: it.id === this.categoryId,
                aside: `${it.articleCount}篇`,
            }));
        },
    },
    methods: {
        async fetchData(){
            return await getBlogTypes();
        },
        handleSelect(item){
            const query = {
                page: 1,
                limit: this.limit,
            }
            if(item.id === -1){
                //没有动态路由
                this.$router.push({
                    name: "Blog",
                    query,
                });
            }else{
                this.$router.push({
                    name: "CategoryBlog",
                    params: {
                        categoryId: item.id,
                    },
                    query,
                })
            }
        }
    }
}
</script>

<style lang = "less" scoped>
    .blog-category-container{
        width: 300px;
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        overflow-y: auto;
    }
    h2{
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
</style>