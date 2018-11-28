<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
      <cascader-items
        class="popover"
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from './cascader-items'
export default {
    name:'GuluCascader',
    data(){
        return {
            popoverVisible:false
        }
    },
    methods:{
        onUpdateSelected(newSelected){
            this.$emit('update:selected',newSelected)
        }
    },
    props:{
        source:{
            type:Array,
            required:true
        },
        popoverHeight:{
            type:String
        },
        selected:{
            type:Array,
            default:()=>[]
        }
    },
    components:{
        CascaderItems
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/_var.scss";
.cascader {
  position: relative;
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
  .popoverWrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    display: flex;
    @extend .box-shadow;
  }
}
</style>
