<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>

export default {
    name:'GuluToast'
}
</script>
<style lang="scss" scoped>
.toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    line-height: 1.8;
    height: 40px;
    display: flex;
    align-items: center;
    background-color:rgba(0,0,0,0.75);
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
    color: #FFF;
    padding: 0 16px;
}
</style>
