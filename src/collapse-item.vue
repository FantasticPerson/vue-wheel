<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
    name:'GuluCollapseItem',
    data(){
        return {
            open:false,
            single:false
        }
    },
    props:{
        title:{
            type:String,
            required:true
        },
        name:{
            type:[String,Number],
            required:true,
            default:''
        }
    },
    inject:['eventBus'],
    mounted(){
        this.eventBus.$on('update:selected',(names)=>{
            console.log(names)
            console.log(this.name)
            console.log(names.indexOf(this.name))
            if(names.indexOf(this.name) >= 0){
                this.open = true
            } else {
                this.open = false
            }
        })
    },
    methods:{
        toggle(){
            if(this.open){
                console.log('remove')
                this.eventBus.$emit('update:removeSelected',this.name)
            } else {
                console.log('add')
                this.eventBus.$emit('update:addSelected',this.name)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$grey: #ddd;
$radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child {
      margin-bottom: -1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>