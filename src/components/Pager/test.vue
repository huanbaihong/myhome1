<template>
  <Pager 
   :current = "current" 
   :total = "total" 
   :visibleNumber = "8"
   @pageChange = "handlePageChange"/>
</template>

<script>
import Pager from './components/Pager';
export default {
  components: {
    Pager,
  },
  data(){
    return {
      current: 10,
      total: 350,
    }
  },
  methods: {
    handlePageChange(newPage){
      console.log(newPage);
      this.current = newPage;
    }
  }
}
</script>

<style>

</style>