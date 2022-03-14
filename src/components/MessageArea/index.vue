<template>
  <div class="message-area-container">
      <data-form></data-form>
      <h3>
          {{ title }}
          <span>{{ subTitle }}</span>
      </h3>
      <data-list></data-list>
  </div>
</template>

<script>
import DataForm from './DataForm.vue'
import DataList from './DataList.vue'
export default {
  components: { DataForm, DataList },
  props: {
      title: {
          type: String,
          default: "",
      },
      subTitle: {
          tyle: String,
          default: "",
      }
  }

}
</script>

<style>

</style>