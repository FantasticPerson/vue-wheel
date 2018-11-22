<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'GuleCol',
    props:{
        span:{
            type:[Number,String]
        }
    }
}
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
  background: blue;
  width: 50%;
  border: 1px solid red;
}
$class-prefix: col-;
@for $n from 1 through 100 {
  &.#{$class-prefix}#{$n} {
    width: ($n/24) * 100%;
  }
}
</style>
