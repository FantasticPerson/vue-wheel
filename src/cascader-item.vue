<template>
  <div class="cascaderItem">
    123
      <div v-if="sourceitem.children" v-for="item in sourceitem.children">
        <cascader-item :sourceitem="item"></cascader-item>
      </div>
  </div>
</template>
<script>

export default {
    name:"CascaderItem",
    props:{
      sourceitem:{
        type:Object,
        required:true
      }
    },
    created(){
        console.log('created');
        console.log(this)
    },
    mounted(){
      console.log(this.sourceItem)
    },

    components:{}
}
</script>
<style lang="scss" scoped>
.cascaderItem {
  border: 1px solid red;
  margin: 10px;
}
</style>
