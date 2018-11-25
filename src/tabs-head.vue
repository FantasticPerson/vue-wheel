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
    created(){
        this.eventBus.$on('update:selected',(item)=>{

        })
    }
}
</script>
<style lang="scss" scoped>
$height : 40px;
$blue:blue;
.tabs-header {
    display: flex;
    height: $height;
    position: relative;

    justify-content: flex-start;
    > .line{
        position: absolute;
        bottom: 0;
        border-bottom: 1px solid $blue;
        width: 100px;
    }
    > .actions-wrapper{
        margin-left: auto;
    }
}
</style>
