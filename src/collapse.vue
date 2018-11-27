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
        },
        selected:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            eventBus:new Vue()
        }
    }  ,
    provide(){
        return {
            eventBus:this.eventBus
        }
    } ,
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)
        this.eventBus.$on('update:addSelected',(name)=>{
            let copySelected = JSON.parse(JSON.stringify(this.selected))
            if(this.single){
                copySelected = [name]
                this.eventBus.$emit('update:selected',copySelected)
                this.$emit('update:selected',copySelected)
            } else {
                if(copySelected.indexOf(name) < 0){
                    copySelected.push(name)
                    this.eventBus.$emit('update:selected',copySelected)
                    this.$emit('update:selected',copySelected)
                }
            }
        })
        this.eventBus.$on('update:removeSelected',(name)=>{
            let copySelected = JSON.parse(JSON.stringify(this.selected))
            let index = copySelected.indexOf(name)
            if(index >= 0){
                copySelected.splice(index,1)
                this.eventBus.$emit('update:selected',copySelected)
                this.$emit('update:selected',copySelected)
            }
        })
        this.$children.forEach((item)=>{
            item.single = this.single
        })
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
