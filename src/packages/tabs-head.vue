<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>    
</template>
<script>
export default {
    name:'GuluTabsHead',
    inject:['eventBus'],
    data(){
        return {
        }
    },
    mounted(){
        this.eventBus.$on('update:selected',(item,vm)=>{
            this.$nextTick(()=>{
                if(vm){
                    const {line} = this.$refs
                    let {width,height,top,left} = vm.$el.getBoundingClientRect()
                    line.style.width = width + 'px'
                    line.style.left = left + 'px'
                }
            })
            
        })
    }
}
</script>
<style lang="scss" scoped>
$height: 40px;
$blue: blue;
.tabs-header {
  display: flex;
  height: $height;
  position: relative;
  border-bottom: 1px solid #ddd;
  justify-content: flex-start;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 250ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
