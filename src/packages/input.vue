<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change',$event.target.value)"
            @input="$emit('input',$event.target.value)"
            @focus="$emit('focus',$event.target.value)"
            @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>    
</template>
<script>
import Icon from './icon.vue'
export default {
    components:{Icon},
    name:'GuluInput',
    props:{
        value:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$border-color-error: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;

    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $border-color-error;
    }
  }
  .icon-error {
    fill: $border-color-error;
  }
  .errorMessage {
    color: $border-color-error;
  }
}
</style>
