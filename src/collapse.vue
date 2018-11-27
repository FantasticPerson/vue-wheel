<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name:'GuluCollapse'    
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
