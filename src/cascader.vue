<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
        <cascader-items :items="source" class="popover" :height="popoverHeight"></cascader-items>
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
        },
        popoverHeight:{
            type:String
        }
    },
    components:{
        CascaderItems
    }
}
</script>
<style lang="scss" scoped>
@import "./_var.scss";
.cascader {
    position: relative;
    .trigger{
        border:1px solid red;
        height: 32px;
        width: 100px;
    }
    .popoverWrapper{
        position: absolute;
        top: 100%;
        left: 0;
        background-color: white;
        display: flex;
        @extend .box-shadow
    }
}
</style>
