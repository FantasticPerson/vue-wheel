<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
        <cascader-items :items="source"></cascader-items>
    </div>
  </div>
</template>
<script>
import CascaderItems from './cascader-items'
export default {
    data(){
        return {
            popoverVisible:false
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
        CascaderItems
    },
    created(){
        console.log(this.source)
    }
}
</script>
<style lang="scss" scoped>
@import url(./_var.scss);
.cascader {
    .trigger{
        border:1px solid red;
        height: 32px;
        width: 100px;
    }
    .popover{
        border:1px solid red;
        height: 200px;
        width: 80px;
    }
}
</style>
