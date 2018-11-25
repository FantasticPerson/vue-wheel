<template>
    <div class="tabs-header">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>    
</template>
<script>
export default {
    name:'GuluTabsHeader',
    inject:['eventBus']
}
</script>
<style lang="scss" scoped>
$height : 40px;
.tabs-header {
    display: flex;
    height: $height;
    justify-content: flex-start;
    // align-items: center;
    border: 1px solid red;
    > .actions-wrapper{
        margin-left: auto;
    }
}
</style>
