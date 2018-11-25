<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'GuluTabs',
    props:{
        selected:{
            type:String,
            required:true
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        },
    },
    provide(){//提供  事件总线  所有的子元素都能访问到
        return {
            eventBus:this.eventBus
        }
    },
    data(){
        return {
            eventBus:new Vue()
        }
    },
    mounted(){
        if(this.$children.length === 0){
            console &&　console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-body，但是你没有写子组件')
        }
        let tabsHead = this.$children.find(item=>{
            return item.$options.name === 'GuluTabsHead'
        })
        if(tabsHead){
            let tabsItem = tabsHead.$children.find(item=>{
                return item.$options.name === 'GuluTabsItem' && item.name === this.selected
            })
            if(tabsItem){
                this.eventBus.$emit('update:selected',this.selected,tabsItem)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
