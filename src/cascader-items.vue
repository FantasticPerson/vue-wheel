<template>
    <div class="test">
        123
    </div>
</template>
<script>
export default {
    name:'GuluCascaderItem',
    props:['sourceitem'],
    mounted(){
        console.log(this.sourceitem)
    }   
}
</script>
<style lang="scss" scoped>

</style>
