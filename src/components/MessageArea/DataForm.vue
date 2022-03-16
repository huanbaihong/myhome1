<template>
  <form 
   class="data-form-contaienr" 
   id="data-form-container"
   @submit.prevent="handleSubmit"
   ref = "form">
      <div class="form-item">
          <div class="input-area">
              <input 
               type="text" 
               maxlength="10" 
               placeholder="用户昵称"
               v-model="formData.nickname">
              <span class="tip">{{ formData.nickname.length }}/10</span>
          </div>
          <div class="error">{{ error.nickname }}</div>
      </div>
      <div class="form-item">
          <div class="text-area">
              <textarea 
               type="textarea" 
               placeholder="输入内容"
               maxlength="300"
               v-model="formData.content"></textarea>
              <span class="tip">{{ formData.content.length }}/300</span>
          </div>
          <div class="error">{{ error.content }}</div>
      </div>
      <div class="form-item">
          <div class="button-area">
              <button :disabled="isSubmiting">{{ isSubmiting ? "提交中。。。" : "提交" }}</button>
          </div>
      </div>
  </form>
</template>

<script>
export default {
    data(){
        return {
            formData: {
                nickname: "",
                content: "",
            },
            error: {
                nickname: "",
                content: "",
            },
            isSubmiting: false,
        }
    },
    methods: {
        handleSubmit(){
            this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
            this.error.content = this.formData.content ? "" : "请填写内容";
            if(this.error.nickname || this.error.content){
                return;
            }
            this.isSubmiting = true;
            this.$emit("submit", this.formData, (successMessage) => {
                this.$showMessage({
                    content: successMessage,
                    type: "success",
                    duration: 2000,
                    container: this.$refs.form,
                    callback: () => {
                        this.isSubmiting = false,
                        this.formData.nickname = "";
                        this.formData.content = "";
                    }
                });
            });
        }
    }
}
</script>

<style lang = "less" scoped>
@import "~@/styles/var.less";
    .data-form-container{
        margin-bottom: 2em;
        overflow: hidden;
    }
    .form-item{
        margin-bottom: 8px;
    }
    .input-area{
        width: 50%;
        position: relative;
    }
    .text-area{
        width: 100%;
        position: relative;
    }
    input,
    textarea{
        width: 100%;
        display: block;
        box-sizing: border-box;
        outline: none;
        color: @words;
        font-size: 14px;
        border-radius: 4px;
        border: 1px dashed @gray;
    }
    input{
        height: 40px;
        padding: 0 15px;
    }
    textarea{
        resize: none;
        height: 120px;
        padding: 8px 15px;
    }
    .tip{
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #b4b8bc;
        font-size: 12px;
    }
    .error{
        margin-top: 6px;
        color: @danger;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    button{
        width: 100px;
        height: 34px;
        border: none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        background: @primary;
        outline: none;
        position: relative;
        &:hover{
            background: darken(@primary, 10%);
        }
        &:disabled{
            background: lighten(@primary, 20%);
            cursor: not-allowed;
        }
    }
</style>