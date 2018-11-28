<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <cascader-item :sourceitem="item"></cascader-item>
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItem from './cascader-item'
console.log(CascaderItem)
export default {
    data(){
        return {
            items:[{type:1},{type:2}]
        }
    },
    name:'GuluCascader',
    props:{
        source:{
            type:Array,
            required:true
        }
    },
    components:{
        CascaderItem
    },
    created(){
        console.log(this.source)
    }
}
</script>
<style lang="scss" scoped>

.cascader {
}
</style>
