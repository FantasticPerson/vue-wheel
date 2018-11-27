<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'GuluCollapse' ,
    props:{
        single:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            eventBus:new Vue()
        }
    }  ,
    provide(){
        if(this.single){
            return {
                eventBus:this.eventBus
            }
        }
        
    } ,
    mounted(){
        // this.eventBus.$on('update:selected',(vm)=>{
        //     if(vm != this)
        // })
    }
}
</script>
<style lang="scss" scoped>
$grey: #ddd;
$radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $radius;
}
</style>
