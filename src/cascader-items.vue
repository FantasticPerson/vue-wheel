<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
        <span v-if="item.children">></span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-item :items="rightItems" :height="height"></gulu-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
    name:"GuluCascaderItem",
    props:{
      items:{
        type:Array,
        required:true
      },
      height:{
        type:String
      }
    },
    data(){
      return {
        leftSelected:null
      }
    },
    computed:{
      rightItems(){
        if(this.leftSelected && this.leftSelected.children){
          return this.leftSelected.children
        } else {
          return null
        }
      }
    },
    mounted(){
      console.log(this.height)
    },
    components:{}
}
</script>
<style lang="scss" scoped>
@import './_var.scss';
.cascaderItem {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light; 
  }
  .label{
    padding: 0.3em 1em;
  }
}
</style>
