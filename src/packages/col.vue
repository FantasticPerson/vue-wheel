<template>
    <div class="col" :class="colClasses"
     :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = (value)=>{
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key=>{
        if(!['span','offset'].includes(key)){
            valid = false
        }
    })
    return valid
}
export default {
    name:'GuleCol',
    props:{
        span:{
            type:[Number,String]
        },
        offset:{
            type:[Number,String]
        },
        ipad:{type:Object,validator},
        narrowPc:{type:Object,validator},
        pc:{type:Object,validator},
        widePc:{type:Object,validator}
    },
    data(){
        return {
            gutter:0,
        }
    },
    methods:{
      createClasses(obj,str=''){
        if(!obj) return []
        let array = []
        if(obj.span){
          array.push(`col-${str}${obj.span}`)
        }
        if(obj.offset){
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
    },
    computed:{
        colStyle(){
            const {gutter} = this
            return {
                paddingLeft:gutter/2+'px',
                paddingRight:gutter/2+'px'
            }
        },
        colClasses(){
            let {span,offset,ipad,narrowPc,pc,widePc} = this
            let createClasses=this.createClasses
            return [
              ...createClasses({span,offset}),
              ...createClasses(ipad,'ipad-'),
              ...createClasses(narrowPc,'narrow-'),
              ...createClasses(pc,'pc-'),
              ...createClasses(widePc,'wide-'),
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
$class-prefix: col-;
@for $n from 1 through 100 {
  &.#{$class-prefix}#{$n} {
    width: ($n/24) * 100%;
  }
}
$class-prefix: offset-;
@for $n from 1 through 100 {
  &.#{$class-prefix}#{$n} {
    margin-left: ($n/24) * 100%;
  }
}
@media (min-width: 577px) {
  $class-prefix: col-ipad-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-ipad-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
@media (min-width: 769px) {
  $class-prefix: col-narrow-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-narrow-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
@media (min-width: 993px) {
  $class-prefix: col-pc-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-pc-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
@media (min-width: 1201px) {
  $class-prefix: col-wide-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-wide-;
  @for $n from 1 through 100 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
